<template>
	<view>
		
		

		<view class="">
			<home ref="Home" v-if="current==0"></home>
			<ranking ref="ranking" class="ranking" v-if="current==1"></ranking>
			<Events ref="Events" v-if="current==2"></Events>
			<policy ref="policy" v-if="current==3"></policy>
		</view>
		
		
		
		<u-tabbar :value="current" @change="name => current = name" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true" activeColor="#1F9A64">
			<u-tabbar-item text="巡查监督" >
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/jianduActive.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/jiandu.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="红黑榜" >
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/paihangActive.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/paihang.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="生产主体" >
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/activeProduct.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/prduct.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="政策动态" >
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/zhengceActive.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/zhengce.png"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import Home from './components/manageHome/manageHome.vue';
	import Ranking from './components/manageRanking/manageRanking.vue';
	import Events from './components/manageEvents/manageEvents.vue';
	import Policy from './components/managePolicy/managePolicy.vue';
	export default {
		
		components: {
			Home,Ranking,Events,Policy
			
			// Home:()=>import('./components/manageHome/manageHome.vue'),
			// Ranking:()=>import('./components/manageRanking/manageRanking.vue'),
			// Events:()=>import('./components/manageEvents/manageEvents.vue'),
			// Policy:()=>import('./components/managePolicy/managePolicy.vue'),
		},
		
		data() {
			return {
				current: 0,
				
			}
		},
		
		onReachBottom(){
			switch(this.current){
				case 0 : 
				// this.$refs.Home.page_size++
				
			}
			
		},
		watch:{
			current:{
				handler(newVal){
					
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.ranking /deep/ .uni-nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 36rpx !important;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: 18px;
		/* #endif */
	}

	.ranking /deep/ .uni-navbar__header-container-inner{
		justify-content: left !important;
	}
	/deep/ .u-count-down__text {
	
		color: #409F5FFF !important;
		font-size: 22rpx !important;
	}
</style>