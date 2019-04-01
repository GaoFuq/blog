import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import Location from '@/page/location/Location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
  ]
})
