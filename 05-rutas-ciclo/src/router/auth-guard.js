const isAuthenticatedGuard = (to, from, next) => {
    // console.log({ to, from, next })

    return new Promise( () => {
        const random = Math.random() * 100

        if ( random > 50) {
            console.log('Está autentificado')
            next()
        } else {
            console.log('Bloqueado por el isAuthenticateGuard', random)
            next({ name: 'pokemon-home' })
        }
    })
}

export default isAuthenticatedGuard