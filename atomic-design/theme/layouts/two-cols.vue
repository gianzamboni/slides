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
  <div class="slidev-layout two-cols grid grid-cols-2 w-full h-full">
    <div class="col-span-1" :class="[props.leftClass]">
      <slot name="left" />
    </div>
    <div class="col-span-1" :class="[props.rightClass]">
      <slot name="right" />
    </div>
  </div>  
</template>

<style scoped>
.two-cols {
  grid-template-rows: repeat(v-bind(rows), minmax(0, auto));
}
</style>

