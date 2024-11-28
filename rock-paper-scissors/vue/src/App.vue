<script setup lang="ts">
import HandIcon from './components/HandIcon.vue';
import RockIcon from './components/RockIcon.vue';
import ScissorIcon from './components/ScissorIcon.vue';
</script>

<template>
  <main>
    <header>
      <h1>Rock Paper Scissors</h1>
      <div>
        <p>Score</p>
        <p class="score"></p>
      </div>
    </header>
    <section>
      <HandIcon />
      <RockIcon />
      <ScissorIcon />
    </section>
  </main>
</template>

<style>
header {
  border: 1px solid gray;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

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

section {
  display: grid;
  place-content: center;

  & * {
    background: none;
    border: transparent;
    justify-self: center;
  }

  & button {
    cursor: pointer;
  }
}
</style>
