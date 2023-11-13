<script setup>
import { computed, watch } from 'vue'
import { format, parse } from 'date-fns'
import TaskMenu from '@/components/TaskMenu.vue'
import { useTaskListStore } from '@/store/todo'

const props = defineProps(['task'])
const { task } = props

const store = useTaskListStore()

const formatDate = computed(() => {
  if (!task.dueDate) return

  const date = parse(task.dueDate, 'MM-dd-yyyy', new Date())
  return format(date, 'MMM d')
})

const doneTask = (id) => {
  store.doneTask(id)
}
</script>

<template>
  <div>
    <v-list-item
      @click.prevent="doneTask(task.id)"
      :class="{ 'bg-light-blue-accent-1': task.done }"
      class="content"
    >
      <template v-slot:prepend="{ isActive }">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title
        :class="{ 'text-decoration-line-through': task.done }"
        class="text-left fixed-width mt-2"
      >
        {{ task.title }}
      </v-list-item-title>

      <v-list-item-content
        v-if="task.dueDate"
        class="text-end fixed-width pr-5"
      >
        <v-list-item-title>
          <v-icon small>mdi-calendar</v-icon>
          {{ formatDate }}
        </v-list-item-title>
      </v-list-item-content>

      <template v-slot:append>
        <task-menu :task="task" />
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<style scoped>
.fixed-width {
  width: 50%;
  display: inline-block;
  align-items: center;
}
</style>
