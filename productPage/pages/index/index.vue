<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
	<view class="page">

		<view class="">
			<home class="navBarMenu" ref="Home" v-if="current==0"></home>
			<ranking class="navBar" ref="ranking" v-if="current==1"></ranking>
			<Events class="navBar" v-if="current==2"></Events>
			<policy class="navBar" :show.sync="show" ref="policy" v-if="current==3"></policy>
		</view>


		<u-tabbar zIndex="200" :value="current" @change="name => current = name" :fixed="true" :placeholder="true"
			:safeAreaInsetBottom="true" activeColor="#1F9A64">
			<u-tabbar-item text="巡查监督">
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="active-icon"
					src="/static/index/jianduActive.png"></image>
				<image style="height:56rpx; width:56rpx;" class="u-page__item__slot-icon" slot="inactive-icon"
					src="/static/index/jiandu.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="积分榜">
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
				show: false
			}
		},
		// onLoad() {
		// 	switch (this.current) {
		// 		case 0:
		// 			this.$refs.Home.init()
		// 			break;
		// 		case 1:
		// 			this.$refs.page = 1
		// 			this.$refs.ranking.getData()
		// 			break;
		// 		case 2:
		// 			this.$refs.page = 1
		// 			this.$refs.Events.getData()
		// 			break;
		// 		case 3:
		// 			this.$refs.page = 1
		// 			this.$refs.policy.getData()
		// 			break;
		// 	}
		// },
		
		onReachBottom() {
			switch (this.current) {
				case 0:
					// this.$refs.page = 1
					this.$refs.Home.loadMore()
					break;
				case 1:
					this.$refs.page = 1
					// this.$refs.ranking.loadMore()
					break;
				case 3:
					this.$refs.page = 1
					this.$refs.policy.loadMore()
					break;
			}

		},
		watch: {
			current: {
				handler(newVal) {
					this.show = false
				}
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.navBar /deep/ .uni-nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 36rpx !important;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: 18px;
		/* #endif */
	}


	.navBarMenu /deep/ .uni-nav-bar-text {
		font-size: 36rpx !important;
	}

	.navBar /deep/ .uni-navbar__header-container-inner {
		justify-content: left !important;
	}
</style>