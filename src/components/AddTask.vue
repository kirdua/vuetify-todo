<script setup>
import { ref } from 'vue'
import { useTaskListStore } from '@/store/todo'

const store = useTaskListStore()

const newTaskTitle = ref('')

const addTaskAndClear = () => {
  if (!newTaskTitle.value) return
  store.addTask(newTaskTitle.value)
  newTaskTitle.value = ''
}
</script>

<template>
  <v-text-field
    v-model="newTaskTitle"
    @keyup.enter="addTaskAndClear"
    class="pa-3"
    label="Add task"
    variant="solo"
    hide-details
    clearable
  >
    <template v-slot:append-inner>
      <v-icon icon="mdi mdi-plus" @click="addTaskAndClear" color="indigo" />
    </template>
  </v-text-field>
</template>
