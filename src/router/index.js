import { createRouter, createWebHistory } from 'vue-router'
import DivinationView from '../views/DivinationView.vue'
import YarrowView from '../views/YarrowView.vue'
import HexagramsView from '../views/HexagramsView.vue'
import HistoryView from '../views/HistoryView.vue'
import ShareView from '../views/ShareView.vue'

const routes = [
  {
    path: '/',
    name: 'divination',
    component: DivinationView
  },
  {
    path: '/yarrow',
    name: 'yarrow',
    component: YarrowView
  },
  {
    path: '/hexagrams',
    name: 'hexagrams',
    component: HexagramsView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/share/:id',
    name: 'share',
    component: ShareView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
