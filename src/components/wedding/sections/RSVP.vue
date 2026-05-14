<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import type { DocumentData } from "firebase/firestore";
import { db } from '@/firebase';
import hoji from '@/assets/images/saveTheDate/hoji.png'
import miso from '@/assets/images/saveTheDate/miso.png'
import pumpkin from '@/assets/images/saveTheDate/pumpkin.png'

enum BusLocation {
    Cockburn = "cockburn station",
    Perth = "perth city",
    NotRequired = "not required"
}

interface RSVPForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    isAttending: boolean | null;
    pickUpDropOff: BusLocation | null;
    allergyOrIntolerance: string | null;
    dietaryPreference: string | null;
}

const form = ref<RSVPForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: null,
    isAttending: null,
    pickUpDropOff: null,
    allergyOrIntolerance: null,
    dietaryPreference: null
});

const isSubmitting = ref(false);
const submitError = ref('');
const submitSuccess = ref(false);
const exisitingUserId: Ref<string | null> = ref(null);
const showAllergyInput: Ref<boolean | null> = ref(null);
const showDietPreferenceInput: Ref<boolean | null> = ref(null);
const showBusOptions: Ref<boolean | null> = ref(null);

async function checkUserExists(): Promise<DocumentData | null> {
    form.value.firstName = form.value.firstName.trim().toLowerCase();
    form.value.lastName = form.value.lastName.trim().toLowerCase();

    const q = query(
        collection(db, "submissions"),
        where("firstName", "==", form.value.firstName),
        where("lastName", "==", form.value.lastName)
    );

    const querySnapshot = await getDocs(q);

    if(querySnapshot.empty) {
        return null;
    }

    const user = querySnapshot.docs[0]
    exisitingUserId.value = user.id;

    return user.data();
}

async function checkExistingRSVP() {
    submitError.value = '';
    isSubmitting.value = true;
    
    try {
         const user: DocumentData | null = await checkUserExists();

        if (!user) {
            submitError.value = "We can't seem to find you. Please double check the name inputed is correct or contact us for help.";
            resetForm();
            return;
        }
        
        form.value.isAttending = user.isAttending;
        
        if (user.isAttending === true) {
            form.value.email = user.email;
            form.value.phone = user.phone;
            form.value.pickUpDropOff = user.pickUpDropOff;
            form.value.allergyOrIntolerance = user.allergyOrIntolerance;
            form.value.dietaryPreference = user.dietaryPreference;

            if(user.allergyOrIntolerance !== undefined) {
                showAllergyInput.value = form.value.allergyOrIntolerance !== 'none';
            }
    
            if(user.dietaryPreference !== undefined) {
                showDietPreferenceInput.value = form.value.dietaryPreference !== 'none';
            }
    
            if(user.pickUpDropOff !== undefined) {
                showBusOptions.value = form.value.pickUpDropOff !== BusLocation.NotRequired;
            }
        }

    }
    catch (error) {
        submitError.value = 'An error occurred while checking your RSVP. Please try again.';
        console.error('RSVP check error:', error);
    }
    finally {
        isSubmitting.value = false;
    }
}

async function handleSubmit() {
    try {
        if(!exisitingUserId.value) {
            submitError.value = 'No existing RSVP found. Please check your name first.';
            return;
        }

        if (form.value.isAttending === null) {
            submitError.value = 'Please indicate whether you will be attending.';
            return;
        }

        if(form.value.isAttending === true) {
            if(!form.value.pickUpDropOff) {
                if (!showBusOptions.value) {
                    submitError.value = 'Please let us know if you would like to use the bus.';
                    return;
                }
            
                submitError.value = 'Please choose a pick-up/drop-off location for the bus.';
                return;
            }

            if(!form.value.allergyOrIntolerance) {
                if(!showAllergyInput.value) {
                    submitError.value = 'Please let us know if you have any allergies/intolerances.'
                    return;
                }
                
                submitError.value = 'Please list your allergies/intolerances.';
                return;
            }

            if(!form.value.dietaryPreference) {
                if(!showDietPreferenceInput.value) {
                    submitError.value = 'Please let us know if you have any dietary preferences.';
                    return;
                }

                submitError.value = 'Please list your dietary preferences.';
                return;
            }
        }

        isSubmitting.value = true;
        submitError.value = '';

        await setDoc(doc(db, "submissions", exisitingUserId.value), {
            ...form.value,
            submittedAt: new Date().toISOString()
        });

        submitSuccess.value = true;
    } catch (error) {
        submitError.value = 'Failed to submit RSVP. Please try again.';
        console.error('RSVP submission error:', error);
    } finally {
        if(!submitSuccess.value) {
            return;
        }

        console.log("RSVP submitted")
        isSubmitting.value = false;
        exisitingUserId.value = null;
        resetForm();
    }
}

async function createBaseUser() {
    isSubmitting.value = true;
    submitError.value = '';

    if(await checkUserExists()) {
        submitError.value = 'Name already exists in database.';
        isSubmitting.value = false;
        return;
    }

    // Generate a unique ID for the submission
    const submissionId = `rsvp-${Date.now()}`;

    await setDoc(doc(db, "submissions", submissionId), {
        firstName: form.value.firstName.trim().toLowerCase(), lastName: form.value.lastName.trim().toLowerCase(),
        submittedAt: new Date().toISOString()
    });
    
    submitSuccess.value = true;
    isSubmitting.value = false;

    setTimeout(() => {
        submitSuccess.value = false;
    }, 3000);

    resetForm();
}

function clearPickUpDropOff() {
    form.value.pickUpDropOff = null
}

function clearAllergyOrIntolerance() {
    form.value.allergyOrIntolerance = null;
}

function cleardietaryPreference() {
    form.value.dietaryPreference = null;
}

function resetForm() {
    form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: null,
        isAttending: null,
        pickUpDropOff: null,
        allergyOrIntolerance: null,
        dietaryPreference: null,
    };

    showBusOptions.value = null;
    showAllergyInput.value = null;
    showDietPreferenceInput.value = null;
}

function notAttending() {
    form.value.phone = null;
    form.value.email = '';
    form.value.pickUpDropOff = null;
    form.value.allergyOrIntolerance = null;
    form.value.dietaryPreference = null;

    showBusOptions.value = null;
    showAllergyInput.value = null;
    showDietPreferenceInput.value = null;
}
</script>

<template>
    <div id="rsvp-form" class="rsvp">
        <h1 class="rsvp-title">RSVP</h1>
        <div class="rsvp-container" v-if="!submitSuccess">
            <form @submit.prevent="checkExistingRSVP" class="rsvp-form" v-if="!exisitingUserId">
                <img class="rsvp-animals" :src="pumpkin">
                <h2 class="rsvp-subtitle">Find my invite</h2>
                <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input 
                        id="firstName"
                        v-model="form.firstName"
                        type="text"
                        required
                        placeholder="Enter your first name"
                    />
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input 
                        id="lastName"
                        v-model="form.lastName"
                        type="text"
                        required
                        placeholder="Enter your last name"
                    />
                </div>
                <button type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Checking...' : 'Check RSVP' }}
                </button>
                <p v-if="submitError" class="error-message">{{ submitError }}</p>
            </form>
            <form @submit.prevent="handleSubmit" class="rsvp-form" v-else>
                <img class="rsvp-animals rsvp-animals-hoji" :src="hoji">
                <h2 class="rsvp-subtitle rsvp-subtitle-right">Let us know if you can make it!</h2>
                <div class="form-group attendance-options">
                    <label class="attendance-label">Will you be attending? *</label>
                    <div class="radio-group">
                        <div class="radio-option">
                            <input 
                                type="radio"
                                id="attending"
                                name="attendance"
                                :value="true"
                                v-model="form.isAttending"
                                required
                                class="custom-radio"
                            />
                            <span class="custom-radio-button"></span>
                            <label for="attending">Yes, I will attend</label>
                        </div>
                        <div class="radio-option">
                            <input 
                                type="radio"
                                id="not-attending"
                                name="attendance"
                                :value="false"
                                v-model="form.isAttending"
                                required
                                class="custom-radio"
                                :onclick="notAttending"
                            />
                            <span class="custom-radio-button"></span>
                            <label for="not-attending">No, I cannot attend</label>
                        </div>
                    </div>
                </div>
                <div class="form-group" v-if="form.isAttending !== false">
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input 
                            id="email"
                            v-model="form.email"
                            type="email"
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <h6>* So we can send you any important annoucements</h6>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input 
                            id="phone"
                            v-model="form.phone"
                            type="tel"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <label class="attendance-label">Will you require bus transport to and from the venue? *</label>
                    <div class="radio-group">
                        <div class="radio-option">
                            <input 
                                type="radio"
                                id="bus-required"
                                :value="true"
                                v-model="showBusOptions"
                                required
                                class="custom-radio"
                                :onclick="clearPickUpDropOff"
                            />
                            <span class="custom-radio-button"></span>
                            <label for="bus-required">Yes please</label>
                        </div>
                        <div class="radio-option">
                            <input 
                                type="radio"
                                id="bus-not-required"
                                :value="false"
                                v-model="showBusOptions"
                                required
                                class="custom-radio"
                                :onclick="()=> form.pickUpDropOff = BusLocation.NotRequired"
                            />
                            <span class="custom-radio-button"></span>
                            <label for="bus-not-required">No thanks</label>
                        </div>
                    </div>
                    <div class="form-group" v-if="showBusOptions">
                        <label class="attendance-label">Which pick-up/drop-off location would you prefer?</label>
                        <div class="radio-group">
                            <div class="radio-option">
                                <input 
                                    type="radio"
                                    id="bus-cockburn"
                                    :value="BusLocation.Cockburn"
                                    v-model="form.pickUpDropOff"
                                    :required="showBusOptions"
                                    class="custom-radio"
                                />
                                <span class="custom-radio-button"></span>
                                <label for="bus-cockburn">Cockburn Station</label>
                            </div>
                            <div class="radio-option">
                                <input 
                                    type="radio"
                                    id="bus-city"
                                    :value="BusLocation.Perth"
                                    v-model="form.pickUpDropOff"
                                    :required="showBusOptions"
                                    class="custom-radio"
                                />
                                <span class="custom-radio-button"></span>
                                <label for="bus-city">Perth City</label>
                            </div>
                        </div>
                    </div>
                    <label class="attendance-label">Do you have any Allergies/Intolerances?</label>
                    <div class="radio-group">
                        <div class="radio-option">
                            <input
                                type="radio"
                                id="allergy-or-intolerance-yes"
                                :value="true"
                                v-model="showAllergyInput"
                                class="custom-radio"
                                :onclick="clearAllergyOrIntolerance"
                            />
                            <span class="custom-radio-button"></span>
                            <label for="allergy-or-intolerance-yes">Yes</label>
                        </div>
                        <div class="radio-option">
                            <input
                                type="radio"
                                id="allergy-or-intolerance-no"
                                :value="false"
                                v-model="showAllergyInput"
                                class="custom-radio"
                                :onclick="() => form.allergyOrIntolerance = 'none'"
                            />
                            <span class="custom-radio-button"></span>
                            <label for="allergy-or-intolerance-no">No</label>
                        </div>
                    </div>
                    <div class="form-group" v-if="showAllergyInput">
                        <label for="allergies-list">Please list your Allergies/Intolerances</label>
                        <input 
                            id="allergies-list"
                            v-model="form.allergyOrIntolerance"
                            type="text"
                            placeholder="Please list them here"
                        />
                    </div>
                    <label class="attendance-label">Do you have any Dietary Preferences?</label>
                    <div class="radio-group">
                        <div class="radio-option">
                            <input
                                type="radio"
                                id="dietary-preference-yes"
                                :value="true"
                                v-model="showDietPreferenceInput"
                                class="custom-radio"
                                :onclick="cleardietaryPreference"
                            />
                            <span class="custom-radio-button"></span>
                            <label for="dietary-preference-yes">Yes</label>
                        </div>
                        <div class="radio-option">
                            <input
                                type="radio"
                                id="dietary-preference-no"
                                :value="false"
                                v-model="showDietPreferenceInput"
                                class="custom-radio"
                                :onclick="() => form.dietaryPreference = 'none'"
                            />
                            <span class="custom-radio-button"></span>
                            <label for="dietary-preference-no">No</label>
                        </div>
                    </div>
                    <div class="form-group" v-if="showDietPreferenceInput">
                        <label for="dietary-list">Please list your Dietary Preferences</label>
                        <input
                            id="dietary-list"
                            v-model="form.dietaryPreference"
                            type="text"
                            placeholder="Please list them here"
                        />
                    </div>
                </div>
                <button type="submit" :disabled="isSubmitting">
                    {{ isSubmitting ? 'Submitting...' : 'Submit RSVP' }}
                </button>
                <p v-if="submitError" class="error-message">{{ submitError }}</p>
            </form>
        </div>
        <div v-else class="rsvp-container">
            <div class="rsvp-form" v-if="form.isAttending == true">
                <img class="rsvp-animals rsvp-animals-miso" :src="miso">
                <h2>Thank you!</h2>
                <h4 class="rsvp-form-message">We have received your RSVP and will be in touch soon!</h4>
            </div>
            <div class="rsvp-form" v-else>
                <img class="rsvp-animals rsvp-animals-miso" :src="miso">
                <h2>We will miss you!</h2>
                <h4 class="rsvp-form-message">We have received your RSVP, but we understand you won't be able to join us.</h4>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="sass">
@use '@/assets/style/style' as v

.rsvp
    display: flex
    flex-direction: column
    align-items: center
    gap: 10vw
    margin: 0 auto
    padding: 10vw 10vw
    font-size: 1rem
    margin-top: 9vw
    font-family: Rubik
    // background-color: rgba(120, 120, 200, 0.6)

.rsvp-container
    position: relative
    max-width: 1200px
    width: 100%

.rsvp-subtitle
    text-align: left
    line-height: 0.6

.rsvp-subtitle-right
    padding-left: clamp(0px, 25vw, 250px)

.rsvp-animals
    position: absolute
    top: 2vw
    right: 5vw
    width: 18vw
    max-width: 200px
    height: auto

.rsvp-animals-hoji
    width: 18vw
    right: auto
    left: 5vw

.rsvp-animals-miso
    top: 2vw
    right: 2vw

.rsvp-form
    psoition: relative
    display: flex
    flex-direction: column
    gap: 1.5rem
    color: black
    background-color: white
    outline: 0.5vw solid #FF7032
    padding: 6vw
    border-radius: 5vw

.form-group
    display: flex
    flex-direction: column
    gap: 0.5rem

.rsvp-form-message
    margin-top: 3vw

label
    font-weight: bold

input
    padding: 0.5rem
    border: 1px solid #ccc
    border-radius: 4px
    font-size: 1rem

button
    padding: 0.75rem
    background-color: v.$color
    color: white
    border: none
    border-radius: 4px
    cursor: pointer
    font-size: 1rem

button:disabled
    background-color: #cccccc
    cursor: not-allowed

.error-message
    color: #ff0000
    margin-top: 1rem

.attendance-options
    margin: 1rem 0

.attendance-label
    margin-bottom: 0.5rem

.radio-group
    display: flex
    flex-direction: row
    gap: 0.75rem

.radio-option
    position: relative
    display: flex
    align-items: center
    gap: 0.5rem

    .custom-radio
        opacity: 0
        cursor: pointer

    .custom-radio-button
        height: 20px
        width: 20px
        border: 2px solid #ccc
        display: inline-block
        position: absolute
        cursor: pointer
        pointer-events: none
        
    .custom-radio:checked + .custom-radio-button
        background-color: v.$color
        border-color: v.$color

    .custom-radio:checked + .custom-radio-button:after
        content: ''
        position: absolute
        left: 6px
        top: 2px
        width: 5px
        height: 10px
        border: solid white
        border-width: 0 2px 2px 0
        transform: rotate(45deg)

    label
        margin-left: 0.5rem
        cursor: pointer
</style>