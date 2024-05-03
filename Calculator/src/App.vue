<script setup>
import { useCalculatorStore } from '@/stores/calculatorStore.js';
import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted } from 'vue';
import BottomBar from './components/BottomBar.vue';
import ButtonsGrid from './components/ButtonsGrid.vue';
import Display from './components/Display.vue';
import StatusBar from './components/StatusBar.vue';

const calculator = useCalculatorStore();
const { userInput } = storeToRefs(calculator);
const { addToOperationsQueue, computeResult, resetCalculator } = calculator;

/**
 * Handles key press events for the calculator.
 *
 * @param {KeyboardEvent} event - The key press event.
 * @return {void} This function does not return anything.
 */
function handleKeyPress(event) {
  const { key, target } = event;

  if (target.matches('input[type="number"]')) {
    if (key >= '0' && key <= '9') {
      return;
    }
  }
  if (key >= '0' && key <= '9') {
    userInput.value += key;
  } else if (['+', '-', '*', '/'].includes(key)) {
    addToOperationsQueue(key);
  } else if (key === 'Enter') {
    computeResult();
    event.preventDefault();
  } else if (key === 'Escape') {
    resetCalculator();
    event.preventDefault();
  }
}

onMounted(() => window.addEventListener('keydown', handleKeyPress));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyPress));
</script>

<template>
  <main>
    <section>
      <StatusBar />
      <Display />
      <ButtonsGrid />
      <BottomBar />
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-content: center;
  height: 100vh;
  height: 100dvh;
}

section {
  --inline-padding: 1rem;
  --button-gray: rgb(51 51 51);
  --orange: rgb(247 162 34);

  background: black;
  border: 2px solid gray;
  border-radius: 40px;
  box-shadow: var(--shadow-lg);
  font-size: 2rem;
  max-height: 667px;
  max-width: 375px;

  display: grid;
  grid-template-rows: auto 2fr 10fr auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'status status status status'
    'display display display display'
    'buttons buttons buttons buttons'
    'bottom bottom bottom bottom';
}
</style>
