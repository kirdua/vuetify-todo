<script setup>
import { computed } from 'vue'

const appTitle = computed(() => {
  return process.env.VUE_APP_TITLE
})
</script>

<template>
  <div class="about pa-6">
    <h1>About {{ title }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque
      egestas diam in arcu cursus euismod. Libero nunc consequat interdum varius
      sit amet. Integer enim neque volutpat ac tincidunt vitae. At varius vel
      pharetra vel turpis nunc eget. Viverra adipiscing at in tellus integer
      feugiat scelerisque. Nulla pellentesque dignissim enim sit amet venenatis.
      Dolor purus non enim praesent elementum facilisis leo vel. Ipsum a arcu
      cursus vitae congue mauris. Etiam dignissim diam quis enim lobortis
      scelerisque. Tristique senectus et netus et malesuada. Scelerisque in
      dictum non consectetur a erat nam at.
    </p>
    <v-divider></v-divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque
      egestas diam in arcu cursus euismod. Libero nunc consequat interdum varius
      sit amet. Integer enim neque volutpat ac tincidunt vitae. At varius vel
      pharetra vel turpis nunc eget. Viverra adipiscing at in tellus integer
      feugiat scelerisque. Nulla pellentesque dignissim enim sit amet venenatis.
      Dolor purus non enim praesent elementum facilisis leo vel. Ipsum a arcu
      cursus vitae congue mauris. Etiam dignissim diam quis enim lobortis
      scelerisque. Tristique senectus et netus et malesuada. Scelerisque in
      dictum non consectetur a erat nam at.
    </p>
  </div>
</template>
