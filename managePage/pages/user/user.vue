<template>
	<view class="page px22">
		<view class=" flex bgWhite flex-between align-center br10 px30 py40 border-box">
			<text>姓名</text>
			<text>{{data.truename}}</text>
		</view>
		
		
		<view class=" flex mt20 bgWhite flex-between align-center br10 px30 py40 border-box">
			<text>所在镇</text>
			<text>{{data.county_name}}</text>
		</view>
		
		<view v-if="userInfo.identity_type == 4" class=" flex mt20 bgWhite flex-between align-center br10 px30 py40 border-box">
			<text>所在村</text>
			<text>{{data.village_name}}</text>
		</view>
		
		<view  class=" flex mt20 bgWhite flex-between align-center br10 px30 py40 border-box">
			<text>联系方式</text>
			<text>{{data.phoneNumber}}</text>
		</view>
		
		<view  class=" flex mt20 bgWhite flex-between align-center br10 px30 py40 border-box">
			<text>职位</text>
			<text>{{data.work}}</text>
		</view>
		
		<view  class=" flex mt20 bgWhite flex-between align-center br10 px30 py40 border-box">
			<text>风险等级</text>
			<text v-if="data.fx_level == 0">暂无</text>
			<text v-if="data.fx_level == 1">A级风险</text>
			<text v-if="data.fx_level == 2">B级风险</text>
			<text v-if="data.fx_level == 3">C级风险</text>
		</view>

		<view @click="loginOut" class="flex   mt94 flex-center align-center br83 btnBg"
			style="background: #fa3534; height:90rpx;bottom:30rpx; left:22rpx; right:22rpx; position: fixed;">
			<text :style="{color: '#fff'}">退出登录</text>

		</view>
	</view>
</template>

<script>
import {
		mapState
	} from 'vuex'
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
			...mapState({
				userInfo: (state) => state.identity.userInfo
			})
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