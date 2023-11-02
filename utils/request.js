// let baseUrl = '/'
// let baseUrl = 'http://192.168.101.162:1021/'
let baseUrl = 'https://group.zxkjnc.com/'
uni.baseUrl = baseUrl
// let baseUrl = 'http://192.168.101.61:13019/'

const http = {
	http({
		url,
		data = {},
		method = 'post',
		loading
	}) {
		if (loading) {
			uni.showLoading({
				title: '请稍后...'
			})
		}
		if(uni.getStorageSync('token')){
			data.token = uni.getStorageSync('token')
		}
		// data.token = uni.getStorageSync('token') || 'op-FX5Jwsj-0RAEQTgZxb-9sqw60'
		return new Promise(function(reslove, reject) {
			uni.request({
				url: baseUrl + url,
				data,
				method,
				header: {
					'token': uni.getStorageSync('token') || '',
				},
				success(res) {
					if (loading) {
						uni.hideLoading()
					}
					if (res.data.code == 1) {
						reslove(res.data)
					} else if (res.data.code == -1) {
						uni.removeStorageSync('token')
						uni.redirectTo({
							url: '/pages/login/login'
						})
					} else {
						reject(res.data)
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
					}
					
				},
				fail(res) {
					uni.showToast({
						title: '系统错误',
						icon: 'none'
					})
					console.log(res);
					if (loading) {
						uni.hideLoading()
					}
				}
			})
		})
	}
}

export default http

function onNavigateBack(delta = 1) {
	const pages = getCurrentPages()
	if (pages.length > 1) {
		uni.navigateBack({
			delta: Number(delta || 1)
		})
	} else {
		uni.switchTab({
			url: '/pages/index/index'
		})
	}
}
