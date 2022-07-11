
const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> {{ true ? 'Activo' : 'Inactivo'}} </p>
    // `
    data(){
        return{
            quote: 'I\'m Batman',
            author: "Bruce Waney"
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola mundo')
            this.author = 'Cristian Primero'
        }
    }
})

app.mount('#myApp')