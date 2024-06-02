import { evaluate } from 'mathjs';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCalculatorStore = defineStore('calculator', () => {
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

  return {
    userInput,
    operationsQueue,
    addToOperationsQueue,
    computeResult,
    resetCalculator,
  };
})
