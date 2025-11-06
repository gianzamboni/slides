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
    default: 'my-14 mr-14 image-fit h-[75%] w-full'
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
    <div class="h-full w-full">
      <div :class="props.imageColClass" :style="style"></div>
    </div>
  </div>
</template>