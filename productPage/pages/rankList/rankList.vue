<template>
	<view class="page">
		<!-- 导航栏 -->
		<uni-nav-bar status-bar style="position: fixed;z-index: 10;" :leftWidth="0" :border="false" color="#fff"
			title="排行" fixed="true" backgroundColor="rgba(0,0,0,0)"></uni-nav-bar>
		<!-- 导航栏 -->

		<view class="relactive" style="height: 568rpx;">
			<image style="width: 100%;height: 568rpx;"
				:src="rankType == 1 ?'../../static/rank/red.png' : '../../static/rank/black.png'" mode=""></image>
			<view class="br68 bgWhite flex flex-around align-center absolute"
				style=" background-color: rgba(255,255,255,0.3); z-index: 5;top: 352rpx;left: 36rpx;">
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
			<view class="absolute w100 flex flex-center bgWhite"
				style="height: 110rpx;bottom: 0; border-radius: 32rpx 32rpx 0 0;">
				<view class="flex flex-around mb26 mt32 font28" style="width: 706rpx;border-bottom: 1px solid #E8E8E8;">
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
		</view>
		<view class="bgWhite flex flex-column align-center" style="width: 750rpx;">
			<view class="px26 border-box flex flex-between w100" style="height: 34rpx;">
				<view class="">
					<text>排名</text>
					<text class="ml100">主体名称</text>
				</view>
				<text>评分</text>
			</view>
			<view class="w100" v-for="(item,index) in 7" :key="index">
				<view class="flex flex-between align-center border-box"
					style="height: 142rpx;padding-left: 16rpx;padding-right: 36rpx;">
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
				<view class="mx24" style="border: 1px solid #E9E9E9;"></view>
			</view>
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
					'../../static/rank/No1.png',
					'../../static/rank/No2.png',
					'../../static/rank/No3.png'
				]
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
	/deep/ .data-v-7a12ddc6 .uni-nav-bar-text {
		/* #ifdef APP-PLUS */
		font-size: 36rpx !important;
		/* #endif */
		/* #ifndef APP-PLUS */
		font-size: 18px;
		/* #endif */
	}

	/deep/ .uni-navbar__header-container-inner {
		justify-content: left !important;
	}

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