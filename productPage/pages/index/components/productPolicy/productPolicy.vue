<template>

	<view class="">
		<Skeleton v-if="skeleton"></Skeleton>
		<view v-if="!skeleton" class="px24 page">
			<!-- hot -->
			<uni-nav-bar statusBar title="政策动态" color="#222" :border="false" :leftWidth="0" fixed></uni-nav-bar>
			<view class=" flex flex-between mt20">

				<view v-for="(item,index) in hotList" :key="index" @click="listItemClick(item)"
					class=" br10 pb20 bgWhite overH  border-box" style="width:336rpx; ">
					<image style="height: 226rpx;width: 100%;" :src="item.img"></image>
					<view class="pd14  relactive">
						<image src="@/static/product/hot.png" mode="" class="absolute"
							style="width:70rpx; height:32rpx;  top:20rpx;"></image>
						<p :class="['line2over', item.is_hots == 1 ? 'indent2': '', 'font30',  'font700']"
							style="width:284rpx; padding:0;">{{item.title || ''}}</p>
					</view>

					<view class=" px14">
						<text class="font24	 col5">{{item.hits || ''}}阅读</text>
					</view>
				</view>

			</view>

			<view class="bgWhite  mt36">
				<u-tabs :list="NewCateList" :current="tabCurrent" :scrollable="true"
					:activeStyle="{ color: '#1F9A64', transform: 'scale(1.05)'  }"
					:inactiveStyle="{ color: '#222222', transform: 'scale(1)' }" lineColor="#1F9A64"
					@click="tabclick"></u-tabs>
			</view>



			<view class=" ">
				<view v-for="(item,index) in list" :key="index" @click="listItemClick(item)"
					class="bgWhite bbs pd30 border-box flex flex-between">
					<view class="flex flex-between flex-column " style="width:420rpx;">
						<view class="">
							<text class="font30" :class="['line2over',  'font30',  'font700']"
								style="width:380rpx;">{{item.title}}</text>
						</view>
						<view class="flex mt32 flex-between align-center">
							<text class="font24">{{item.hits}}阅读</text>
							<text class="font24">{{$u.timeFormat(item.createtime || '', 'yyyy.mm.dd')}}</text>
						</view>

					</view>

					<view>
						<image class=" br10 overH" style="width:202rpx; height:100%;" :src="item.img" mode=""></image>
					</view>
				</view>
			</view>

		</view>
		<u-loadmore class="" :height="100" font-size="28" :status="status" :loading-text="loadingText"
			:loadmore-text="loadmoreText" :nomore-text="nomoreText" />
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
				hotList: [],
				list: [],
				tabCurrent: 0,
				limit: 8,
				page: 1,
				cate_id: 0,
				NewCateList: [],
				skeleton: true,
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了'
			}
		},
		watch: {
			'cate_id': {
				handler() {
					this.status = 'loading'
					this.getNewsList()
				}
			}
		},
		async created() {
			await this.getNewCate()
			await this.gitData()
			this.skeleton = false
		},
		methods: {
			getNewsList() {
				this.status = 'loading'
				this.list = []
				this.page = 1;
				this.$http({
					url: '/Data/newsList',
					data: {
						page: this.page,
						limit: this.limit,
						cate_id: this.cate_id
					}
				}).then(res => {
					if (res.data.list.length < this.limit) {
						this.status = "nomore"
					} else {
						this.status = "loadmore"
					}
					this.list = res.data.list
				})
			},
			loadMore() {
				if (this.status == 'nomore') {
					return
				}
				this.page++
				this.$http({
					url: '/Data/newsList',
					data: {
						page: this.page,
						limit: this.limit,
						cate_id: this.cate_id
					}
				}).then(res => {
					if (res.data.list.length < this.limit) {
						this.status = "nomore"
					} else {
						this.status = "loadmore"
					}
					this.list = this.list.concat(res.data.list)
				})
			},

			gitData() {
				return new Promise(resolve => {
					this.status = 'loading'
					this.list = []
					this.$http({
						url: '/Data/newsList',
						data: {
							cate_id: this.NewCateList[0].id
						}
					}).then(res => {
						this.hotList = res.data.hots
						if (res.data.list.length < this.limit) {
							this.status = "nomore"
						} else {
							this.status = "loadmore"
						}
						this.list = res.data.list
						resolve('aaaaaaa')
					})
				})

			},
			getNewCate() {
				return new Promise(resolve => {
					this.$http({
						url: '/Data/news_cate',
						data: {
							page: this.page,
							limit: this.limit,
							cate_id: this.cate_id
						}
					}).then(res => {
						this.NewCateList = res.data
						resolve('sssss')
					})
				})
			},
			tabclick(current) {
				this.cate_id = current.id
			},
			listItemClick(item) {
				uni.navigateTo({
					url: '/pages/newDetail/newDetail?id=' + item.id
				})
			}
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