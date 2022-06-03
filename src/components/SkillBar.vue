<script lang="ts" setup>
import { ref, defineProps, computed, onMounted, watch, onBeforeMount } from 'vue'



interface Props {
  proficiency: number
}

const props = withDefaults(defineProps<Props>(), {
  proficiency: 0
})

watch(() => props.proficiency, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})


</script>

<template>
  <div class="w-full h-2 rounded bg-side-secodary ">
    <div :class="'h-2 rounded bg-side-primary '" :style="{ width: props.proficiency + '%' }"></div>
  </div>
</template>