export const increment = (state) => {
    state.count++
    state.lastMutation = 'Increment'
}

export const incrementBy = (state, val) => {
    state.count+= val
    state.lastMutation = 'IncrementBy ' + val 
    state.lastRandomInt = val
}

export const setLoading = (state, val) => {
    state.isLoading = val
    state.lastMutation = val
}