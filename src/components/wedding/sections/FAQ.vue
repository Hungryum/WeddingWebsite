<script setup lang="ts">
import QuestionAnsAnswer from '@/components/QuestionAndAnswer.vue'
import { ref } from 'vue';

const questionAndAnswers = [
    // { question: "Q: ", answer: "A: " },
    { question: "Q: What time should I arrive?", answer: "A: More infromation about the schedule will become available closer to the wedding date." },
    { question: "Q: What's the dress code?", answer: "A: We would love it if you could dress in your best Cocktail attire." },
    { question: "Q: What’s the weather usually like at this time of year?", answer: "A: As it will be during early Spring it might still get a little chilly at night so be sure to bring multiple layers just in case." },
    { question: "Q: Will the ceremony and reception be in the same place?", answer: "A: Yes, the ceremony and reception will both be held at Millbrook Winery" },
    { question: "Q: How long will the ceremony/reception run for?", answer: "A: More infromation about the schedule will become available closer to the wedding date." },
    { question: "Q: Are there taxis or rideshare options nearby?", answer: "A: As our venue is quite remote (located in Jarrahdale) there are limited options for rideshare and taxis. You may need to plan ahead on how to get back home safely." },
    { question: "Q: Is there parking available at the venue?", answer: "A: Yes Millbrook Winery has plenty of parking with a car park at the enterence and behind the building." },
    { question: "Q: Can I still attend if I am not feeling well or coming down with something on the day of the wedding?", answer: "A: Please stay home and rest! Contact one of the bridal party as soon as possible so they may let the relevant teams know." },
    { question: "Q: I don't know if my attire is appropriate?", answer: "A: Please ask one of the bridesmaids if you are unsure." },
    { question: "Q: Are kids welcome at the wedding?", answer: "A: As much as we love you and your small humans, our venue is not suitable for young children. We respectfully request no children under 16 in attendence. Thank you for understanding." },
    { question: "Q: What do I do for my dietary requirements?", answer: "A: Closer to the wedding date we will send out an email for you to provide us with your meal chocie and any dietary requirements." },
    { question: "Q: Can I bring a plus one?", answer: "A: As much as we would love to extend the invite to the whole world, due to our venue (and our budget) we must limit our guests to those named on your invitation" },
]

const activeIndex = ref<number>(-1);

const toggleItem = (index: number) => {
  activeIndex.value = activeIndex.value === index ? -1 : index;
};
</script>

<template>
    <div class="faq">
        <div class="faq-header">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div class="faq-content">
            <QuestionAnsAnswer 
            v-for="(item, index) in questionAndAnswers"
            :key="index"
            :question="item.question"
            :is-open="activeIndex === index"
            @toggle="toggleItem(index)"
            >
                <template #answer>
                    <p class="faq-content-answer">{{ item.answer }}</p>
                </template>
            </QuestionAnsAnswer>
        </div>
    </div>
</template>

<style scoped lang="sass">
@use '../../../assets/style/style' as v

.faq
    display: flex
    flex-direction: column
    align-items: center
    padding: 10vw 10vw
    background-color: rgb(255, 255, 255, 0.6)
    width: 100%

.faq-header
    float: none
    text-align: center
    margin: 0 auto 5vw
    position: relative
    font-family: Magical Rhymes
    line-height: 0.7
    margin-bottom: 10vw

.faq-content
    display: flex
    flex-direction: column
    font-family: Palmer Lake
    gap: 8vw
    max-width: 1080px
    text-align: left
    font-size: 7vw
    letter-spacing: -0.05rem
    line-height: 4vw

.faq-content-answer
    color: v.$secondary-color
</style>