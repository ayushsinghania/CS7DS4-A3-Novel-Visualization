import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/views/Page1'
import Page3 from '@/views/Page3'
import Page2 from '@/views/Page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/Page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: "*",
      component: Page1
    }
  ]
})
