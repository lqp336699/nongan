<template>
	<view class="">
		<Skeleton v-if="skeleton"></Skeleton>
		<view v-if="!skeleton" class="px24 ">
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

			<view class="bgWhite  mt36 relactive" v-if="NewCateList.length>0">
				<u-tabs :list="NewCateList" :current="tabCurrent" :scrollable="true"
					:activeStyle="{ color: '#1F9A64', transform: 'scale(1.05)'  }"
					:inactiveStyle="{ color: '#222222', transform: 'scale(1)' }" lineColor="#1F9A64" @click="tabclick">
					<view class="flex flex-center align-center" slot="right" style="width: 72rpx;height: 84rpx;"
						@click="change">
						<image style="width: 20rpx;height: 11rpx;" :src="show ? '/static/product/close.png' : '/static/product/open.png' " mode=""></image>
					</view>
				</u-tabs>
				<modal :show='show'>
					<view class="flex flex-wrap px24 py30 border-box" >
						<view :class="['itemList',cate_id == item.id ? 'actived': 'default']" @click="activeChange(item.id,index)" v-for="(item,index) in NewCateList" :key="index">
							{{item.name}}
						</view>
					</view>
				</modal>
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
	<u-loadmore class="" :height="100" font-size="28" :status="status" :loading-text="loadingText"
			:loadmore-text="loadmoreText" :nomore-text="nomoreText" />
		</view>
		
	
	</view>
</template>

<script>
	import Modal from './modal.vue'
	import Skeleton from './skeleton/skeleton.vue'
	export default {
		components: {
			Skeleton,
			Modal
		},
		props:{
			show:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				// newsCate: [{
				// 	name: '待收货'
				// }, {
				// 	name: '待付款'
				// }, {
				// 	name: '待评价',
				// 	count: 5
				// }],
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
			await this.getData()
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
						cate_id: this.cate_id || ''
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
						cate_id: this.cate_id || ''
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

			getData() {
				return new Promise(resolve => {
					this.status = 'loading'
					let cate_id = ''
					if(this.NewCateList.length>0){
						cate_id=this.NewCateList[0].id
					}
					this.list = []
					this.$http({
						url: '/Data/newsList',
						data: {
							cate_id: cate_id
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
					}).catch(err=>{
						console.log(err,"pppppppppppp")
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
							cate_id: this.cate_id ||''
						}
					}).then(res => {
						this.NewCateList = res.data
						resolve("hhhhh")
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
			},
			change() {
				this.$emit('update:show',!this.show)
			},
			activeChange(item,index){
				this.tabCurrent = index
				this.cate_id = item
				this.change()
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

	/deep/ u-slide-down-enter-active {
		top: 700rpx !important;
	}
	
	.itemList{
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border-radius: 40rpx;
		font-size: 30rpx;
		padding: 20rpx 52rpx;
		margin-right: 14rpx;
		margin-bottom: 20rpx;
	}
	
	.actived{
		border: 2rpx solid #1F9A64;
	}
	.default{
		border: 2rpx solid #C7C7C7;
	}
</style>