import Vue from 'vue'
import VueRouter from 'vue-router'


import filmsRouter from '@/router/routers/films'
import cinemasRouter from '@/router/routers/cinemas'
import centerRouter from '@/router/routers/center'


Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path:'/',
    redirect:'/films/nowPlaying'
  },
  ...filmsRouter,
  cinemasRouter,
  centerRouter
]

const router = new VueRouter({
  routes
})

export default router
