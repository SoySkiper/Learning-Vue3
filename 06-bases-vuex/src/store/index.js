import { createStore } from "vuex";
import getRandomInt from "../components/helpers/getRandomInt";


export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        increment(state) {
            state.count++
            state.lastMutation = 'Increment'
        },
        incrementBy(state, val) {
            state.count+= val
            state.lastMutation = 'IncrementBy ' + val 
            state.lastRandomInt = val
        },
        setLoading() {

        }
    },
    // Estas sí pueden ser asíncronas
    actions: {
        async incrementRandomInt({ commit }) {
            const randomInt = await getRandomInt()

            commit('incrementBy', randomInt)
        },
    },
})