import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import identity from '@/store/identity.js'
import address from '@/store/address.js'

const store = new Vuex.Store({
    modules: {
       identity: identity, //身份信息
	   address:address//地址列表
     }
})

export default store
