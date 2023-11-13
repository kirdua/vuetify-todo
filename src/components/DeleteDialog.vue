<script setup>
import { ref } from 'vue'
import { useTaskListStore } from '@/store/todo'

const props = defineProps(['task'])
const store = useTaskListStore()
const dialog = ref(true)

const deleteATask = (id) => {
  store.deleteTask(id)
  dialog.value = false
}
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="dialog" activator="parent" width="auto">
      <v-card>
        <v-card-title>Delete task?</v-card-title>
        <v-card-text>Are you sure you want to delete this task?</v-card-text>
        <v-card-actions class="justify-center">
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="$emit('close')">No</v-btn>
          <v-btn
            color="red-darken-1"
            variant="text"
            @click="deleteATask(task.id)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
