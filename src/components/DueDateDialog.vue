<script setup>
import { ref, onMounted } from 'vue'
import { format, parse } from 'date-fns'
import { useTaskListStore } from '@/store/todo'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps(['task'])
const emit = defineEmits(['close'])
const store = useTaskListStore()

const { task } = props
const dateSelected = ref('')
const dialog = ref(true)

onMounted(() => {
  dateSelected.value = task.dueDate
})

const selectDate = (modelData) => {
  const date = parse(modelData.toLocaleDateString(), 'MM/dd/yyyy', new Date())
  const dueDate = format(date, 'MM-dd-yyyy')

  const payload = {
    id: task.id,
    dueDate,
  }

  store.updateTaskDate(payload)
  dialog.value = false
  emit('close')
}
</script>

<template>
  <v-dialog v-model="dialog" activator="parent" width="auto">
    <VueDatePicker
      :model-value="dateSelected"
      @update:model-value="selectDate"
      :enable-time-picker="false"
      auto-apply
      placeholder="Select a date"
    >
    </VueDatePicker>
  </v-dialog>
</template>

<style>
.custom-select {
  cursor: pointer;
  color: var(--vp-c-text-2);
  margin: 0;
  display: inline-block;
}
</style>
