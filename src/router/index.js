import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import books from '@/components/books'
import my from '@/components/my'
import movie from '@/components/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/books',
      component: books
    },
    {
      path: '/my',
      component: my
    },
    {
      path: '/movie',
      component: movie
    }
  ]
})
