export default {
    updateProfile({ commit }, input) {
        commit('setName', input)
    }
}