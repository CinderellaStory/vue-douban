import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/Register'
import RecoverPassword from '@/components/RecoverPassword'
import home from '@/components/home'
import books from '@/components/books'
import BookMore from '@/components/Book/BookMore'
import hotfiction from '@/components/Book/hotfiction'
import hotnonfiction from '@/components/Book/hotnonfiction'
import BookFiction from '@/components/Book/BookFiction'
import BookNonfiction from '@/components/Book/BookNonfiction'
import Mine from '@/components/Mine'
import movie from '@/components/movie'
import CinemaMore from '@/components/Movie/CinemaMore'
import rose from '@/components/Movie/rose'
import fox from '@/components/Movie/fox'
import prince from '@/components/Movie/prince'
import MovieDetail from '@/components/Movie/MovieDetail'
import fllowed from '@/components/Mine/fllowed'
import fllower from '@/components/Mine/fllower'
import HomePage from '@/components/Mine/HomePage'
import MyLikes from '@/components/Mine/MyLikes'
import MyNotes from '@/components/Mine/MyNotes'
import MyPhotos from '@/components/Mine/MyPhotos'
import MyStatus from '@/components/Mine/MyStatus'
import MyMovies from '@/components/Mine/MyMovies'
import MyMusics from '@/components/Mine/MyMusics'
import MyBooks from '@/components/Mine/MyBooks'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/RecoverPassword',
      component: RecoverPassword
    },
    {
      path: '/books',
      component: books
    },
    {
      path: '/Mine',
      component: Mine
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/BookMore',
      component:BookMore,
      children:[
        {  
          path: '/',  
          component: BookNonfiction  
        },
      {
        path: 'BookNonfiction',
        component:BookNonfiction
      },
      {  
        path: 'BookFiction',  
        component: BookFiction  
      }
    ]
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
      },
      {  
        path: 'fox',  
        component: fox  
      }
    ]
    },
    {
      path: '/Movie/MovieDetail/:userId',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path:'/Mine/fllowed',
      component:fllowed,
      name:'fllowed'
      },
      {
      path:'/Mine/fllower',
      component:fllower,
      name:'fllower'
    },
    {
      path:'/Mine/HomePage',
      component:HomePage,
      name:'HomePage'
    },
    {
      path:'/Mine/MyPhotos',
      component:MyPhotos,
      name:'MyPhotos'
    },
    {
      path:'/Mine/MyLikes',
      component:MyLikes,
      name:'MyLikes'
    },
    {
      path:'/Mine/MyNotes',
      component:MyNotes,
      name:'MyNotes'
    },
    {
      path:'/Mine/MyBooks',
      component:MyBooks,
      name:'MyBooks'
    },
    {
      path:'/Mine/MyStatus',
      component:MyStatus,
      name:'MyStatus'
    },
    {
      path:'/Mine/MyMovies',
      component:MyMovies,
      name:'MyMovies'
    },
    {
      path:'/Mine/MyMusics',
      component:MyMusics,
      name:'MyMusics'
    }
  ]
})
