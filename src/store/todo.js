import { defineStore } from 'pinia'
import Localbase from 'localbase'

let db = new Localbase('db')

export const useTaskListStore = defineStore('taskList', {
  state: () => ({
    query: null,
    tasks: [],
    snackbar: {
      show: false,
      text: '',
    },
  }),
  actions: {
    addTask(title) {
      let newTask = {
        id: Date.now(),
        title,
        done: false,
        dueDate: null,
      }

      db.collection('tasks')
        .add(newTask)
        .then(() => {
          this.tasks.push(newTask)
          this.showSnackbar('Task added!')
        })
    },
    deleteTask(id) {
      db.collection('tasks')
        .doc({ id: id })
        .delete()
        .then(() => {
          db.collection('tasks')
            .get()
            .then((tasks) => (this.tasks = tasks))
          this.showSnackbar('Task Deleted')
        })
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0]
      db.collection('tasks')
        .doc({ id: id })
        .update({ done: !task.done })
        .then(() => {
          task.done = !task.done
        })
    },
    updateTaskTitle(payload) {
      let task = this.tasks.filter((task) => task.id === payload.id)[0]
      db.collection('tasks')
        .doc({ id: payload.id })
        .update({ title: payload.title })
        .then(() => {
          task.title = payload.title
          this.showSnackbar('Task updated!')
        })
    },
    updateTaskDate(payload) {
      let task = this.tasks.filter((task) => task.id === payload.id)[0]
      db.collection('tasks')
        .doc({ id: payload.id })
        .update({ dueDate: payload.dueDate })
        .then(() => {
          task.dueDate = payload.dueDate
          db.collection('tasks')
            .get()
            .then((tasks) => (this.tasks = tasks))
          this.showSnackbar('Task updated!')
        })
    },
    showSnackbar(msg) {
      let timeout = 0

      if (this.snackbar.show) {
        this.showSnackbar.show = false
        timeout = 300
      }

      setTimeout(() => {
        this.snackbar.show = true
        this.snackbar.text = msg
      }, timeout)
    },
    getTasks() {
      db.collection('tasks')
        .get()
        .then((tasks) => (this.tasks = tasks))
    },
  },
  getters: {
    filteredTasks: (state) => {
      if (!state.query) return state.tasks
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.query.toLowerCase())
      )
    },
  },
})
