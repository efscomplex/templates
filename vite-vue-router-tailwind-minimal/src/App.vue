<script setup>
   import { ref } from 'vue'

   let greet = ref('hello world!')
</script>

<template>
   <div>
      <header class="bg-white shadow" v-if="$route.meta.title">
         <h1
            @click="counter = 0"
            class="text-3xl font-bold leading-tight text-gray-900"
         >
            {{ $route.meta.title }} / {{ counter }}
         </h1>
      </header>
      <main>
         <router-view />
      </main>
   </div>
</template>
