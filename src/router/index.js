import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        title: "石榴博客-学习与分享"
      },
      children: [
        {
          path: '/',
          component: home,
          meta: {
            title: "石榴博客-学习与分享"
          }
        },
      ]
    }
  ]
})
