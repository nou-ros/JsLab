import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Career from '../views/career/Careers.vue'
import CareerDetails from '../views/career/CareerDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // component: About
    component: () => import('../views/About.vue')
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Career
  },
  {
    // route paramater is id here. 
    path: '/careers/:id',
    name: 'CareerDetails',
    component: CareerDetails,
    props: true
  },

  //redirect - previous url name was jobs which is changed to new url path careers now.
  {
    path: '/jobs',
    redirect: '/careers'
  },

  //404 route catchAll(.*) vue function to handle route which does not exist
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
