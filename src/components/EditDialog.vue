<script setup>
import { ref, onMounted, computed } from 'vue'
import { useTaskListStore } from '@/store/todo'

const props = defineProps(['task'])
const emit = defineEmits(['close'])
const store = useTaskListStore()

const dialog = ref(true)
const taskTitle = ref('')
const { task } = props

onMounted(() => {
  taskTitle.value = task.title
})

const textTitleInvalid = computed(() => {
  return !taskTitle.value || taskTitle.value === task.title
})

const saveATask = (id) => {
  if (!textTitleInvalid) return
  let payload = {
    id,
    title: taskTitle.value,
  }

  store.updateTaskTitle(payload)
  dialog.value = false

  emit('close')
}
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" activator="parent" width="auto">
      <v-card>
        <v-card-title>Edit task</v-card-title>
        <v-card-text>
          Edit the title of this task
          <v-text-field v-model="taskTitle" @keyup.enter="saveATask(task.id)" />
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="$emit('close')">Cancel</v-btn>
          <v-btn
            color="red-darken-1"
            variant="text"
            :disabled="textTitleInvalid"
            @click="saveATask(task.id)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
