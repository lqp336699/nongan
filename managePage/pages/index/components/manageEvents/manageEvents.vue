<template>
	<view class="page pb50">
		<uni-nav-bar statusBar title="生产主体" fixed></uni-nav-bar>
		<!-- <scroll-view scroll-y="true" class="pb60 border-box bd" bd> -->
		<view class="px22">

			<!-- <view v-if="recodeList.length == 0" class="py100 flex flex-center align-center">
					<text>暂无数据</text>
				</view> -->


			<!-- <view v-if="recodeList.length > 0" class="pb40   border-box"> -->
			<product-item v-for="item in 5" :key="item"></product-item>
			<!-- </view> -->


		</view>

		<view class="mt20 ">
			<u-loadmore fontSize="28" :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" />
		</view>

		<!-- </scroll-view> -->
	</view>
</template>

<script>
	import ProductItem from '@/components/productItem.vue'
	export default {
		components: {
			ProductItem
		},
		data() {
			return {
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了',
				page_size: 8,
				page_index: 1,
				recodeList: [],
			}
		},
		onLoad() {
			this.getData()
		},
		onReachBottom() {
			if (this.status == "nomore") {
				return
			}
			if (this.status == 'loadmore') {
				this.page_index++
				this.getData()
			}
		},
		methods: {
			getData() {
				this.status = "loading"
				// this.$http({
				// 	url: 'api/Wechat/userDrawList',
				// 	data:{
				// 		page_index: this.page_index,
				// 		page_size: this.page_size
				// 	}
				// }).then(res => {
				// 	this.recodeList = this.recodeList.concat(res.data)
				// 	if(res.data.length < this.page_size){
				// 		this.status = "nomore"
				// 	}
				// })
			}
		}
	}
</script>

<style scoped lang="scss">

</style>