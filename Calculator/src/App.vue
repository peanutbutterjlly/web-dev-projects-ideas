<script setup>
import { ref } from 'vue';

const userInput = ref('0');
const evaluateThis = ref([]);

function calculate(op) {
  if (evaluate.value) {
    evaluateThis.value.push(op);
    evaluateThis.value.push(userInput.value);
  } else {
    evaluateThis.value.push(userInput.value);
  }
  userInput.value = 0;
}

function evaluate() {
  console.log('calculate this!');
  console.log(evaluateThis.value);
}
</script>

<template>
  <div class="wrapper">
    <h1 class="sr-only">Calculator</h1>
    <form @submit.prevent="evaluate">
      <input v-model="userInput" type="number" />
      <div class="operators">
        <button @click="calculate('+')">+</button>
        <button @click="calculate('-')">-</button>
        <button @click="calculate('*')">*</button>
        <button @click="calculate('/')">/</button>
      </div>
      <div class="nums-and-stuff">
        <div class="nums">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div class="stuff">
          <button type="submit">C</button>
          <button type="submit">=</button>
        </div>
      </div>
    </form>
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

form {
  width: 12rem;
  border: 1px solid;
  height: 15rem;
  display: grid;
  grid-template-rows: auto auto 1fr;
}
input {
  max-width: 100%;
  padding: 0.2rem;
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
</style>
