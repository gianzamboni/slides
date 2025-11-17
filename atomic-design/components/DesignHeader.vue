<template>
  <div class="design-header">
    <h3>{{ chapter }}</h3>
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
  </div>
  <div class="padding-content"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  chapter: string
  title: string
  subtitle: string
}>()
</script>


