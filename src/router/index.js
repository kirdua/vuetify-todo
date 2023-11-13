import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/Todo.vue')
const About = () => import('@/views/About.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
  next()
})

export default router
