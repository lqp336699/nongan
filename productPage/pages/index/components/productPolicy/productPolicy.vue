<template>
	
	<view class="">
		<!-- <Skeleton v-if="true"></Skeleton> -->
		<view v-if="true" class="px24 page">
			<!-- hot -->
			<uni-nav-bar  statusBar title="政策动态" color="#222" :border="false" :leftWidth="0" fixed></uni-nav-bar>
			<view class=" flex flex-between mt20">
		
				<navigator
					:url="`/pages/webView/webView?ProjectNewsId=${item.id}&ProjectNewsTitle=${item.title}&from=doctor`"
					v-for="(item,index) in hotList" :key="index" class=" br10 pb20 bgWhite overH  border-box"
					style="width:336rpx; ">
					<image style="height: 226rpx;" :src="item.img"></image>
					<view class="pd14  relactive">
						<image src="@/static/product/hot.png" mode="" class="absolute"
							style="width:70rpx; height:32rpx;  top:20rpx;"></image>
						<p :class="['line2over', item.is_hot == 1 ? 'indent2': '', 'font30',  'font700']"
							style="width:284rpx; padding:0;">{{item.title}}</p>
					</view>
		
					<view class=" px14">
						<text class="font24	 col5">{{item.hits}}阅读</text>
					</view>
				</navigator>
		
			</view>
		
			<view class="bgWhite  mt36">
				<u-tabs :list="newsCate" :current="tabCurrent" :scrollable="true"
					:activeStyle="{ color: '#1F9A64', transform: 'scale(1.05)'  }"
					:inactiveStyle="{ color: '#222222', transform: 'scale(1)' }" lineColor="#1F9A64"
					@click="tabclick"></u-tabs>
			</view>
		
		
		
			<view class=" ">
				<navigator v-for="(item,index) in list" :key="index" class="bgWhite bbs pd30 border-box flex flex-between">
					<view class="flex flex-between flex-column " style="width:420rpx;">
						<view class="">
							<text class="font30" :class="['line2over',  'font30',  'font700']"
								style="width:380rpx;">{{item.title}}</text>
						</view>
						<view class="flex mt32 flex-between align-center">
							<text class="font24">{{item.hits}}阅读</text>
							<text class="font24">{{item.time}}</text>
						</view>
		
					</view>
		
					<view>
						<image class=" br10 overH" style="width:202rpx; height:100%;" :src="item.img" mode=""></image>
					</view>
				</navigator>
			</view>
		
			<u-loadmore class="" :height="100" font-size="28" :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
				:nomore-text="nomoreText" />
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
				newsCate: [{
					name: '待收货'
				}, {
					name: '待付款'
				}, {
					name: '待评价',
					count: 5
				}],
				hotList: [{
					title: "新闻标题新闻标闻标题新闻标题新闻",
					doctor: "李清平",
					hits: "54",
					img: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
					time: "2022-07-01",
					is_hot:true
				},
				{
					title: "新闻标题新闻标闻标题新闻标题新闻",
					doctor: "李清平",
					hits: "54",
					img: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
					time: "2022-07-01",
					is_hot:true
				}],
				list: [{
						title: "新闻标题新闻标闻标题新闻标题新闻",
						doctor: "李清平",
						hits: "54",
						img: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
						time: "2022-07-01"
					},
					{
						title: "新闻标题新闻标闻标题新闻标题新闻",
						doctor: "李清平",
						hits: "54",
						img: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
						time: "2022-07-01"
					},
					{
						title: "新闻标题新闻标闻标题新闻标题新闻",
						doctor: "李清平",
						hits: "54",
						img: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
						time: "2022-07-01"
					},
				],
				tabCurrent: 0,
				limit: 8,
				page: 1,
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了'
			}
		},
		methods: {
			tabclick() {

			},

		}
	}
</script>

<style scoped lang="scss">
	/deep/ .uni-nav-bar-text {
		font-size: 36rpx !important;
	}
	
	/deep/ uni-navbar__header-container data-v-6bda1a90 {
		justify-content: left !important;
	}
</style>