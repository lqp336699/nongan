<template>
	<view class="page relactive">

		<uni-nav-bar backgroundColor="#3BC688" color="#fff" statusBar title="首页" fixed></uni-nav-bar>

		<view class="w100 " style="position: fixed; top:-4rpx; z-index:0; left:0; right:0;">
			<image style="height:630rpx;" class="w100" src="/static/index/homeBg.png"></image>
		</view>
		

		<view class="px22 absolute " style="z-index: 1; ">
			<view class="navtop">
				
			</view>
			<view class="" style="margin-top: 44rpx;">
				
			</view>
			<view class="relactive">
				<view class="absolute flex flex-end  pr40" style="bottom: 20rpx; z-index:2; left:0; right:0;">
					<text class="py4 px8 colf br18" style="background: rgba(0,0,0,0.5); ">{{swiperIndex+1}}/
					<text class="font20">{{list1.length}}</text></text>
				</view>
				<u-swiper height="254" :list="list1" @change="change" @click="click"></u-swiper>
			</view>
			
			<view class="bgWhite  py40 px40 br16 mt24">
				<view class="flex flex-between align-center">
					<view class="flex">
						<image class="br110 mr26" src="/static/logo.png" style="height:110rpx; width:110rpx;" mode=""></image>
						<view class="flex flex-column flex-around">
							<text class="font800 font36">zjl</text>
							<text>市级管理人员</text>
						</view>
					</view>
					<view @click="addPatrol" class="flex px16 border-box py16 align-center flex-center br36" style="height:72rpx; width:192rpx; border:2rpx solid #1F9A64;">
						<image class="" style="width:32rpx; height:32rpx; margin-right:10rpx;" src="/static/index/add.png" mode=""></image>
						<text style="color:#1F9A64;">添加巡查</text>
					</view>
				</view>
				
				
				<view class="flex mt40 flex-between">
					<view class="flex flex-column align-center flex-center" style="width:272rpx; height:130rpx; background: linear-gradient(180deg, #E1FFF2 0%, #FFFFFF 100%);">
						<text>总巡查(件)</text>
						<text class="mt20 font36 " style="color:#29C17E;">15</text>
					</view>
					
					<view class="flex flex-column align-center flex-center" style="width:272rpx; height:130rpx;background: linear-gradient(180deg, #EBF3FF 0%, #FFFFFF 100%);">
						<text>本月巡查(件)</text>
						<text class="mt20 font36 " style="color:#17A5E3;">15</text>
					</view>
				</view>
			</view>
			
			<ProductCard v-for="item in 2" :key="item"></ProductCard>
		</view>
	</view>
</template>

<script>
	import AddPatrol from '@/managePage/pages/addPatrol/addPatrol.vue'
	import ProductCard from '@/components/ProductCard.vue'
	export default {
		components: {
			ProductCard,AddPatrol
		},
		data() {
			return {
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				swiperIndex:1
			}
		},
		methods: {
			change(e) {
				this.swiperIndex = e.current
			},
			click() {

			},
			addPatrol(){
				uni.navigateTo({
					url:"/managePage/pages/addPatrol/addPatrol"
				})
			}
		}
	}
</script>

<style scopd lang="scss">

</style>