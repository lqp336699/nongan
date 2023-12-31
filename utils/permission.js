/**
 * @description 自定义路由拦截
 */
import store from '@/store/index.js'
// 白名单
	// '/pages/identity/identity',
	// '/managePage/pages/registration/registration',
	// '/productPage/pages/registration/registration'
const whiteList = [
	'/pages/welcome/welcome',
]

export default async function() {
	const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
	// 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
	list.forEach(item => {
		uni.addInterceptor(item, {
			async invoke(e) {
				// const token = uni.getStorageSync('token') || ''
				// const url = e.url.split('?')[0]
				// let identity = await store.dispatch('identity/getIdentity')
				//如果有token
				// if(token){
					//发送请求获取用户身份
				// 	if (whiteList.includes(url)) {
				// 		if(identity== 1){
				// 			//如果身份是管理重定向管理员首页
				// 			uni.redirectTo({
				// 				url: '/managePage/pages/index/index'
				// 			})
				// 			return false
				// 		}else if(identity== 2){
				// 			uni.redirectTo({
				// 				url: '/productPage/pages/index/index'
				// 			})
				// 			return false
				// 		}
				// 		return e
				
				// }else{
				// 	uni.redirectTo({
				// 		url: '/pages/welcome/welcome'
				// 	})
				// 	return false
				// }
				return e
			},
			fail(err) { // 失败回调拦截
				console.log(err)
			}
		})
	})
}

