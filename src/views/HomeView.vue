<script setup lang="ts">
import type { Config } from '@/components/interfaces/cardInfo';
import LinkCard from '@/components/LinkCard.vue';
import { onMounted, ref } from 'vue';
import yaml from 'js-yaml';
const state = ref<Config>();

onMounted(async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}config.yaml`);
  if (!res.ok) {
    console.error('Failed to load config.yaml:', res.status);
    return;
  }

  const text = await res.text();
  state.value = yaml.load(text) as Config;
});
</script>

<template>
  <main>
    <group v-for="group in state" :key="group.title">
      <span style="grid-column: 1/-1">
        <fa-icon :icon="group.icon" />
        {{ group.title ?? 'Unnamed' }}
      </span>
      <LinkCard
        v-for="card in group.cards"
        :key="card.url"
        :url="card.url"
        :title="card.title"
        :icon="card.icon"
      />
    </group>
  </main>
</template>

<style>
group {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--gap);
}

@media (max-width: 768px) {
  group {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
