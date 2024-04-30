<script setup>
import { evaluate } from 'mathjs';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const userInput = ref('');
const operationsQueue = ref([]);

/**
 * Adds the given operation to the operations queue and clears the user input.
 *
 * @param {string} op - The operation to be added to the queue.
 * @return {void} This function does not return anything.
 */
function addToOperationsQueue(op) {
  operationsQueue.value.push(userInput.value, op);
  userInput.value = '';
}

/**
 * Computes the result of the operations queue and updates the user input.
 *
 * @return {void} This function does not return anything.
 */
function computeResult() {
  operationsQueue.value.push(userInput.value);
  userInput.value = evaluate(operationsQueue.value.join(' '));
  operationsQueue.value = [];
}

/**
 * Resets the calculator by clearing the user input and emptying the operations queue.
 *
 * @return {void} This function does not return anything.
 */
function resetCalculator() {
  userInput.value = '';
  operationsQueue.value = [];
}

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

const reversedRows = computed(() => {
  const numbers = [];
  for (let i = 9; i > 0; i--) {
    numbers.push(i);
  }
  return numbers;
});

onMounted(() => window.addEventListener('keydown', handleKeyPress));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyPress));
</script>

<template>
  <div class="wrapper">
    <h1 class="sr-only">Calculator</h1>
    <section>
      <label class="sr-only" for="calculator">Calculator input/output</label>
      <input
        id="calculator"
        v-model="userInput"
        type="number"
        placeholder="0"
      />
      <div class="operators">
        <button @click="addToOperationsQueue('+')">+</button>
        <button @click="addToOperationsQueue('-')">-</button>
        <button @click="addToOperationsQueue('*')">*</button>
        <button @click="addToOperationsQueue('/')">/</button>
      </div>
      <div class="nums-and-stuff">
        <div class="nums">
          <button
            v-for="num in reversedRows"
            :key="num"
            @click="userInput += num"
          >
            {{ num }}
          </button>
        </div>
        <div class="stuff">
          <button @click="resetCalculator">C</button>
          <button @click="computeResult">=</button>
        </div>
      </div>
      <button @click="userInput += '0'">0</button>
    </section>
  </div>
</template>

<style scoped>
.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.wrapper {
  display: grid;
  place-content: center;
}

section {
  background: white;
  border: 1px solid;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  padding: 1rem;
  height: 15rem;
  display: grid;
  place-content: center;
  grid-template-rows: auto auto 1fr;
  width: 12rem;
}
input {
  max-width: 100%;
  padding: 0.2rem;
  text-align: end;
}

.operators {
  display: flex;
}

.operators button {
  flex: 1;
}

.nums-and-stuff {
  display: grid;
  grid-template-columns: 1fr auto;
}

.nums {
  display: flex;
  flex-flow: row-reverse wrap;
}

.nums button {
  flex: 1 0 33.333%;
}

.stuff {
  display: grid;
}

.stuff button {
  padding-inline: 0.5rem;
}

/* Hide arrows from input number type */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
