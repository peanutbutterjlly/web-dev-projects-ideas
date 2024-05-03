<script lang="ts" setup>
import BarIcon from './BarIcon.vue';
import BatteryIcon from './BatteryIcon.vue';
import WifiIcon from './WifiIcon.vue';
</script>

<template>
  <div class="status">
    <time>4:20</time>
    <span>
      <BarIcon />
      <WifiIcon />
      <BatteryIcon />
    </span>
  </div>
</template>

<style scoped>
.status {
  color: white;
  font-size: 0.8rem;
  overflow: hidden;
  padding: 1rem 1.5rem 0.1rem;

  display: flex;
  grid-area: status;
}

.status time {
  margin-right: auto;
}

.status span {
  display: flex;
  gap: 0.2rem;
}
</style>
