<script lang="ts" setup>
import BarIcon from './BarIcon.vue';
import BatteryIcon from './BatteryIcon.vue';
import WifiIcon from './WifiIcon.vue';
</script>

<template>
  <div class="status">
    <time>4:20</time>
    <div class="camera"></div>
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
  align-items: center;

  grid-area: status;
}

.status time {
  margin-right: auto;
}

.status span {
  display: flex;
  gap: 0.2rem;
}

.camera {
  border-radius: 50%;
  border: 0.5px solid hsl(238deg 48.39% 24.31%);
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.5rem;
}
</style>
