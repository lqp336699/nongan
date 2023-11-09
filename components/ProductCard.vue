<template>
	<view class="mt20" @click="ProductCardClick()">
		<view class="flex bgWhite py40 px24 border-box flex-column br16">
			<view class="flex  flex-between align-center" v-if="$store.state.identity.identity == 2">
				<view class="flex align-center bd">
					<text class="mr22">管理人员:</text>
					<view class="flex ">
						<!-- :src="productData.wxPhotoURL || ''"	 -->
						<image style="width:80rpx; height:80rpx;" class="br110 mr22 "  mode="">
						</image>

						<view class="flex flex-column flex-around">
							<text>{{productData.truename || ''}}</text>
							<text>{{productData.main_type_name || ''}}</text>
						</view>

					</view>
				</view>
				<image style="width:8rpx; height:16rpx;" src="@/static/form/left.png" mode=""></image>
			</view>


			<view class="flex mt28 flex-between align-center">
				<view class="flex ">
					<text class="mr22">主体名称:</text>
					<text class="font800">{{productData.main_name || ''}}</text>
				</view>
				<image style="width:8rpx; height:16rpx;" src="@/static/form/left.png" mode=""></image>
			</view>

			<view class="flex mt28 flex-between align-center">
				<view class="flex ">
					<text class="mr22">经营品种:</text>
					<text class="">{{productData.work_name}}</text>
				</view>
			</view>
			<view class="flex mt28 flex-between align-center">
				<view class="flex ">
					<text class="mr22">联系方式:</text>
					<text class="">{{productData.mobile}}</text>
				</view>
			</view>

			<view class="mt28 flex align-center">
				<view class="flex align-center mr20">
					<text class="font34" style="color:#29C17E;">{{productData.total_score}}</text>
					<text class="font28 ml10">分</text>
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
					<text>江西省遂宁市射洪市 {{productData.county_name}} {{productData.village_name}}</text>
				</view>
			</view>

			<view class="br10 mt32 px20 py30 flex flex-column " style="background-color: #F5FFFB;">
				<view class="flex align-center mb15">
					<text>{{productData.desc}}</text>
				</view>
				<view class=" flex flex-wrap">
					<view class=" flex flex-center align-center mt6 " v-for="(item,index) in getImg()" :key="item" style="width:33.3%">
						<image style="height:192rpx; width:192rpx;" class="br16" :src="item" mode="">
						</image>
					</view>
				</view>
			</view>

			<view class="flex mt26 align-center">
				<text class="mr22">巡查时间：</text>
				<text>{{$u.timeFormat(productData.create_time, 'yyyy.mm.dd hh:MM')}}</text>
			</view>

		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: "ProductCard",
		props: {
			productData:{
				type: Object,
				default:()=> {}
			}
		},
		data() {
			return {
				
			};
		},
		computed: {
		   ...mapState({
		        identity: state => state.identity.identity,
		      }),
		},
		created() {
			
		},
		methods: {
			ProductCardClick() {
				this.$emit('ProductCardClick')
				
			},
			getImg(){
				return this.productData.img.split(',')
			}
		}
	}
</script>

<style>

</style>