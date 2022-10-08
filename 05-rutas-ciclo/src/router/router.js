import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { 
      path: '/', 
      // Lazy Load
      component: () => import(/*webpackChunkName: 'ListPages'*/ '../modules/pokemon/pages/ListPages')
    },
    { 
      path: '/about', 
      component: () => import(/*webpackChunkName: 'AboutPage'*/ '../modules/pokemon/pages/AboutPage') 
    },
    { 
      path: '/id', 
      component: () => import(/*webpackChunkName: 'id'*/ '../modules/pokemon/pages/PokemonPage')
    },
    { 
      path: '/:pathMatch(.*)*', 
      component: () => import(/*webpackChunkName: 'NoPageFound'*/ "@/modules/shared/pages/NoPagesFound")
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router