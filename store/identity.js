//身份信息


const identity = {
	state: {
		identity: uni.getStorageInfoSync('identity') || -1 //0管理人员，1生产主体
	},
	mutations: {
		CHANGE_IDENTITY(state, identity) {
			state.identity = identity
			uni.setStorageSync('identity', identity);
		}
	},
	actions: {
		getIdentity({ commit }, identity) {
			return new Promise((resolve, reject) => {
				commit('CHANGE_IDENTITY', identity)
				resolve(identity)
			})
			//后期异步请求获取identity	
		},
		setIdentity({
			commit
		}, identity) {
			return new Promise((resolve, reject) => {
				commit('CHANGE_IDENTITY', identity)
				resolve(identity)
			})
		}
	},
	getters: {


	},
	namespaced: true
}



export default identity