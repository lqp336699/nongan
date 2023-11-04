//身份信息
import Request from '@/utils/request.js'

const identity = {
	state: {
		identity: uni.getStorageInfoSync('identity') || 0 //0游客，1监督人员    2生产主体
	},
	mutations: {
		CHANGE_IDENTITY(state, identity) {
			state.identity = identity
			uni.setStorageSync('identity', identity);
		}
	},
	actions: {
		getIdentity({ commit }) {
			return new Promise((resolve, reject) => {
				
				Request.http({
					url:'/wechat/userinfo'
				}).then(res=>{
					
					commit('CHANGE_IDENTITY', res.data.identity)
					  
					  resolve(res.data.identity)
				})
			})
		},
		setIdentity({commit}) {
			
			return new Promise((resolve, reject) => {
				
				
				
				
			})
		},
		
	},
	getters: {


	},
	namespaced: true
}



export default identity