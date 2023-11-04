<template>
	<view class="page  flex flex-center align-center">
		<u-loading-page  fontSize="38" iconSize ="56" :loading="true"></u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			
			if(!uni.getStorageSync('token')){
				this.login()
			}else{
				uni.redirectTo({
					url:"/pages/identity/identity"
				})
			}
			//登录
		},
		methods: {
			login(){
				uni.login({
				  success : res=> {
				    if (res.code) {
						this.$http({
							url:'/Wechat/wechat_login',
							data:{
								code:res.code
							}
						}).then(res=>{
							uni.setStorageSync('token',res.data.openid)
							uni.redirectTo({
								url:"/pages/identity/identity"
							})
						})
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
				  }
				})
			}
		}
	}
</script>

<style>

</style>
