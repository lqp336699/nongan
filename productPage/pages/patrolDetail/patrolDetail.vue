<template>
	<view class="page relactive">
		<uni-nav-bar backgroundColor="#3BC688" color="#fff" statusBar title="巡查详情" :leftWidth="20" left-icon="left" @clickLeft="back"
			fixed></uni-nav-bar>

		<view class="w100" style="height:710rpx;position: fixed;top: 0;">
			<image style="height:710rpx;" class="w100" src="/static/index/homeBg.png"></image>
		</view>




		<view class="relactive mt40 px24 border-box">
			<view class="colf">
				<view class="">
					<text class="font44">98</text>分
				</view>
				<view class="pt20 pdb30 ">
					<text>巡查时间：2023.10.20 09:30</text>
				</view>
			</view>


			<view class="py40 px30 border-box flex flex-column flex-between bgWhite br16 mb22" >



				<view class="flex flex-between align-center">
					<view class="flex font32">
						<text class="mr22">主体名称:</text>
						<text class="font800">射洪大榆镇凤姐蜂蜜养殖场</text>
					</view>
				</view>

				<view class="flex mt28 flex-between align-center">
					<view class="flex ">
						<text class="mr22">经营品种:</text>
						<text class="">蜂蜜180箱-4月至8月</text>
					</view>
				</view>
				<view class="flex mt28 flex-between align-center">
					<view class="flex ">
						<text class="mr22">联系方式:</text>
						<text class="">胥凤琼 13320649879</text>
					</view>
				</view>

				<view class="mt28 flex align-center">

					<view class="mr22">
						<view class="px8 py4 border-box br4" style="background-color: #E6F7FF;">
							<text class="font24" style="color:#1590E2;">养殖大户</text>
						</view>
					</view>
					<view class="mr22">
						<view class="px8 py4 border-box br4" style="background-color: #E6FFF4;">
							<text class="font24" style="color:#1F9A64;">养殖业</text>
						</view>
					</view>
					<view class="mr22">
						<view class="px8 py4 border-box br4" style="background-color: #FFF0E6;">
							<text class="font24" style="color:#EE7B2E;">家庭农场</text>
						</view>
					</view>


				</view>

				<view class="flex align-center mt30">
					<image style="width:16rpx; height:23rpx;" class="mr14" src="/static/form/left.png" mode="">
					</image>
					<view class="flex align-center">
						<text>江西省遂宁市射洪市 大榆镇 新井村三社</text>
					</view>
				</view>
			</view>


			<view class="br10 px24 py36 border-box" style="background: #F5FFFB;">
				<view class="mb20 ml6">
					<text>这个养殖场占地面积大，养殖规范，产的蜂蜜也甜</text>
				</view>
				<view class="flex flex-wrap">
					<view class=" flex flex-center align-center" v-for="item in 5" :key="item" style="margin: 6rpx;">
						<image style="height:206rpx; width:206rpx;" class="br16" src="/static/logo.png" mode=""></image>
					</view>
				</view>
			</view>

			<view class="br16 px30 border-box bgWhite flex flex-column flex-between">
				<view class="flex flex-between align-center py30" v-for="(item,index) in 3" :key="index">
					<text>合格证开具主体</text>
					<view class="" style="color: #1F9A64;">
						+
						<text>20分</text>
					</view>
				</view>
			</view>

			<view class="mt20 px30 py40 border-box bgWhite flex flex-column flex-between ">
				<view class="font32 col2 fontw700">
					<text>检查内容</text>
				</view>
				<view class="w100 mt40 mb10" style="border: 1px dashed #D9D9D9;"></view>

				<view class="flex flex-between align-center py30  border-box" v-for="(item,index) in 4" :key="index">
					<text>使用国家明令禁止的农药、鱼药、兽药等</text>
					<view class="" style="color: #1F9A64;">
						+
						<text>20分</text>
					</view>
				</view>

			</view>


		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	/deep/ .uni-nav-bar-text {
		font-size: 36rpx !important;
	}

	/deep/ .uni-navbar__header-container-inner {
		justify-content: left !important;
	}
</style>