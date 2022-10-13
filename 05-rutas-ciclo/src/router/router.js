import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
    {
        path: "/",
        redirect: "/pokemon",
    },
    {
        path: "/pokemon",
        // Me marcaba un warning indicando que quitara el nombre
        // name: "pokemon",
        component: () => import(/*webpackChunkName: 'PokemonLayout'*/ "../modules/pokemon/layouts/PokemonLayout"),
        children: [
            {
                path: "home",
                name: "pokemon-home",
                // Lazy Load
                component: () =>
                    import(
                    /*webpackChunkName: 'ListPages'*/ "../modules/pokemon/pages/ListPages"
                    ),
            },
            {
                path: "about",
                name: "pokemon-about",
                component: () =>
                    import(
                    /*webpackChunkName: 'AboutPage'*/ "../modules/pokemon/pages/AboutPage"
                    ),
            },
            {
                path: "pokemonid/:id",
                name: "pokemon-id",
                component: () =>
                    import(
                    /*webpackChunkName: 'id'*/ "../modules/pokemon/pages/PokemonPage"
                    ),
                props: (route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? { id: 1 } : { id };
                },
            },
            {
                path: "",
                redirect: { name: 'pokemon-about' },
            },
        ],
    },

    {
        path: "/dbz",
        // Al comentar esta línea me quitó un warning
        // name: "dbz",
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import(/*webpackChunkName: 'DragonBallLayout'*/ "../modules/dbz/layouts/DragonBallLayout.vue"),
        children: [
            {
                path: "characters",
                name: "dbz-characters",
                component: () =>
                    import(
                        /*webpackChunkName: 'DBZ-Characters'*/ "../modules/dbz/pages/Characters.vue"
                    ),
            },
            {
                path: "about",
                name: "dbz-about",
                component: () =>
                    import(
                        /*webpackChunkName: 'DBZ-About'*/ "../modules/dbz/pages/About.vue"
                    ),
            },
            {
                path: "",
                redirect: { name: "dbz-characters" },
            },
        ]
    },
    /** DBZ Layout
     *  
     * layout: path: /dbz
     *          path: 'characters'
     *          name: 'dbz-characters'
     * 
     *          path: 'about'
     *          name: 'dbz-about'
     */

    {
        path: "/:pathMatch(.*)*",
        component: () =>
            import(
            /*webpackChunkName: 'NoPageFound'*/ "@/modules/shared/pages/NoPagesFound"
            ),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

// Guard Global - Sincrono
// router.beforeEach( (to, from, next) => {
    // console.log({to, from, next});
// 
    // const random = Math.random() * 100
    // if( random > 50 ) {
    //     console.log('Autentificado')
    //     next()
    // } else {
    //     console.log(random, 'Bloqueado por el beforeEach Guard')
    //     next({ name: 'pokemon-home' })
    // }
// })

// const canAccess = () => {
    // return new Promise( resolve => {
// 
        // const random = Math.random() * 100
        // if( random > 50 ) {
            // console.log('Autentificado - canAccess')
            // resolve(true)
        // } else {
            // console.log(random, 'Bloqueado por el beforeEach Guard - canAccess')
            // resolve(false)
        // }
    // })
// }
// 
// router.beforeEach( async(to, from, next) => {
// 
    // const authorized = await canAccess()
// 
    // authorized
        // ? next()
        // : next({ name: 'pokemon-home' })
// 
// })

export default router;
