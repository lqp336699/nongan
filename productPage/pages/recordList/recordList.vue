<template>
	<view class="px24 page pt1 pb125 ">
		<!-- 导航栏 -->
		<uni-nav-bar backgroundColor="#F7F7F7" color="#222" left-icon="left"  leftWidth="50rpx" :border="false"
			@clickLeft="back" statusBar :title="title" fixed></uni-nav-bar>
		<!-- 导航栏 -->

		<view class="bgWhite br20 py40 px30 mt20 " v-for="item in list" :key="item.id">
			<view class="flex flex-between align-center col8">
				<text>{{$u.timeFormat(item.create_time, 'yyyy-mm-dd hh:MM')}}</text>

				<image @click="editCilck(item)" style="width:27rpx; height:30rpx;" src="/static/addRecord/edit.png"
					mode="">
				</image>
			</view>
			<view class="mt20 col555">
				日期：
				<text class="col2 fontw500">{{$u.timeFormat(item.create_time, 'yyyy-mm-dd')}}</text>
			</view>
			<view class="mt20 col555">
				地块名称：
				<text class="col2 fontw500">{{item.name}}</text>
			</view>
			<view class="mt20 col555">
				地块面积：
				<text class="col2 fontw500">{{item.dk_area}}m²</text>
			</view>
		</view>
		<view @click="addRecord" class="flex mt94 flex-center align-center colf br83"
			style="background: #1F9A64;height: 90rpx; position: fixed; bottom:20rpx; left:20rpx; right:20rpx;">
			<text class="ml20 font32">添加记录</text>
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
				list: [],
				title: '',
				form: {
					page: 1,
					limit: 10,
					type: ''
				}
			}
		},

		computed: {
			...mapState({
				userInfo: (state) => state.identity.userInfo
			})
		},

		onLoad(options) {
			this.form.type = options.type
			this.title = options.title
			this.getList()

		},
		onShow() {
			this.getList()
		},
		methods: {
			getList() {
				this.$http({
					url: "/Data/product_log_list",
					data: {
						...this.form
					},

				}).then(res => {
					this.list = res.data
					console.log(this.list)
				})

			},
			addRecord() {
				if (this.form.type == 4) {
					uni.navigateTo({
						url: `/productPage/pages/nongshi/nongshi`
					})
				}else if(this.form.type == 3){
					uni.navigateTo({
						url: `/productPage/pages/nongyao/nongyao`
					})
				}else if(this.form.type == 2){
					uni.navigateTo({
						url: `/productPage/pages/feiliao/feiliao`
					})
				}else if(this.form.type == 1){
					uni.navigateTo({
						url: `/productPage/pages/shouhuo/shouhuo`
					})
				}
			},
			editCilck(item) {
				if (this.form.type == 4) {
					uni.navigateTo({
						url: `/productPage/pages/nongshi/nongshi?id=${item.id}`
					})
				}else if(this.form.type == 3){
					uni.navigateTo({
						url: `/productPage/pages/nongyao/nongyao?id=${item.id}`
					})
				}else if(this.form.type == 2){
					uni.navigateTo({
						url: `/productPage/pages/feiliao/feiliao?id=${item.id}`
					})
				}else if(this.form.type == 1){
					uni.navigateTo({
						url: `/productPage/pages/shouhuo/shouhuo?id=${item.id}`
					})
				}

			},
			back() {
				uni.navigateBack({})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-navbar__header-container-inner {
		justify-content: left !important;
	}

	/deep/ .uni-nav-bar-text {
		font-size: 36rpx !important;
	}
</style>