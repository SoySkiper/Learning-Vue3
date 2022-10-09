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
      path: '/:id', 
      name: 'pokemon-id',
      component: () => import(/*webpackChunkName: 'id'*/ '../modules/pokemon/pages/PokemonPage'),
      props: (route) => {
        const id = Number(route.params.id)
        return isNaN(id) ? { id:1 } : {id}
      }
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