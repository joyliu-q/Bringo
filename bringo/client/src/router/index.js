import Vue from 'vue'
import VueCalendly from 'vue-calendly'
import VueRouter from 'vue-router'

Vue.use(VueCalendly);
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component:() => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      breadcrumb: [
        { }
      ]
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    meta: {
      breadcrumb: [
        { name: 'Dashboard' }
      ]
    }
  },
  {
    path: '/directory',
    name: 'Directory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Directory.vue'),
    meta: {
      breadcrumb: [
        { name: 'Dashboard', link: 'dashboard' },
        { name: 'Directory' }
      ]
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue'),
    meta: {
      breadcrumb: [
        { name: 'Dashboard' , link: 'dashboard' },
        { name: 'Directory' , link: 'directory' },
        { name: 'Calendar' }
      ]
    }
  },
  {
    path: '/calling',
    name: 'Calling',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calling.vue'),
    meta: {
      breadcrumb: [
        { name: 'Dashboard' , link: 'dashboard' },
        { name: 'Directory' , link: 'directory' },
        { name: 'Calendar' , link: 'calendar' },
        { name: 'Calling' }
      ]
    },
  },
  {
    path: '/create_blog',
    name: 'Create_Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateBlog.vue'),
    meta: {
      breadcrumb: [
        { name: 'Dashboard' , link: 'dashboard' },
        { name: 'Create Blog' }
      ]
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
