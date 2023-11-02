/**
 * @description 自定义路由拦截
 */


// 白名单
const whiteList = [
	'/pages/identity/identity'
]

export default async function() {
	const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
	// 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
	list.forEach(item => {
		uni.addInterceptor(item, {
			invoke(e) {
				const token = uni.getStorageSync('token') || ''
				const url = e.url.split('?')[0]
				
				
				
				//如果有token
				if(token){
					//发送请求获取用户身份
					
					if("如果身份是管理&&url==/pages/identity/identity"){
						//如果身份是管理重定向管理员首页
						uni.redirectTo({
							url: '/managePage/pages/index/index'
						})
					}else if("如果身份是开发&&url==/pages/identity/identity"){
						uni.redirectTo({
							url: '/productPage/pages/index/index'
						})
					}
				}
				
				
				
				
				
				
				
				// 判断当前窗口是白名单，如果是则不重定向路由
				if (!whiteList.includes(url) && !token) {
					uni.redirectTo({
						url: '/pages/identity/identity'
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
