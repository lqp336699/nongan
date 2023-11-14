/**
 * @description 自定义路由拦截
 */
import store from '@/store/index.js'
// 白名单
const whiteList = [
	'/pages/welcome/welcome',
	'/pages/identity/identity',
	'/managePage/pages/registration/registration',
	'/productPage/pages/registration/registration'
]

export default async function() {
	const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
	// 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
	list.forEach(item => {
		uni.addInterceptor(item, {
			async invoke(e) {
				const token = uni.getStorageSync('token') || ''
				const url = e.url.split('?')[0]
				let identity = await store.dispatch('identity/getIdentity')
				//如果有token
				if(token){
					//发送请求获取用户身份
					if (whiteList.includes(url)) {
						console.log("拦截白名单，默认跳转")
						if(identity== 1){
							//如果身份是管理重定向管理员首页
							console.log("667776")
							uni.redirectTo({
								url: '/managePage/pages/index/index'
							})
							return false
						}else if(identity== 2){
							console.log("66644446")
							uni.redirectTo({
								url: '/productPage/pages/index/index'
							})
							return false
						}
						return e
					}else{
						if(![1,2].includes(identity)){
							uni.showToast({
								title:"身份不足,跳转身份选择页面",
								icon:"none"
							})
							setTimeout(()=>{
								uni.redirectTo({
									url: '/pages/identity/identity'
								})
							},1000)
							
							return false
						}else{
							return e
						}
					}
					
				
				}else{
					console.log("拦截未登录，跳转欢迎页面")
					uni.redirectTo({
						url: '/pages/welcome/welcome'
					})
					return false
				}
				return e
			},
			fail(err) { // 失败回调拦截
				console.log(err)
			}
		})
	})
}
