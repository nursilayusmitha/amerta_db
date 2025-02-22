import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Admin from './views/Admin.vue'
import Login from './views/Login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/admin', component: Admin },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
