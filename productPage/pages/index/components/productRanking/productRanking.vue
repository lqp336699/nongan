<template>
	<view class="">
		<Skeleton v-if="skeleton"></Skeleton>
		<view v-if="!skeleton" class="overH  flex  flex-column page">
			<!-- 导航栏 -->
			<uni-nav-bar status-bar style="position: fixed;z-index: 10;" :leftWidth="0" :border="false" color="#fff"
				title="排行" fixed="true" backgroundColor="rgba(0,0,0,0)"></uni-nav-bar>
			<!-- 导航栏 -->


			<view class=" " style="height: 620rpx; position: fixed; width: 100%; z-index:1; ">
				<view class="relactive " style="height: 620rpx;">
					<image class="absolute" style="width: 100%; height: 568rpx; z-index:1;"
						:src="rankType == 1 ?'/static/rank/red.png' : '/static/rank/black.png'" mode=""></image>


					<view class="absolute w100" style="z-index: 2;">

						<view class="flex  w100">
							<view class="br68 ml36 border-box bgWhite  flex flex-between align-center "
								style=" background-color: rgba(255,255,255,0.3); margin-top:340rpx;">
								<view
									:class="['flex','border-box','align-center','px54,py14','flex-center', 'br68',rankType==1 ?'active1':'colf']"
									@click="actived(1)">
									<text>红榜</text>
								</view>
								<view
									:class="['flex', 'border-box','align-center','px54,py14,flex-center', 'br68',rankType==2 ?'active2':'colf']"
									@click="actived(2)">
									<text>黑榜</text>
								</view>
							</view>
						</view>



						<view class=" w100 flex mt50 flex-center  bgWhite"
							style="height: 110rpx; border-radius: 32rpx 32rpx 0 0;">
							<view class="flex flex-center  font28"
								style="width: 706rpx;border-bottom: 1px solid #E8E8E8;">
								<view class="flex flex-center align-end " style="width: 33%;" @click="activedStatus(1)">
									<text :class="['pb16',rankStatus==1 ? 'activeStatus':'']">月度</text>
								</view>
								<view class="flex flex-center align-end " style="width: 33%;" @click="activedStatus(2)">
									<text :class="['pb16',rankStatus==2 ? 'activeStatus':'']">季度</text>
								</view>
								<view class="flex flex-center align-end " style="width: 33%;" @click="activedStatus(3)">
									<text :class="['pb16',rankStatus==3 ? 'activeStatus':'']">年度</text>
								</view>
							</view>
						</view>

						<view class="px26 bgWhite border-box align-center flex flex-between w100 col5"
							style="height:80rpx;">
							<view class="py16 flex align-center">
								<text>排名</text>
								<text class="ml100">主体名称</text>
							</view>
							<text>评分</text>
						</view>

					</view>

				</view>

			</view>



			<view class="bgWhite  flex  flex-column align-center flex1 pb125" style="width: 750rpx; margin-top:620rpx;">

				<view class="w100" :style="{borderBottom: index == list.length-1 ?'none' :  '1rpx solid #E9E9E9'}"
					v-for="(item) in list" :key="item.id">
					<view class="flex py30 flex-between align-center border-box"
						style="padding-left: 16rpx;padding-right: 36rpx;">
						<view class="flex align-center">
							<image v-if="item.ranking <= imgList.length" style="width: 80rpx;height: 80rpx;"
								:src="imgList[item.ranking-1 ]" mode=""></image>
							<view class="flex flex-center align-center" style="width: 80rpx;height: 80rpx;" v-else>
								<text>{{item.ranking}}</text>
							</view>
							<text class="ml50 col2">{{item.main_name || ''}}</text>
						</view>
						<view class="font32 col2">
							<text>{{item.average}}</text>
						</view>
					</view>
				</view>
			</view>



			<!-- <u-loadmore class="" :height="100" font-size="28" :status="status" :loading-text="loadingText"
			:loadmore-text="loadmoreText" :nomore-text="nomoreText" /> -->

		</view>
		<view class="bgWhite flex flex-between align-center br58 userRanking" :style="{bottom: userBottom}">
			<text>{{user_ranking}}</text>
			<text>{{main_name}}</text>
			<text>{{user_average}}</text>
		</view>


	</view>

</template>

<script>
	import Skeleton from './skeleton/skeleton.vue'
	export default {
		components: {
			Skeleton
		},
		watch: {
			'rankType': {
				handler(newVal, oldVal) {
					this.init()
				}
			},
			'rankStatus': {
				handler(newVal, oldVal) {
					this.init()
				}
			}
		},
		data() {
			return {
				rankType: 1, //红榜1，黑榜2
				rankStatus: 1, //月度1，季度2，年度3
				imgList: [
					'/static/rank/No1.png',
					'/static/rank/No2.png',
					'/static/rank/No3.png'
				],
				list: [],
				user_average: 0,
				user_ranking: 0,
				skeleton: true,
				status: 'loadmore',
				main_name:'',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了',
				userBottom:0
			};
		},
		async created() {
			await this.init()
			this.skeleton = false
			this.getSafeArea()
		},
	
		methods: {

			/* 获取底部安全区域 */
			 getSafeArea() {
				uni.getSystemInfo({}).then(res=>{
					let bottom = res.screenHeight - res.safeArea.bottom
					this.userBottom = (55+ bottom)+'px'
				});
				
			},
			init() {
				return new Promise(resolve => {
					this.$http({
						url: '/Data/ranking',
						data: {
							type: this.rankType,
							time: this.rankStatus,
						}
					}).then(res => {
						let data = res.data.list
						data.sort((item1, item2) => {
							return item1.ranking - item2.ranking
						})
						this.list = data
						this.user_average = res.data.user_average
						this.user_ranking = res.data.user_ranking
						this.main_name = res.data.main_name
						resolve("bb")
					})
				})

			},
			actived(rankType) {
				this.rankType = rankType
			},
			activedStatus(rankStatus) {
				this.rankStatus = rankStatus
			}
		}
	}
</script>

<style lang="scss" scoped>
	.active1 {
		background-color: #fff;
		color: #FF424D;
	}

	.active2 {
		background-color: #fff;
		color: #2D2D2D;
	}

	.activeStatus {
		border-bottom: 1px solid #1F9A64;
		color: #1F9A64;
	}

	.userRanking {
		color: #1F9A64;
		position: fixed;
		left: 24rpx;
		right: 24rpx;
		border: 2rpx solid #29C17E;
		padding: 40rpx
	}
</style>