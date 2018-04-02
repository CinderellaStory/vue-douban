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
import fllowed from '@/components/fllowed'
import fllower from '@/components/fllower'
import HomePage from '@/components/HomePage'
import likes from '@/components/likes'
import notes from '@/components/notes'
import photos from '@/components/photos'
import status from '@/components/status'
import movies from '@/components/movies'
import musics from '@/components/musics'
// import books from '@/components/books'


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
        name: 'MovieDetail',
        component: MovieDetail
      },
      {
        path:'my/fllowed',
        component:fllowed,
        name:'fllowed'
       },
       {
        path:'my/fllower',
        component:fllower,
        name:'fllower'
      },
      {
        path:'my/HomePage',
        component:HomePage,
        name:'HomePage'
      },
      {
        path:'/my/photos',
        component:photos,
        name:'photos'
      },
      {
        path:'/my/likes',
        component:likes,
        name:'likes'
      },
      {
        path:'/my/notes',
        component:notes,
        name:'notes'
      },
      {
        path:'/my/books',
        component:books,
        name:'books'
      },
      {
        path:'/my/status',
        component:status,
        name:'status'
      },
      {
        path:'/my/movies',
        component:movies,
        name:'movies'
      },
      {
        path:'/my/musics',
        component:musics,
        name:'musics'
      }
  ]
})
