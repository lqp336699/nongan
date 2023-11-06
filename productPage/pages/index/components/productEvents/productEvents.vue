<template>
	<view class="">
		<Skeleton v-if="true"></Skeleton>
		<view v-if="false" class="page">
			<!-- 导航栏 -->
			<uni-nav-bar status-bar fixed :leftWidth="0" :border="false" color="#000" title="生产记事"
				backgroundColor="#fff"></uni-nav-bar>
			<!-- 导航栏 -->
		
			<view class="mx24 flex flex-column">
				<view class="mt20 pl24 pr30 bgWhite flex flex-between align-center br10" style="height: 110rpx;"
					v-for="(item,index) in eventList" :key="index" @click="changeEvent(eventList[index])">
					<view class="flex align-center ">
						<image style="width: 60rpx;height: 60rpx;" :src="item.src" mode=""></image>
						<text class="ml30">{{item.title}}</text>
					</view>
					<view class="">
						<image style="width: 40rpx;height: 40rpx;" src="/static/productRecord/icon.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Skeleton from './skeleton/skeleton.vue'
	
	export default {
		components: {
			Skeleton
		},
		
		data() {
			return {
				eventList: [{
					title: '产品收货、销售记录',
					src: '/static/productRecord/market.png',
					path: '/productPage/pages/productMarketRecord/productMarketRecord'
				}, {
					title: '肥料购买及出入库记录',
					src: '/static/productRecord/manure.png',
					path: '/productPage/pages/BuyManureRecord/BuyManureRecord'
				}, {
					title: '肥料使用记录',
					src: '/static/productRecord/useManure.png',
					path: '/productPage/pages/UseManureRecord/UseManureRecord'
				}, {
					title: '农药购买及出入库记录',
					src: '/static/productRecord/pesticide.png',
					path: '/productPage/pages/BuyPesticideRecord/BuyPesticideRecord'
				}, {
					title: '农药使用记录',
					src: '/static/productRecord/usePesticide.png',
					path: '/productPage/pages/UsePesticideRecord/UsePesticideRecord'
				}, {
					title: '生产农事记录',
					src: '/static/productRecord/yieldFarm.png',
					path: '/productPage/pages/yieldFarmRecord/yieldFarmRecord'
				}, ]
			}
		},
		methods: {
			changeEvent(item){
				uni.navigateTo({
					url: item.path
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>

</style>