<script setup lang="ts">
import Side from './Side.vue'
import Main from './Main.vue'

</script>

<template>
  <div class="prose font-mono h-full m-auto flex flex-col">
    <main class="flex h-full relative">
      <div class="w-2/5 bg-side-bg text-side-primary">
        <Side></Side>
      </div>
      <div class="w-3/5 bg-main-bg text-main-primary">
        <Main></Main>
      </div>
    </main>
  </div>
</template>