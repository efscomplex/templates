import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
   { path: '/', component: Home, meta: { title: 'Home' } },
   {
      path: '/about',
      meta: { title: 'About' },
      component: About
      // component: () => import('./views/About.vue')
   },
   { path: '/:path(.*)', component: NotFound }
]
