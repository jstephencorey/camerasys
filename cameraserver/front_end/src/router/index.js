import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'
// import PhotoDisplay from '../views/PhotoDisplay.vue'
// import ProfilePage from '../views/ProfilePage.vue'
// import DevicePage from '../views/DevicePage.vue'
// import {authenticationGuard} from '../auth/authentication-gaurd.js';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomePage
  },
  // {
  //   path: '/photos',
  //   name: 'photos',
  //   component: PhotoDisplay,
  //   beforeEnter: authenticationGuard,
  // },
  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: ProfilePage,
  //   beforeEnter: authenticationGuard,
  // },
  // {
  //   path: '/devices',
  //   name: 'devices',
  //   component: DevicePage,
  //   beforeEnter: authenticationGuard,
  // },
  {
    path: '/notFound',
    name: 'notFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
