<template>
	<view class="page px22">
		<view class="mt20">
			<text>姓名: {{data.truename}}</text>
		</view>
		<view class="mt20">
			<text>所在镇: {{data.county_name}}</text>
		</view>

		<view class="mt20" v-if="data.village_name">
			<text>所在村: {{data.village_name}}</text>
		</view>


		<view @click="loginOut" class="flex   mt94 flex-center align-center br83 btnBg"
			style="background: #FF7334; height:90rpx;bottom:30rpx; left:22rpx; right:22rpx; position: fixed;">
			<text :style="{color: '#fff'}">退出登录</text>

		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				data: {},
				addressList: []
			}
		},
		async onLoad() {
			await this.getData()
			if (this.addressList.length == 0) {
				this.addressList = await this.$store.dispatch('address/getAddress')
			}else{
				this.addressList = this.$store.state.address.addressList
			}
		},
		computed: {
			
		},
		methods: {
			getData() {
				return new Promise(resolve=>{
					this.$http({
						url: '/Data/user_info'
					}).then(res => {
						this.data = res.data
						resolve('res.data')
					})
				})
				
			},
			loginOut(){
				uni.removeStorageSync('identity')
				uni.navigateTo({
					url:'/pages/identity/identity'
				})
			}
		}
	}
</script>

<style>

</style>