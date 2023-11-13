<script setup>
import { storeToRefs } from 'pinia'
import { useTaskListStore } from '@/store/todo'

const store = useTaskListStore()
const { snackbar } = storeToRefs(store)
</script>
<template>
  <v-snackbar v-model="snackbar.show">
    {{ snackbar.text }}

    <template v-slot:actions>
      <v-btn variant="text" @click="snackbar.show = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
