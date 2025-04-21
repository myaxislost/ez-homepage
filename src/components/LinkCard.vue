<script setup lang="ts">
import type { Card } from './interfaces/cardInfo';
import UiBlock from './UiBlock.vue';

defineProps<Card>();
</script>

<template>
  <UiBlock class="card">
    <fa-icon :icon="icon" class="" />
    <span class="card-title gap">
      <span>{{ title ?? url }}</span>
      <a class="small-button" :href="url" target="_blank">{{ url.split('//')[1] }}</a>
    </span>
  </UiBlock>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: min-content minmax(0, 1fr);
  align-items: center;
  gap: calc(var(--gap) * 2);
  overflow: hidden;
}
.card > * {
  min-width: 0;
  padding: 2px;
}
.card > svg {
  font-size: 2rem;
}
.card-title {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 2px;
  overflow: hidden;
}
.small-button {
  max-width: 100%;
  color: var(--color-bg);
  background-color: var(--color-accent);
  padding: 0px 5px;
  font-size: 0.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
