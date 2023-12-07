//身份信息
import Request from '@/utils/request.js'

const identity = {
	state: {
		userInfo: uni.getStorageSync('userInfo') || {},
		main_type_list:uni.getStorageSync('main_type_list') || []
	},
	mutations: {
		
		SET_USER_INFO(state, data) {
			state.userInfo = data
			uni.setStorageSync('userInfo',data)
			uni.setStorageSync('token', data.openid);
			uni.showToast({
				title: "注册成功"
			})
		},
	},
	getters: {
		identity: (state) => (id) => {
			return state.identity
		}
	},
	actions: {
		
		// getMainTypeList({
		// 	commit
		// }){
		// 	Request.http({
		// 		url: '/wechat/userinfo'
		// 	}).then(res => {
		// 		commit('SET_USERINFO', res.data)
		// 		commit('CHANGE_IDENTITY', res.data.identity)
		// 		resolve(res.data.identity)
		// 	})
		// },
		getIdentity({
			commit
		}) {
			return new Promise((resolve, reject) => {

				Request.http({
					url: '/wechat/userinfo'
				}).then(res => {
					commit('SET_USERINFO', res.data)
					commit('CHANGE_IDENTITY', res.data.identity)
					resolve(res.data.identity)
				})
			})
		}

	},
	getters: {


	},
	namespaced: true
}



export default identity