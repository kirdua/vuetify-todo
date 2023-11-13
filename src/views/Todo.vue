<script setup>
import { isEmpty } from 'lodash'
import { storeToRefs } from 'pinia'
import { useTaskListStore } from '@/store/todo'

import ListTasks from '@/components/ListTasks.vue'
import NoTasks from '@/components/NoTasks.vue'
import AddTask from '@/components/AddTask.vue'

const store = useTaskListStore()
const { tasks } = storeToRefs(store)
</script>

<template>
  <div class="home pt-0">
    <add-task />
    <list-tasks v-if="!isEmpty(tasks) || tasks.length !== 0" />
    <no-tasks v-else />
  </div>
</template>
