import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PhotoDisplay from '../views/PhotoDisplay.vue'
import NotFound from '../views/NotFound.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/photos',
    name: 'photos',
    component: PhotoDisplay
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
