import getRandomInt from "@/components/helpers/getRandomInt"

// Se destructura a partir de  'context'
export const incrementRandomInt = async({ commit }) => {
    commit('setLoading', true)
    const randomInt = await getRandomInt()
    commit('incrementBy', randomInt)
    commit('setLoading', false)
}