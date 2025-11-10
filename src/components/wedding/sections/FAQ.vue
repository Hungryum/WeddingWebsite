<script setup lang="ts">
import QuestionAnsAnswer from '@/components/QuestionAndAnswer.vue'
import { ref } from 'vue';

const questionAndAnswers = [
    { question: "What time should I arrive?", answer: "More infromation about the schedule will become available closer to the wedding date." },
    { question: " What's the dress code?", answer: " We would love it if you could dress in your best Cocktail attire." },
    { question: " What’s the weather usually like at this time of year?", answer: " As it will be during early Spring it might still get a little chilly at night so be sure to bring multiple layers just in case." },
    { question: " Will the ceremony and reception be in the same place?", answer: " Yes, the ceremony will be held on the lawn and the reception inside the winery" },
    { question: " How long will the ceremony/reception run for?", answer: " More infromation about the schedule will become available closer to the wedding date." },
    { question: " Are there taxis or rideshare options nearby?", answer: " As our venue is quite remote (located in Jarrahdale) there are limited options for rideshare and taxis. You may need to plan ahead on how to get back home safely." },
    { question: " Is there parking available at the venue?", answer: " Yes Millbrook Winery has plenty of parking with a car park at the entrance and behind the building." },
    { question: " Can I still attend if I am not feeling well or coming down with something on the day of the wedding?", answer: " Please stay home and rest! Contact one of the bridal party as soon as possible so they may let the relevant teams know." },
    { question: " I don't know if my attire is appropriate?", answer: " Please ask one of the bridesmaids if you are unsure." },
    { question: " Are kids welcome at the wedding?", answer: " As much as we love you and your small humans, our venue is not suitable for young children. We respectfully request no children under 16 in attendence. Thank you for understanding." },
    { question: " What do I do for my dietary requirements?", answer: " Closer to the wedding date we will send out an email for you to provide us with your meal chocie and any dietary requirements." },
    { question: " Can I bring a plus one?", answer: " As much as we would love to extend the invite to the whole world, due to our venue (and our budget) we must limit our guests to those named on your invitation" },
]

const activeIndex = ref<number>(-1);

const toggleItem = (index: number) => {
  activeIndex.value = activeIndex.value === index ? -1 : index;
};
</script>

<template>
    <div id="faq" class="faq">
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
    gap: 8vw
    max-width: 1200px
    text-align: left
    background-color: white
    outline: 0.5vw solid #FF7032
    padding: 6vw
    border-radius: 5vw

.faq-content-answer
    color: v.$secondary-color
    font-family: Rubik
    font-size: 3vw
</style>