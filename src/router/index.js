import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show'
import Edit from '../views/Edit'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/show',
      name: 'Show',
      component: Show
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
