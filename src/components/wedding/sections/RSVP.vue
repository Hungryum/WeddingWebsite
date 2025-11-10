<script setup lang="ts">
import { ref, Ref } from 'vue';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '@/firebase';

interface RSVPForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isAttending: boolean | null;
}

const form = ref<RSVPForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isAttending: null
});

const isSubmitting = ref(false);
const submitError = ref('');
const submitSuccess = ref(false);
const exisitingUserId: Ref<string | null> = ref(null);

async function checkUserExists(): Promise<string | null> {
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

    return querySnapshot.docs[0].id;
}

async function checkExistingRSVP() {
    submitError.value = '';
    isSubmitting.value = true;
    exisitingUserId.value = await checkUserExists();

    if (!exisitingUserId.value) {
        submitError.value = "We can't seem to find you. Please double check the name inputed is correct or contact us for help.";
        resetForm();
    }

    isSubmitting.value = false;
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

function resetForm() {
    form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        isAttending: null
    };
}
</script>

<template>
    <div id="rsvp-form" class="rsvp">
        <h1 class="rsvp-title">RSVP</h1>
        <div class="rsvp-container" v-if="!submitSuccess">
            <form @submit.prevent="checkExistingRSVP" class="rsvp-form" v-if="!exisitingUserId">
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
                <h2 class="rsvp-subtitle">Let us know if you can make it!</h2>
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
                            />
                            <span class="custom-radio-button"></span>
                            <label for="not-attending">No, I cannot attend</label>
                        </div>
                    </div>
                </div>
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
                <h6>* So we can ask for your meal and dietary requirements later</h6>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input 
                        id="phone"
                        v-model="form.phone"
                        type="tel"
                        placeholder="Enter your phone number"
                    />
                </div>
                <button type="submit" :disabled="isSubmitting">
                    {{ isSubmitting ? 'Submitting...' : 'Submit RSVP' }}
                </button>
                <p v-if="submitError" class="error-message">{{ submitError }}</p>
            </form>
        </div>
        <div v-else class="success-message">
            <h2>Thank you for your RSVP!</h2>
            <h4>We have received your submission and will be in touch soon!</h4>
        </div>
    </div>
</template>

<style scoped lang="sass">
.rsvp
    display: flex
    flex-direction: column
    align-items: center
    gap: 10vw
    margin: 0 auto
    padding: 2rem
    font-size: 1rem
    margin-top: 9vw
    font-family: Rubik
    // background-color: rgba(120, 120, 200, 0.6)
    h1
        text-align: center

.rsvp-container
    max-width: 1200px
    width: 100%

.rsvp-subtitle
    text-align: center
    line-height: 0.6
    margin-bottom: 4vw

.rsvp-form
    display: flex
    flex-direction: column
    gap: 1.5rem
    color: black
    background-color: white
    outline: 0.5vw solid #FF7032
    padding: 2rem
    padding: 6vw
    border-radius: 5vw

.form-group
    display: flex
    flex-direction: column
    gap: 0.5rem

label
    font-weight: bold

input
    padding: 0.5rem
    border: 1px solid #ccc
    border-radius: 4px
    font-size: 1rem

button
    padding: 0.75rem
    background-color: #FF7032
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

.success-message
    text-align: center
    color: black

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
        background-color: #4CAF50
        border-color: #4CAF50

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