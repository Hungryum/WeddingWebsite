<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
    question: string,
    isOpen: boolean,
}>();

const emits = defineEmits(['toggle']);
</script>

<template>
    <li class="faq-content-container">
        <div class="faq-content-header" @click="$emit('toggle')">
            <p>{{ question }}</p>
            <transition name="accordion-content">
                <i :class="['faq-content-header-chevron', 'fa-solid', 'fa-xs', { 'fa-chevron-up': isOpen, 'fa-chevron-down': !isOpen }]"></i>
            </transition>
        </div>
        <transition name="accordion-content">
            <div v-if="isOpen" class="accordion-content">
                <slot name="answer"></slot>
            </div>
        </transition>
    </li>
</template>

<style scoped lang="sass">
@use '../assets/style/style' as v

.faq-content-container
    display: flex
    flex-direction: column
    gap: 2vw
    color: v.$color

.faq-content-header
    display: flex
    justify-content: center
    gap: 2vw

.faq-content-header-chevron
    margin-top: 2vw

/* Basic styling and transition styles */
.accordion-content-enter-active,
.accordion-content-leave-active
    transition: all 0.3s ease

.accordion-content-enter-from,
.accordion-content-leave-to
    max-height: 0
    opacity: 0
    overflow: hidden

.accordion-content-enter-to,
.accordion-content-leave-from
    max-height: 200px
    opacity: 1
</style>