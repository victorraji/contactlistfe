import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Contacts from '@/components/Contacts'
import NewContact from '@/components/NewContact'
import SearchContact from '@/components/SearchContact'
import SearchContactEmpty from '@/components/SearchContactEmpty'
import HeaderNav from '@/components/HeaderNav'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HeaderNav,
    children: [
      {
        path: '/Contacts',
        name: 'CONTACTS',
        component: Contacts
      },
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/NewContact',
        name: 'NEWCONTACT',
        component: NewContact
      },
      {
        path: '/SearchContact/:query',
        name: 'SEARCHCONTACT',
        component: SearchContact
      },
      {
        path: '/SearchContactEmpty',
        name: 'SEARCHCONTACT',
        component: SearchContactEmpty
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
