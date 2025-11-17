<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';

const props = defineProps({
  image: {
    type: String,
    default: './images/book-cover.svg',
  },
  class: {
    type: String,
  },
  imageColClass: {
    type: String,
    default: 'image-fit h-[40%]'
  }
})

const style = computed(() => handleBackground(props.image))
style.value.backgroundSize = 'contain';
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full ">
    <div class="slidev-layout default image-right" :class="props.class">
      <slot />
    </div>
    <div class="h-full w-full place-content-center">
      <div :class="props.imageColClass" :style="style"></div>
    </div>
  </div>
</template>