<template>
	<view>


		<view class="">
			<home v-if="current==0"></home>
			<ranking class="ranking" v-if="current==1"></ranking>
			<Events v-if="current==2"></Events>
			<policy v-if="current==3"></policy>
		</view>


		<u-tabbar :value="current" @change="name => current = name" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true" activeColor="#1F9A64">
			<u-tabbar-item text="巡查监督">
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/jianduActive.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/jiandu.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="红黑榜">
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/paihangActive.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/paihang.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="生产记事">
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/activeProduct.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/prduct.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="政策动态">
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/zhengceActive.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/zhengce.png"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import Home from './components/productHome/productHome.vue';
	import Events from './components/productEvents/productEvents.vue';
	import Ranking from './components/productRanking/productRanking.vue';
	import Policy from './components/productPolicy/productPolicy.vue';
	export default {

		components: {
			Home,
			Ranking,
			Events,
			Policy

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
		watch: {
			current: {
				handler(newVal) {
					uni.set
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

	.ranking /deep/ .uni-navbar__header-container-inner {
		justify-content: left !important;
	}
</style>