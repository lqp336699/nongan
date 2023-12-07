<template>
	<view class="page">
		<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>

		<view class="">
			<home class="navBarMenu" ref="Home" v-if="current==0"></home>
			<ranking class="navBar ranking" ref="ranking" v-if="current==1"></ranking>
			<Events class="navBar" ref="Events" v-if="current==2"></Events>
			<policy class="navBar" ref="policy" :show='show' v-if="current==3"></policy>
		</view>



		<u-tabbar :value="current" @change="name => current = name" :fixed="true" :placeholder="true"
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
			<u-tabbar-item text="生产主体">
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
	import {
		mapState
	} from 'vuex'
	import Home from './components/manageHome/manageHome.vue';
	import Ranking from './components/manageRanking/manageRanking.vue';
	import Events from './components/manageEvents/manageEvents.vue';
	import Policy from './components/managePolicy/managePolicy.vue';
	export default {

		components: {
			Home,
			Ranking,
			Events,
			Policy
		},

		data() {
			return {
				current: 0,
				show: false,
			}
		},

		onShow() {
			switch (this.current) {
				case 0:
					this.$refs.Home.init()
					break;
				case 1:
					this.$refs.ranking.getData()
					break;
				case 2:
					this.$refs.Events.getData()
					break;
				case 3:
					this.$refs.policy.getData()
					break;
			}
		},
		computed: {
			...mapState({
				identity: state => state.identity.identity,
			}),
		},

		onReachBottom() {
			switch (this.current) {
				case 0:
					this.$refs.Home.loadMore()
					break;
				case 1:
					// this.$refs.ranking.loadMore()
					break;
				case 2:
					this.$refs.Events.loadMore()
					break;
				case 3:
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
	// .ranking /deep/ .uni-nav-bar-text {
	// 	/* #ifdef APP-PLUS */
	// 	font-size: 36rpx !important;
	// 	/* #endif */
	// 	/* #ifndef APP-PLUS */
	// 	font-size: 18px;
	// 	/* #endif */
	// }



	/deep/ .u-count-down__text {

		color: #409F5FFF !important;
		font-size: 22rpx !important;
	}

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