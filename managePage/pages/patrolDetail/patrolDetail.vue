<template>

	<view class=" ">

		<Skeleton v-if="skeleton"></Skeleton>

		<view v-if="!skeleton" class="page relactive">
			<uni-nav-bar backgroundColor="#3BC688" color="#fff" statusBar title="巡查详情" :leftWidth="20" left-icon="left"
				@clickLeft="back" fixed></uni-nav-bar>

			<view class="w100" style="height:710rpx;position: fixed;top: 0;">
				<image style="height:710rpx;" class="w100" src="/static/index/homeBg.png"></image>
			</view>



			<view class="relactive mt40 px24 border-box">
				<view class="colf">
					<view class="">
						<text class="font44">{{productData.total_score || 0}}</text>分
					</view>
					<view class="pt20 pdb30 ">
						<text>巡查时间：{{$u.timeFormat(productData.create_time, 'yyyy.mm.dd hh:MM')}}</text>
					</view>
				</view>


				<view class="py40 px30 border-box flex flex-column flex-between bgWhite br16 mb22">



					<view class="flex  ">
						<view class="flex align-center">
							<text class="mr22 font28">主体名称:</text>
							<text class="font32 font800">{{productData.main_name}}</text>
						</view>
					</view>

					<view class="flex mt28  ">
						<view class="flex align-center">
							<text class="mr22">经营品种:</text>
							<text class="">{{productData.breed}}</text>
						</view>
					</view>
					<view class="flex mt28  ">
						<view class="flex align-center">
							<text class="mr22">联系方式:</text>
							<text class="">{{productData.contacts}}  {{productData.mobile}}</text>
						</view>
					</view>

					<view class="mt28 flex align-center">

						<view class="mr22">
							<view class="px8 py4 border-box br4" style="background-color: #E6F7FF;">
								<text class="font24" style="color:#1590E2;">{{productData.main_type_name}}</text>
							</view>
						</view>
					<!-- 	<view class="mr22">
							<view class="px8 py4 border-box br4" style="background-color: #E6FFF4;">
								<text class="font24" style="color:#1F9A64;">养殖业</text>
							</view>
						</view>
						<view class="mr22">
							<view class="px8 py4 border-box br4" style="background-color: #FFF0E6;">
								<text class="font24" style="color:#EE7B2E;">家庭农场</text>
							</view>
						</view> -->


					</view>

					<view class="flex align-center mt30">
						<image style="width:16rpx; height:23rpx;" class="mr14" src="/static/form/address.png" mode="">
						</image>
						<view class="flex align-center">
							<text>江西省遂宁市射洪市 {{productData.county_name}}  {{ productData.village_name}}</text>
						</view>
					</view>
				</view>


				<view class="br10 px24 py36 border-box" v-if="getImg()[0]" style="background: #F5FFFB;">
					<view class="mb20 ml6">
						<text>{{productData.desc}}</text>
					</view>
					<view class="flex flex-wrap">
						<view class=" flex flex-center align-center mt6 " v-for="(item,index) in getImg()" :key="item" style="width:33.3%">
							<image style="height:192rpx; width:192rpx;" class="br16" :src="item" mode="">
							</image>
						</view>
					</view>
				</view>

				<!-- <view class="br16 px30 border-box bgWhite flex flex-column flex-between">
					<view class="flex flex-between align-center py30" v-for="(item,index) in 3" :key="index">
						<text>合格证开具主体</text>
						<view class="" style="color: #1F9A64;">
							+
							<text>20分</text>
						</view>
					</view>
				</view> -->

				<view class="mt20 px30 py40 border-box bgWhite flex flex-column flex-between ">
					<view class="font32 col2 fontw700">
						<text>检查内容</text>
					</view>
					<view class="w100 mt40 mb10" style="border: 1px dashed #D9D9D9;"></view>

					<view class="flex flex-between align-center py30  border-box" v-for="(item,index) in productData.patrol_subject"
						:key="item.id">
						<text style="width: 500rpx;">{{item.title}}</text>
						<view class="" style="color: red;">
							-
							<text>{{item.score}}分</text>
						</view>
					</view>

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
				productData: {},
				id: '',
				skeleton:true
			};
		},
		async onLoad(options) {
			this.id = options.id || ''
			await this.getData()
			this.skeleton=false
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			 getData() {
				return new Promise(resolve=>{
					this.$http({
						url: '/Data/patrol_detail',
						data: {
							id: this.id
						},
					}).then(res => {
						this.productData = res.data
						resolve("nnnn")
					})
				})
				
			},
			getImg(){
				console.log(this.productData.img.split(',')[0],"ggggggggg")
				return this.productData.img.split(',')
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