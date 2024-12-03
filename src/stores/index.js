import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;