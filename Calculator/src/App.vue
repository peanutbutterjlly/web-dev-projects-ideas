<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const userInput = ref('');
const evaluateThis = ref([]);

function calculate(op) {
  evaluateThis.value.push(userInput.value);
  evaluateThis.value.push(op);
  userInput.value = '';
}

function evaluate() {
  evaluateThis.value.push(userInput.value);
  userInput.value = eval([...evaluateThis.value].join(''));
  evaluateThis.value = [];
}

function clear() {
  userInput.value = '';
  evaluateThis.value = [];
}

function handleKeyPress(event) {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    userInput.value += key;
  }

  switch (key) {
    case '+':
    case '-':
    case '*':
    case '/':
      calculate(key);
      break;
    case 'Enter':
      evaluate();
      break;
    default:
      break;
  }
}

onMounted(() => {
  window.addEventListener('keypress', handleKeyPress);
});

onBeforeUnmount(() => {
  window.removeEventListener('keypress', handleKeyPress);
});
</script>

<template>
  <div class="wrapper">
    <h1 class="sr-only">Calculator</h1>
    <form @submit.prevent="evaluate()">
      <input v-model="userInput" type="number" placeholder="0" />
      <div class="operators">
        <button @click="calculate('+')">+</button>
        <button @click="calculate('-')">-</button>
        <button @click="calculate('*')">*</button>
        <button @click="calculate('/')">/</button>
      </div>
      <div class="nums-and-stuff">
        <div class="nums">
          <button type="button" @click="userInput += '1'">1</button>
          <button type="button" @click="userInput += '2'">2</button>
          <button type="button" @click="userInput += '3'">3</button>
          <button type="button" @click="userInput += '4'">4</button>
          <button type="button" @click="userInput += '5'">5</button>
          <button type="button" @click="userInput += '6'">6</button>
          <button type="button" @click="userInput += '7'">7</button>
          <button type="button" @click="userInput += '8'">8</button>
          <button type="button" @click="userInput += '9'">9</button>
        </div>
        <div class="stuff">
          <button @click.prevent="clear()">C</button>
          <button type="submit">=</button>
        </div>
      </div>
      <button type="button" @click="userInput += '0'">0</button>
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
