<script setup lang="ts">
import QuestionAnsAnswer from '@/components/QuestionAndAnswer.vue'
import { ref } from 'vue';

const questionAndAnswers = [
  { question: "Q: I am not feeling well or coming down with something on the day of the wedding. Should I still attend?", answer: "A: Please stay home and rest! Contact one of the bridal party as soon as possible so they may let the relevant teams know." },
  { question: "Q: I don't know if my attire is appropriate?", answer: "A: Please ask one of the bridesmaids if you are unsure." },
  { question: "Q: Can I bring my kids?", answer: "A: As much as we love you and your small humans, our venue is not suitable for young children. We respectfully request no children under 16 in attendence. Thank you for understanding." },
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
        <ul class="faq-content">
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
        </ul>
    </div>
</template>

<style scoped lang="sass">
@use '../../../assets/style/style' as v

.faq
    display: flex
    flex-direction: column
    padding: 90px
    background-color: rgb(255, 255, 255, 0.6)
    justify-content: center
    align-items: center

.faq-header
    float: none
    text-align: center
    margin: 0 auto 5vw
    position: relative
    font-family: Magical Rhymes
    line-height: 0.7

.faq-content
    display: flex
    flex-direction: column
    font-family: Palmer Lake
    gap: 8vw
    margin: 30px
    max-width: 1080px
    text-align: center
    font-size: 5vw
    letter-spacing: -0.1rem
    line-height: 4vw

.faq-content-answer
    color: v.$secondary-color
</style>