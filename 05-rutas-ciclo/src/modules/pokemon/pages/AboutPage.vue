<template>
    <h1>About Pages</h1>
    <hr>
    <h2>{{name}}</h2>
    <button @click="onChangeName">
        Cambiar nombre
    </button>
</template>

<script>
export default {

    data(){
        return{
            name: 'Cristian'
        }
    },

    methods: {
        onChangeName(){
            this.name = 'Valentin'
        }
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        this.name = 'Daniel'
        console.log('created')
        // Peticiones HTTP
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    },
}
</script>