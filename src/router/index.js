import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'
import Register from '@/components/Register'
import RecoverPassword from '@/components/RecoverPassword'

import home from '@/components/home'
import Distraction from '@/components/Distraction'
import broadcast from '@/components/broadcast'
import Group from '@/components/Group'
import Mine from '@/components/Mine'

import books from '@/components/books'
import movie from '@/components/movie'
import music from '@/components/music'
import City from '@/components/City'



import BookMore from '@/components/Book/BookMore'
import hotfiction from '@/components/Book/hotfiction'
import hotnonfiction from '@/components/Book/hotnonfiction'
import BookFiction from '@/components/Book/BookFiction'
import BookNonfiction from '@/components/Book/BookNonfiction'

import CinemaMore from '@/components/Movie/CinemaMore'
import rose from '@/components/Movie/rose'
import fox from '@/components/Movie/fox'
import prince from '@/components/Movie/prince'

import subject from '@/components/subject'

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
      path: '/Distraction',
      component: Distraction,
      children:[
        {
          path: '/Distraction/',
          component: movie
        },
        {
          path: '/Distraction/books',
          component: books
        },
        {
          path: '/Distraction/movie',
          component: movie
        },
        {
          path: '/Distraction/music',
          component: music
        },
        {
          path: '/Distraction/City',
          component: City
        }
      ]
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
      path: '/Mine',
      component: Mine
    },
    {
      path: '/Group',
      component: Group
    },
    {
      path: '/broadcast',
      component: broadcast
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
      path: '/subject/:userId',
      name: 'subject',
      component: subject
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
