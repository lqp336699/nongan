<template>
	<view  class="mt20" @click="ProductCardClick">
		<view class="flex bgWhite  py40 px24 border-box flex-column br16">
			<view class="flex  flex-between align-center">
				<view class="flex align-center ">
					<text class="mr22">管理人员:</text>
					<view class="flex ">
						<!-- <image style="width:80rpx; height:80rpx;" class="br110 mr22 " src="@/static/logo.png" mode=""></image> -->
						
						<view class="flex flex-column flex-around">
							<text>{{productData.truename}}</text>
						</view>
						
					</view>
				</view>
				<image  style="width:8rpx; height:16rpx;" src="@/static/form/left.png" mode=""></image>
			</view>
			
			
			<view class="flex mt28 flex-between align-center">
				<view class="flex ">
					<text class="mr22">主体名称:</text> 
					<text class="font800">{{productData.main_name}}</text>
				</view>
				<!-- <image  style="width:8rpx; height:16rpx;" src="@/static/form/left.png" mode=""></image> -->
			</view>
			
			<view class="flex mt28 flex-between align-center">
				<view class="flex ">
					<text class="mr22">经营品种:</text> 
					<text class="">{{productData.breed}} </text>
				</view>
			</view>
			<view class="flex mt28 flex-between align-center">
				<view class="flex ">
					<text class="mr22">联系方式:</text> 
					<text class="">{{productData.phoneNumber}}</text>
				</view>
			</view>
			
			<view class="mt28 flex align-center">
				<view class="flex align-center mr22">
					<text class="font34" style="color:#29C17E;">{{productData.leave_score}}</text>
					<text class="font28">分</text>
				</view>
				<view class="mr22">
					<view class="px8 py4 border-box br4" style="background-color: #E6F7FF;">
						<text class="font24" style="color:#1590E2;">{{productData.main_type_name}}</text>
					</view>
				</view>
				
			</view>
			
			<view class="flex align-center mt30">
				<!-- <image style="width:15rpx; height:22rpx;" class="mr14" src="../static/form/left.png" mode=""></image> -->
				<image style="width:15rpx; height:22rpx;" class="mr14" src="../static/form/address.png" mode=""></image>
				<view class="flex align-center">
					<text>江西省遂宁市射洪市 {{productData.county_name}} </text>
					<text v-if="productData.village_name">{{productData.village_name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"ProductCard",
		props:{
			productData:{
				type:Object,
				default:{}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			ProductCardClick() {
				uni.navigateTo({
					url: '/managePage/pages/mainDetail/mainDetail?id='+this.productData.id
				})
			}
		}
	}
</script>

<style>

</style>