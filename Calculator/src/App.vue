<script setup>
import { evaluate } from 'mathjs';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const userInput = ref('');
const operationsQueue = ref([]);

function addToOperationsQueue(op) {
  operationsQueue.value.push(userInput.value, op);
  userInput.value = '';
}

function computeResult() {
  operationsQueue.value.push(userInput.value);
  userInput.value = evaluate(operationsQueue.value.join(' '));
  operationsQueue.value = [];
}

function resetCalculator() {
  userInput.value = '';
  operationsQueue.value = [];
}

function handleKeyPress(event) {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    userInput.value += key;
  } else if (['+', '-', '*', '/'].includes(key)) {
    addToOperationsQueue(key);
  }
}

onMounted(() => window.addEventListener('keypress', handleKeyPress));
onBeforeUnmount(() => window.removeEventListener('keypress', handleKeyPress));
</script>

<template>
  <div class="wrapper">
    <h1 class="sr-only">Calculator</h1>
    <section>
      <input v-model="userInput" type="number" placeholder="0" />
      <div class="operators">
        <button @click="addToOperationsQueue('+')">+</button>
        <button @click="addToOperationsQueue('-')">-</button>
        <button @click="addToOperationsQueue('*')">*</button>
        <button @click="addToOperationsQueue('/')">/</button>
      </div>
      <div class="nums-and-stuff">
        <div class="nums">
          <button v-for="num in 9" :key="num" @click="userInput += num">
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
  width: 12rem;
  border: 1px solid;
  height: 15rem;
  display: grid;
  grid-template-rows: auto auto 1fr;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.stuff {
  display: grid;
}

.stuff button {
  padding-inline: 0.5rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
