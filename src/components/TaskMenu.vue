<script setup>
import { ref, watch } from 'vue'
import DeleteDialog from '@/components/DeleteDialog.vue'
import DueDateDialog from '@/components/DueDateDialog.vue'
import EditDialog from '@/components/EditDialog.vue'

const props = defineProps(['task'])

const showEditDialog = ref(false)
const showDueDateDialog = ref(false)
const showDeleteDialog = ref(false)

watch(showDueDateDialog, (newVal) => {
  if (newVal === true) {
    setTimeout(() => {
      showDueDateDialog.value = false
    }, 10000)
  }
})

const checkClose = () => {
  showDueDateDialog.value = false
}

const items = ref([
  {
    title: 'Edit',
    icon: 'mdi-pencil',
    click() {
      showEditDialog.value = true
    },
  },
  {
    title: 'Due date',
    icon: 'mdi-calendar',
    click() {
      showDueDateDialog.value = true
    },
  },
  {
    title: 'Delete',
    icon: 'mdi-delete-outline',
    click() {
      showDeleteDialog.value = true
    },
  },
])

const handleClick = (index) => {
  items.value[index].click()
}
</script>

<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-list density="compact">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="item"
          @click="handleClick(index)"
          color="indigo"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <edit-dialog
      v-if="showEditDialog"
      :task="task"
      @close="showEditDialog = false"
    />

    <due-date-dialog
      v-if="showDueDateDialog"
      :task="task"
      @close="checkClose"
    />

    <delete-dialog
      v-if="showDeleteDialog"
      :task="task"
      @close="showDeleteDialog = false"
    />
  </div>
</template>
