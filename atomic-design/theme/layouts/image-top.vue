<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';

const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  imageRowClass: {
    type: String,
    default: ''
  }
})

const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="grid grid-rows-10 w-full h-full">
    <div class="grid-row-span-3" :class="props.imageRowClass" :style="style"></div>
    <div class="slidev-layout default image-top grid-row-span-7" :class="props.class">
      <slot />
    </div>
  </div>
  
</template>


