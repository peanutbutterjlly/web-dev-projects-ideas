<script setup>
import { storeToRefs } from 'pinia';
import { useCalculatorStore } from '@/stores/calculatorStore.js';

const store = useCalculatorStore();
const { userInput } = storeToRefs(store);
</script>

<template>
  <div class="display">
    <label class="sr-only" for="calculator">Calculator input/output </label>
    <input id="calculator" v-model="userInput" type="number" placeholder="0" />
  </div>
</template>

<style>
.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.display {
  grid-area: display;
}

.display input {
  background: black;
  border: none;
  color: white;
  font-size: 3rem;
  margin-block: 50px 30px;
  padding-inline: calc(var(--inline-padding) * 1.8);
  text-align: end;
  width: 100%;

  grid-area: display;
}
</style>
