import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import SearchResults from '../views/SearchResults.vue'
import About from '../views/About.vue'
import Settings from '../views/Settings.vue'

// 修改路由配置
const routes = [
  { 
    path: '/',
    component: App,
    children: [
      // 将设置页面配置为子路由
      {
        path: '/settings',
        component: () => import('../views/Settings.vue')
      }
    ]
  },
  { 
    path: '/search',
    component: SearchResults 
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router