<script setup lang="ts">
   import { ref } from 'vue'
   const greet = ref('hello world')
</script>

<template>
   <BaseTemplate>
      <h2>{{ greet }}</h2>
   </BaseTemplate>
</template>
