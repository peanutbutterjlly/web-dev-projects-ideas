<script lang="ts" setup>
import { useCalculatorStore } from '@/stores/calculatorStore.js';
import { storeToRefs } from 'pinia';

const store = useCalculatorStore();
const { userInput } = storeToRefs(store);
const { addToOperationsQueue, computeResult, resetCalculator } = store;
</script>

<template>
  <div class="buttons">
    <button class="clear" @click="resetCalculator">AC</button>
    <button class="divide sign" @click="addToOperationsQueue('/')">÷</button>
    <button class="seven num" @click="userInput += '7'">7</button>
    <button class="eight num" @click="userInput += '8'">8</button>
    <button class="nine num" @click="userInput += '9'">9</button>
    <button class="multiply sign" @click="addToOperationsQueue('*')">×</button>
    <button class="four num" @click="userInput += '4'">4</button>
    <button class="five num" @click="userInput += '5'">5</button>
    <button class="six num" @click="userInput += '6'">6</button>
    <button class="subtract sign" @click="addToOperationsQueue('-')">-</button>
    <button class="one num" @click="userInput += '1'">1</button>
    <button class="two num" @click="userInput += '2'">2</button>
    <button class="three num" @click="userInput += '3'">3</button>
    <button class="add sign" @click="addToOperationsQueue('+')">+</button>
    <button class="zero num" @click="userInput += '0'">0</button>
    <button class="dot num" @click="userInput += '.'">.</button>
    <button class="equals sign" @click="computeResult">=</button>
  </div>
</template>

<style>
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
