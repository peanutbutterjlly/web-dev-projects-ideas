<script setup>
import { useCalculatorStore } from '@/stores/calculatorStore.js';
import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted } from 'vue';
import BottomBar from './components/BottomBar.vue';
import Display from './components/Display.vue';

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
      <div class="status">
        <time>4:20</time>
      </div>
      <Display />
      <div class="buttons">
        <button class="clear" @click="resetCalculator">AC</button>
        <button class="divide sign" @click="addToOperationsQueue('/')">
          ÷
        </button>
        <button class="seven num" @click="userInput += '7'">7</button>
        <button class="eight num" @click="userInput += '8'">8</button>
        <button class="nine num" @click="userInput += '9'">9</button>
        <button class="multiply sign" @click="addToOperationsQueue('*')">
          ×
        </button>
        <button class="four num" @click="userInput += '4'">4</button>
        <button class="five num" @click="userInput += '5'">5</button>
        <button class="six num" @click="userInput += '6'">6</button>
        <button class="subtract sign" @click="addToOperationsQueue('-')">
          -
        </button>
        <button class="one num" @click="userInput += '1'">1</button>
        <button class="two num" @click="userInput += '2'">2</button>
        <button class="three num" @click="userInput += '3'">3</button>
        <button class="add sign" @click="addToOperationsQueue('+')">+</button>
        <button class="zero num" @click="userInput += '0'">0</button>
        <button class="dot num" @click="userInput += '.'">.</button>
        <button class="equals sign" @click="computeResult">=</button>
      </div>
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

.status {
  color: white;
  font-size: 0.8rem;
  overflow: hidden;
  padding: 1rem 1.5rem 0.1rem;

  display: flex;

  grid-area: status;
}

.status time {
  margin-right: auto;
}

button {
  background: gray;
  border: none;
  border-radius: 99rem;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;

  display: grid;
  place-content: center;
}

.buttons {
  grid-area: buttons;
  padding-inline: var(--inline-padding);

  display: grid;
  gap: 14px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    'clear clear clear divide'
    'seven eight nine  multiply'
    'four  five  six   subtract'
    'one   two   three add'
    'zero  zero  dot   equals';
}

.clear {
  grid-area: clear;
  color: black;
}

.divide {
  grid-area: divide;
}

.num {
  background-color: var(--button-gray);
}

.zero {
  grid-area: zero;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-inline-start: calc(var(--inline-padding) + 6px);
}

.sign {
  background-color: var(--orange);
}
</style>
