import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import identity from '@/store/identity.js'

const store = new Vuex.Store({
    modules: {
       identity: identity, //身份信息
     }
})

export default store
