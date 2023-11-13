<script setup>
import { watch, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTaskListStore } from '@/store/todo'

const store = useTaskListStore()
const { query } = storeToRefs(store)

watch(query, () => {
  store.filteredTasks
})
</script>

<template>
  <v-text-field
    v-model="store.query"
    class="mt-5 mr-3"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    variant="filled"
    dense
    clearable
  ></v-text-field>
</template>
