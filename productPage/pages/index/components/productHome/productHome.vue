<template>

	<view class="">

		<Skeleton v-if="skeleton"></Skeleton>
		<view v-if="!skeleton" class="page relactive">


			<uni-nav-bar backgroundColor="#3BC688" color="#fff" statusBar title="首页" fixed></uni-nav-bar>

			<view class="w100 " style="position: fixed; top:-4rpx; z-index:0; left:0; right:0;">
				<image style="height:630rpx;" class="w100" src="/static/index/homeBg.png"></image>
			</view>


			<view class="px22 relactive " style="z-index: 1; ">
				<view class="navtop"></view>


				<view class="" style="margin-top: 44rpx;"></view>
				<view class="relactive">
					<view class="absolute flex flex-end  pr40" style="bottom: 20rpx; z-index:2; left:0; right:0;">
						<text class="py4 px8 colf br18" style="background: rgba(0,0,0,0.5); ">{{swiperIndex+1}}/
							<text class="font20">{{list1.length}}</text></text>
					</view>
					<u-swiper height="254" :list="list1" @change="change"></u-swiper>
				</view>

				<view class="bgWhite  py40 px40 br16 mt24">
					<view class="flex align-center">
						<!-- <image class="br110 mr26" src="/static/logo.png" style="height:110rpx; width:110rpx;" mode="">
						</image> -->
						<view class="flex " @click="goUser">
							<view class="flex flex-column flex-around" >
								<text class="font800 font36">{{user_info.main_name}}</text>

								<!-- <text>市级管理人员</text> -->
								<view class="flex align-center mt16">
									<text>{{userInfo.work || ''}}</text>
									<view class=" ml14"
										style="width:212rpx; height:48rpx;text-align: center; background: linear-gradient(180deg, #E1FFF2 0%, #FFFFFF 100%);">
										<text>被巡查<text class=" font36 mx14" style="color:#29C17E;">{{count}}</text>(次)</text>
									</view>
								</view>
							</view>
						</view>
					</view>

				</view>

				<ProductCard @ProductCardClick="toPatrol(item)" :productData="item" v-for="item in dataList" :key="item.id"></ProductCard>
			</view>
			<u-loadmore class="mt20" :height="100" font-size="28" :status="status" :loading-text="loadingText"
				:loadmore-text="loadmoreText" :nomore-text="nomoreText" />
		</view>
	</view>

</template>

<script>
	import Skeleton from './skeleton/skeleton.vue'
	import ProductCard from '@/components/ProductCard.vue'
	export default {
		components: {
			ProductCard,
			Skeleton
		},
		data() {
			return {
				list1: [],
				dataList: [],
				swiperIndex: 1,
				limit: 8,
				page: 1,
				skeleton: true,
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了',
				count: 0,
				user_info:{}
			}
		},
		onLoad() {

		},
		async created() {
			await this.init()
			this.skeleton = false
		},
		methods: {
			loadMore(){
				if(this.status == 'nomore'){
					return 
				}
				this.page++
				this.$http({
					url:'/Data/home',
					data:{
						page:this.page,
						limit:this.limit
					}
				}).then(res=>{
					
					this.list = this.list.push(...res.data.list) 
				})
			},
			goUser(){
				uni.navigateTo({
					url:"/managePage/pages/user/user"
				})
			},
			init() {
				return new Promise(resolve => {
					this.$http({
						url: '/Data/home'
					}).then(res => {
						this.list1 = res.data.banner.map(item => item.img)
						this.count = res.data.count
						this.user_info = res.data.user_info
						this.dataList = res.data.list
						this.userInfo = res.data.user_info
						if(res.data.list.length < this.limit){
							this.status = 'nomore'
						}else{
							this.status = 'loadmore'
						}
						resolve('hhh')
					})
				})
				
			},
			change(e) {
				this.swiperIndex = e.current
			},
			toPatrol(item) {
				uni.navigateTo({
					url: '/productPage/pages/patrolDetail/patrolDetail?id='+item.id
				})
			},

		}
	}
</script>

<style scopd lang="scss">

</style>