import { createRouter, createWebHistory } from 'vue-router'
import Method2App from '../components/Method2App.vue'
import PostView from '../components/PostView.vue'

const routes = [
  { path: '/', component: Method2App },
  { path: '/post/:id', component: PostView }, // Route for individual post view
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
