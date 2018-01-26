import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/second',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
