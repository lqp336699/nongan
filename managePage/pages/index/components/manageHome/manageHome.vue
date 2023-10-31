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
			
			<view class="">
				<view class="">
					
				</view>
			</view>
			
			<ProductCard v-for="item in 2" :key="item"></ProductCard>
		</view>
	</view>
</template>

<script>
	import ProductCard from '@/components/ProductCard.vue'
	export default {
		components: {
			ProductCard
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

			}
		}
	}
</script>

<style scopd lang="scss">

</style>