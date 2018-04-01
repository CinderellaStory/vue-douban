import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import books from '@/components/books'
import my from '@/components/my'
import movie from '@/components/movie'
import CinemaMore from '@/components/CinemaMore'
import rose from '@/components/rose'
import prince from '@/components/prince'
import MovieDetail from '@/components/MovieDetail'

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
    },
      {
        path: '/CinemaMore',
        component:CinemaMore,
        children:[
          {  
            path: '/',  
            component: rose  
          },
        {
          path: 'prince',
          component:prince
        },
        {  
          path: 'rose',  
          component: rose  
        }
      ]
      },
      {
        path: '/MovieDetail/:userId',
        name: MovieDetail,
        component: MovieDetail
      } 
  ]
})
