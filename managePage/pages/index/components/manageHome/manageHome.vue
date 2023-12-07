<template>
	<view class="page ">
	
		<!-- <view class="bgWhite  py24 border-box " :style="{position:'fixed', height:'100rpx', top:'-10rpx', zIndex:100, right:0,left:0}">

			<view class="flex  py2 flex-between align-center">
				<view class="flex flex1  flex-center align-center ">
					<text>本月巡查</text>
				</view>
				<view class="flex flex1 flex-center  align-center ">
					<text class="">全部巡查</text>
				</view>
				
				<view class="flex flex1 flex-center  align-center ">
					<text class="">所在村</text>
				</view>
			</view>
		</view> -->
		<uni-nav-bar status-bar   :border="false" color="#000"
			title="首页" fixed  backgroundColor="rgba(255,255,255,1)"></uni-nav-bar>
		<!-- 导航栏 -->
		<view class="px22 ">



			<view class="">
				<view class="absolute flex flex-end  pr40" style="bottom: 20rpx; z-index:2; left:0; right:0;">
					<text class="py4 px8 colf br18" style="background: rgba(0,0,0,0.5); ">{{swiperIndex+1}}/
						<text class="font20">{{bannerList.length}}</text></text>
				</view>
				<u-swiper height="254" :list="bannerList" @change="change" @click="click"></u-swiper>
			</view>

			<view class="bgWhite  py40 px40 br16 mt24">
				<view class="flex flex-between align-center">
					<view class="flex " @click="goUser">
						<!-- 	<image class="br110 mr26" :src="userInfo.wxPhotoURL || ''" style="height:110rpx; width:110rpx;"
								mode=""></image> -->
						<view class="flex flex-column flex-around">
							<text class="font800 font36">{{userInfo.truename || ''}}</text>
							<text>{{userInfo.work || ''}}</text>
						</view>
					</view>
					<view @click="addPatrol" class="flex px16 border-box py16 align-center flex-center br36"
						style="height:72rpx; width:192rpx; border:2rpx solid #1F9A64;">
						<image class="" style="width:32rpx; height:32rpx; margin-right:10rpx;"
							src="/static/index/add.png" mode=""></image>
						<text style="color:#1F9A64;">添加巡查</text>
					</view>
				</view>


				<view class="flex mt40 flex-between">
					<view class="flex flex-column align-center flex-center"
						style="width:272rpx; height:130rpx; background: linear-gradient(180deg, #E1FFF2 0%, #FFFFFF 100%);">
						<text>总巡查(件)</text>
						<text class="mt20 font36 " style="color:#29C17E;">{{homeData.count}}</text>
					</view>
					<view class="flex flex-column align-center flex-center"
						style="width:272rpx; height:130rpx;background: linear-gradient(180deg, #EBF3FF 0%, #FFFFFF 100%);">
						<text>本月巡查(件)</text>
						<text class="mt20 font36 " style="color:#17A5E3;">{{homeData.month_count || 0}}</text>
					</view>
				</view>
			</view>

			<ProductCard @ProductCardClick="ProductCardClick(item)" :productData="item" v-for="item in productData"
				:key="item.id"></ProductCard>


		</view>
		<u-loadmore class="mt50" iconSize="28" :height="100" font-size="28" :status="status" :loading-text="loadingText"
			:loadmore-text="loadmoreText" :nomore-text="nomoreText" />
	</view>

	<!-- </view> -->

</template>

<script>
	import Skeleton from './skeleton/skeleton.vue'
	import AddPatrol from '@/managePage/pages/addPatrol/addPatrol.vue'
	import ProductCard from '@/components/ProductCard.vue'
	export default {
		components: {
			ProductCard,
			AddPatrol,
			Skeleton
		},

		data() {
			return {
				skeleton: false,
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				swiperIndex: 1,
				limit: 8,
				page: 1,
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了',
				bannerList: [],
				userInfo: {},
				productData: [],
				homeData: {}
			}
		},
		created() {
			this.init()
		},


		methods: {
			loadMore() {
				if (this.status == "nomore") {
					return
				}
				this.status = "loading"
				this.page++
				this.getMore()
			},
			change(e) {
				this.swiperIndex = e.current
			},
			click() {

			},
			addPatrol() {
				uni.navigateTo({
					url: "/managePage/pages/addPatrol/addPatrol"
				})
			},
			getMore() {
				this.$http({
					url: '/Data/home',
					data: {
						page: this.page,
						limit: this.limit
					}
				}).then(res => {

					if (res.data.list.length < this.limit) {
						this.status = 'nomore'
					} else {
						this.status = 'loadmore'
					}
					this.productData = this.productData.push(...res.data.list)
				})
			},
			goUser() {
				console.log("jhjhjhjhjh")
				uni.navigateTo({
					url: "/managePage/pages/user/user"
				})
			},
			goXuncha() {
				console.log("kkkk")
				uni.navigateTo({
					url: "/managePage/pages/xuncha/xuncha"
				})
			},
			init() {
				this.$http({
					url: '/Data/home',
					data: {
						page: this.page,
						limit: this.limit
					}
				}).then(res => {
					this.homeData = res.data
					this.bannerList = res.data.banner.map(item => item.img)
					// this.count = res.data.count
					this.userInfo = res.data.user_info
					this.productData = res.data.list
					if (res.data.list.length < this.limit) {
						this.status = 'nomore'
					} else {
						this.status = 'loadmore'
					}
				})
			},


			ProductCardClick(item) {
				uni.navigateTo({
					url: '/managePage/pages/patrolDetail/patrolDetail?id=' + item.id
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>