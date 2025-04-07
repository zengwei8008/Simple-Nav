import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import SearchResults from '../views/SearchResults.vue'

const routes = [
  { 
    path: '/',
    component: App,
    children: [
      // 其他子路由可以放在这里
    ]
  },
  { 
    path: '/search',
    component: SearchResults 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router