//身份信息
import Request from '@/utils/request.js'

const identity = {
	state: {
		addressList: [], //地址列表

	},
	mutations: {
		SET_ADDRESS(state, address) {
			state.addressList = address
			console.log(state.addressList,"state.address")
		},

	},

	actions: {

		getAddress({
			commit
		}) {
			
			return new Promise(resolve=>{
				Request.http({
					url: '/Data/address'
				}).then(res => {
					console.log(res,"ppgfg")
					commit('SET_ADDRESS', res.data)
					resolve(res.data)
				})
			})
			

		},

	},
	getters: {


	},
	namespaced: true
}



export default identity