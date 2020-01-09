import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    // @ 是 src 目录的别名,这是 VueCLI 项目中特殊提供的
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
