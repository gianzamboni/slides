<script setup lang="ts">
const props = defineProps({
  leftClass: {
    type: String,
  },
  rightClass: {
    type: String,
  },
  rows: {
    type: Number,
    default: 6,
  },
})
</script>

<template>
  <div class="two-cols grid grid-cols-10 w-full h-full">
    <div class="slidev-layout two-cols-left col-span-4" :class="['bg-$background', props.leftClass]">
      <slot name="left" />
    </div>
    <div class="slidev-layout two-cols-right col-span-6" :class="['bg-white text-black', props.rightClass]">
      <slot name="right" />
    </div>
  </div>  
</template>

<style scoped>
.two-cols {
  grid-template-rows: repeat(v-bind(rows), minmax(0, auto));
}

.two-cols-left,
.two-cols-right {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: 1 / -1;
}

.two-cols-right {
  align-items: center;
}
</style>

