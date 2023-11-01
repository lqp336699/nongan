<template>
	<view class="mt20" @click="ProductCardClick()">
		<view class="flex bgWhite py40 px24 border-box flex-column br16">
			<view class="flex  flex-between align-center">
				<view class="flex align-center ">
					<text class="mr22">管理人员:</text>
					<view class="flex ">
						<image style="width:80rpx; height:80rpx;" class="br110 mr22 " src="@/static/logo.png" mode="">
						</image>

						<view class="flex flex-column flex-around">
							<text>GJZ</text>
							<text>市级管理人员</text>
						</view>

					</view>
				</view>
				<image style="width:8rpx; height:16rpx;" src="@/static/form/left.png" mode=""></image>
			</view>


			<view class="flex mt28 flex-between align-center">
				<view class="flex ">
					<text class="mr22">主体名称:</text>
					<text class="font800">射洪大榆镇凤姐蜂蜜养殖场</text>
				</view>
				<image style="width:8rpx; height:16rpx;" src="@/static/form/left.png" mode=""></image>
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
					<text class="">蜂蜜180箱-4月至8月</text>
				</view>
			</view>

			<view class="mt28 flex align-center">
				<view class="flex align-center mr22">
					<text class="font34" style="color:#29C17E;">98</text>
					<text class="font28">分</text>
				</view>
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
				<!-- 	<view class="mr22">
					<view class="px8 py4 border-box br4" style="background-color: #E6F7FF;">
						<text class="font24" style="color:#1590E2;">养殖大户</text>
					</view>
				</view> -->


			</view>

			<view class="flex align-center mt30">
				<image style="width:15rpx; height:22rpx;" class="mr14" src="../static/form/left.png" mode=""></image>
				<view class="flex align-center">
					<text>江西省遂宁市射洪市 大榆镇 新井村三社</text>
				</view>
			</view>

			<view class="br10 mt32 px20 py30 flex flex-column " style="background-color: #F5FFFB;">
				<view class="flex align-center mb15">
					<text>这个养殖场占地面积大，养殖规范，产的蜂蜜也甜</text>
				</view>
				<view class=" flex flex-wrap">
					<view class=" flex flex-center align-center mt6 " v-for="item in 5" :key="item" style="width:33.3%">
						<image style="height:192rpx; width:192rpx;" class="br16" src="../static/logo.png" mode="">
						</image>
					</view>
				</view>
			</view>

			<view class="flex mt26 align-center">
				<text class="mr22">巡查时间：</text>
				<text>2023.10.20 09:30</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "ProductCard",
		data() {
			return {

			};
		},
		methods: {
			ProductCardClick() {
				console.log();
				uni.navigateTo({
					url: '/productPage/pages/patrolDetail/patrolDetail'
				})
			}
		}
	}
</script>

<style>

</style>