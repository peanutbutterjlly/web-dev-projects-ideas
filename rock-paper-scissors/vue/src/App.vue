<script setup lang="ts"></script>

<template>
  <main>
    <header>
      <h1>Rock Paper Scissors</h1>
      <div>
        <p>Score</p>
        <p class="score"></p>
      </div>
    </header>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    padding: 0.5rem;
  }

  & div {
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    padding: 0.5rem;
  }
}
</style>
