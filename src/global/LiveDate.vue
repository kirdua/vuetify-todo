<script setup>
import { ref, onMounted } from 'vue'
import { format } from 'date-fns'

const date = ref('')

onMounted(() => {
  getDateAndTime()
})

const getDateAndTime = () => {
  date.value = format(new Date(), 'MMMM d, yyyy h:mm aaaa')

  setInterval(() => {
    date.value = format(new Date(), 'MMMM d, yyyy h:mm aaaa')
  }, 60000)
}
</script>

<template>
  <v-system-bar>
    <span class="ms-2">{{ date }}</span>
  </v-system-bar>
</template>
