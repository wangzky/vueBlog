import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import blogs from '@/components/blogs'
import tools from '@/components/tools'


Vue.use(Router)

/* 路由 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: blogs
    },
    {
      path: '/tools',
      name: 'tools',
      component: tools
    }
  ]
})
