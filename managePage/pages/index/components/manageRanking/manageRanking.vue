<template>
	<view class="overH  flex flex-column ">
		<!-- 导航栏 -->
		<uni-nav-bar status-bar style="position: fixed;z-index: 10;" :leftWidth="0" :border="false" color="#fff"
			title="排行" fixed="true" backgroundColor="rgba(0,0,0,0)"></uni-nav-bar>
		<!-- 导航栏 -->


		<view class=" " style="height: 620rpx; position: fixed; width: 100%; z-index:1; ">
			<view class="relactive " style="height: 620rpx;">
				<image class="absolute" style="width: 100%;height: 568rpx; z-index:1;"
					:src="rankType == 1 ?'/static/rank/red.png' : '/static/rank/black.png'" mode=""></image>
					
					
				<view class="absolute w100" style="z-index: 2;">
					
					<view class="flex  w100">
						<view class="br68 ml36  bgWhite  flex flex-around align-center "
							style=" background-color: rgba(255,255,255,0.3);  width:326rpx; margin-top:350rpx;">
							<view
								:class="['flex','border-box','align-center','px54,py14','flex-center', 'br68',rankType==1 ?'active1':'colf']"
								@click="actived(1)">
								红榜
							</view>
							<view
								:class="['flex', 'border-box','align-center','px54,py14,flex-center', 'br68',rankType==2 ?'active2':'colf']"
								@click="actived(2)">
								黑榜
							</view>
						</view>
					</view>
					
					
					
					<view class=" w100 flex mt50 flex-center  bgWhite"
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
					
					<view class="px26 bgWhite border-box align-center flex flex-between w100 col5" style="height:80rpx;">
						<view class="py16 flex align-center">
							<text>排名</text>
							<text class="ml100">主体名称</text>
						</view>
						<text>评分</text>
					</view>
					
				</view>
				
				
			</view>

		</view>


		<view class="bgWhite flex  flex-column align-center flex1 mb30" style="width: 750rpx; margin-top:670rpx;">

			<view class="w100" :style="{borderBottom: index == list.length-1 ?'none' :  '1rpx solid #E9E9E9'}"
				v-for="(item,index) in list" :key="index">
				<view class="flex py30 flex-between align-center border-box"
					style="padding-left: 16rpx;padding-right: 36rpx;">
					<view class="flex align-center">
						<image v-if="index <= imgList.length - 1" style="width: 80rpx;height: 80rpx;"
							:src="imgList[index]" mode=""></image>
						<view class="flex flex-center align-center" style="width: 80rpx;height: 80rpx;" v-else>
							<text>{{index+1}}</text>
						</view>
						<text class="ml50 col2">射洪大榆镇凤姐蜂蜜养殖场</text>
					</view>
					<view class="font32 col2">
						<text>98</text>
					</view>
				</view>
			</view>


			<u-loadmore class="mt20" :height="100" font-size="28" :status="status" :loading-text="loadingText"
				:loadmore-text="loadmoreText" :nomore-text="nomoreText" />
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				rankType: 1, //红榜1，黑榜2
				rankStatus: 1, //月度1，季度2，年度3
				imgList: [
					'/static/rank/No1.png',
					'/static/rank/No2.png',
					'/static/rank/No3.png'
				],
				list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
				limit: 8,
				page: 1,
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了'
			};
		},
		methods: {
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
</style>