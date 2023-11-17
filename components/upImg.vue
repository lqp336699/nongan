<template>
	<view>
		<view v-if="fileList.length==0" class="flex flex-center bds align-center " :style="{height:ImgStyle.boxHeight} ">
			<view class="flex flex-column align-center" @click="addImg">
				<image src="@/static/product/addImg.png" style="height:60rpx; width:66rpx;" mode="">
				</image>
				<text class="col8 font28 mt28">添加图片</text>
			</view>
		</view>


		<view class="  flex flex-wrap " v-if="fileList.length>0">
			<!-- index == 0 ? '' : 'ml20' -->
			<view :class="[]" style="position: relative;" v-for="(item,index) in fileList" :key="item.id+index">
			
				<image @click="removeImg(index)" class="" src="@/static/product/del.png"
					style=" width:50rpx; height:60rpx; position:absolute; right:0; top:0; z-index: 2;"></image>
				<image :src="item.url" mode="" style="width:216rpx; height:218rpx;"></image>
				
				<!-- <u-album :urls="urls2"></u-album> -->
			</view>
			<view :class="['bds',  'flex', 'flex-center', 'align-center']" @click="chooseImg"
				style="width:216rpx; height:218rpx;">
				<image @load="load"  src="@/static/product/addImg.png" style="height:60rpx; width:66rpx;" mode="">
				</image>
			</view>
		</view>
		<u-loading-page bgColor="rgba(0,0,0,0.5)" color="#fff" fontSize="30" iconSize ="40" :loading="loading" loadingText="正在上传图片"></u-loading-page>
	</view>
</template>

<script>
	export default {
		name: "upImg",
		props: {
			fileList: {
				type: Array,
				default: []
			},
			ImgStyle:{
				type: Object,
				default:()=>{
					return {
					boxHeight:'218rpx'
				}
				}
			}
		},
		data() {
			return {
				loading:false
			};
		},
		watch:{
			'fileList':{
				handler(newVal,oldVal){
					
				}
			}
		},
		methods: {
			chooseImg() {
				let that = this
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(chooseImageRes) {
						that.loading = true
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(JSON.stringify(chooseImageRes.tempFilePaths));
						chooseImageRes.tempFilePaths.forEach((item,index)=>{
							uni.uploadFile({
								url: 'https://nongan.app65.cn/api/ajax/upload',
								filePath: tempFilePaths[index],
								name: 'file',
								formData: {
									'file': tempFilePaths[index]
								},
								success: (uploadFileRes) => {
									console.log(uploadFileRes,"llllll")
									let file = JSON.parse(uploadFileRes.data).data.file
									file.url = "https://nongan.app65.cn" + file.url
									let arr = that.fileList.concat([file])
									that.$emit('update:fileList', arr)
									that.loading = false
								},
								error:(err)=>{
									console.log(err,"ooooooooooo")
								}
							});
						})
					}
				});
			},
			removeImg(index) {
				let arr = this.fileList.concat([])
				arr.splice(index, 1)
				this.$emit('update:fileList', arr)
			},
			

			addImg() {
				this.chooseImg()
			},
		}
	}
</script>

<style>

</style>