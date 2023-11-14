<template>
	<view class="relactive border-box">
		<!-- <Skeleton v-if="true"></Skeleton> -->
		<view v-if="true" class="overH  flex flex-column page ">
			<!-- 导航栏 -->
			<uni-nav-bar status-bar :height="44" style="position: fixed;z-index: 10;" :leftWidth="0" :border="false" color="#fff"
				title="排行" fixed="true" backgroundColor="rgba(0,0,0,0)"></uni-nav-bar>
			<image class="absolute" style="width: 100%; height: 568rpx; z-index:0;"
				:src="rankType == 1 ?'/static/rank/red.png' : '/static/rank/black.png'" mode=""></image>
			<!-- 导航栏 -->




			<view class="absolute w100 overH" style="width:750rpx; z-index:1;">

				<view class="br68 ml36 border-box bgWhite  flex flex-between align-center "
					style=" background-color: rgba(255,255,255,0.3); width: 324rpx;   margin-top:340rpx;">
					<view
						:class="['flex','border-box','align-center','flex-center', 'br68',rankType==1 ?'active1':'colf']"
						style="width:160rpx;height:56rpx;"
						@click="actived(1)">
						<text>红榜</text>
					</view>
					<view
						:class="['flex', 'border-box','align-center','flex-center', 'br68',rankType==2 ?'active2':'colf']"
						style="width:160rpx;height:56rpx;"
						@click="actived(2)">
						<text>黑榜</text>
					</view>
				</view>
				
				
				
				
				
				<view class="bgWhite mt50 flex  flex-column align-center" style=" border-radius: 32rpx 32rpx 0 0;">
					<view class=" w100 flex   flex-center  bgWhite"
						style="height: 110rpx; border-radius: 32rpx 32rpx 0 0;">
						<view class="flex flex-around  mt32 font28"
							style="width: 706rpx;border-bottom: 1px solid #E8E8E8;">
							<view :class="[rankStatus==1 ? 'activeStatus':'']" @click="activedStatus(1)">
								月度
							</view>
							<view :class="[rankStatus==2 ? 'activeStatus':'']" @click="activedStatus(2)">
								季度
							</view>
							<view :class="[rankStatus==3 ? 'activeStatus':'']" @click="activedStatus(3)">
								年度
							</view>
						</view>
					</view>

					<view class="px26  bgWhite border-box align-center flex flex-between w100 col5"
						style="height:80rpx;">
						<view class="py16 flex align-center">
							<text class="" style="width: 80rpx;">排名</text>
							<text class="ml100 ">主体名称</text>
						</view>
						<text>评分</text>
					</view>


						<view class="w100 py28"
						:style="{borderBottom: index == list.length-1 ?'none' :  '1rpx solid #E9E9E9'}"
						v-for="(item) in list" :key="item.id">
						<view class="flex  flex-between align-center border-box"
							style="padding-left: 16rpx;padding-right: 36rpx;">
							<view class="flex align-center">

								<image class="" v-if="Number(item.ranking) <= imgList.length - 1"
									style="width: 80rpx;height: 80rpx;" :src="imgList[Number(item.ranking)-1]" mode="">
								</image>
								<view class="flex  flex-center align-center " style="width: 80rpx;height: 80rpx;"
									v-else>
									<text>{{item.ranking}}</text>
								</view>
								<text class=" col2 ml110 ">{{item.main_name}}</text>

							</view>
							<view class="font32 col2">
								<text>{{item.average}}</text>
							</view>
						</view>
					</view>

				</view>
				<view class="my26">
					<u-loadmore class="mt50" iconSize="28" :height="100" font-size="28" :status="status" :loading-text="loadingText"
						:loadmore-text="loadmoreText" :nomore-text="nomoreText" />
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
				rankType: 1, //红榜1，黑榜2
				rankStatus: 1, //月度1，季度2，年度3
				imgList: [
					'/static/rank/No1.png',
					'/static/rank/No2.png',
					'/static/rank/No3.png'
				],
				list: [],
				limit: 8,
				page: 1,
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了'
			};
		},
		created() {
			this.getData()
		},
		watch: {
			'rankType': {
				handler() {
					this.getData()
				}
			},
			'rankStatus': {
				handler() {
					this.getData()
				}
			}
		},
		methods: {
			actived(rankType) {
				this.rankType = rankType
			},
			loadMore() {
				if (this.status == 'nomore') {
					return
				}
				this.page++
				this.$http({
					url: '/Data/ranking',
					data: {
						type: this.rankType,
						time: this.rankStatus,
						page: this.page,
						limit: this.limit
					}
				}).then(res => {
					if (res.data.list.length < this.limit) {
						this.status = 'nomore'
					} else {
						this.status = 'loadmore'
					}
					this.list = this.list.push(...res.data.list)
				})
			},
			getData() {
				this.$http({
					url: '/Data/ranking',
					data: {
						type: this.rankType,
						time: this.rankStatus,
						page: this.page,
						limit: this.limit
					}
				}).then(res => {
					if (res.data.list.length < this.limit) {
						this.status = 'nomore'
					} else {
						this.status = 'loadmore'
					}
					this.list = res.data.list
				})
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
</style>