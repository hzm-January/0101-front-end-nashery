import Vue from 'vue'
import Router from 'vue-router'
import nashery from '@/components/page/nashery'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'nashery',
      component: nashery
    }
  ]
})
