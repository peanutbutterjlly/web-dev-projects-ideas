<script setup lang="ts"></script>

<template>
  <main>
    <h1 class="sr-only">Quiz App</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum quisquam
      perspiciatis tenetur voluptatem earum, laudantium animi et repellat porro nam libero eligendi
      quidem fuga repellendus! Nostrum possimus animi dicta!
    </p>
  </main>
</template>

<style>
:root {
  --black: #171d14;
  --blue: #82bee0;

  --block-padding: 3em;
  --inline-padding: 1em;
}

html {
  background-color: var(--black);
}

body {
  display: grid;
  place-content: center;
  color: var(--blue);
}

main {
  border: 2px solid var(--blue);
  border-radius: 10px;
  inline-size: min(var(--measure), 85vw);
  min-block-size: min(500px, 90vh);
  padding: 3em 1em;
}
</style>
