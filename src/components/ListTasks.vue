<script setup>
import { storeToRefs } from 'pinia'
import { useTaskListStore } from '@/store/todo'

import Task from '@/components/Task.vue'

const store = useTaskListStore()
const { filteredTasks } = storeToRefs(store)
</script>

<template>
  <v-list flat>
    <task v-for="task in filteredTasks" :task="task" :key="task.id" />
  </v-list>
</template>

<style></style>
