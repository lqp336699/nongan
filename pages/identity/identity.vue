<template>
	<view class="px70">
		<view class="mt110">
			<view class="inlineblock" style="height:36rpx; border-bottom:18rpx solid #ECFFF7; ">
				<text  class="font36 " style="color:#1F9A64;  line-height:48rpx; ">选择身份</text>
			</view>
		</view>
		
		<view @click="selectIdentity(1)" :class="['flex, mt60, flex-center, align-center, br10', identity ==1 ? 'identityActive' : '' ]" style="height:110rpx;border:0;border: 2rpx solid #ccc; box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(41,193,126,0.1);">
			<text>监督人员</text>
		</view>
		
		<view @click="selectIdentity(2)" :class="['flex, mt24, flex-center, align-center, br10', identity == 2 ? 'identityActive' : '' ]" style="height:110rpx;border:0;border: 2rpx solid #ccc; box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(41,193,126,0.1);">
			<text>生产主体</text>
		</view>
		
		<view @click="submitIdentity" :class="['flex, mt94, flex-center, align-center, br10', identity==-1 ? '' : 'submit']" style="background-color: #ECFFF7; height:110rpx;border:0; box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(41,193,126,0.1);">
			<text :style="{color:identity==-1 ?'#1F9A64' : '#fff'}">下一步</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				identity:-1,
				loading:true //等待查询身份跳转指定页面
			}
		},
		methods: {
			selectIdentity(identity){
				this.identity = identity
			},
			 submitIdentity(){
				if(this.identity == 1){
					// 管理人员
					uni.navigateTo({
						url:"/managePage/pages/registration/registration"
					})
				}else if(this.identity == 2){
					//生产主体
					uni.navigateTo({
						url:"/productPage/pages/registration/registration"
					})
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.identityActive{
		border: 2rpx solid #1F9A64  !important;
	}
	.submit{
		background: #1F9A64 !important;
		box-shadow: 0 !important;
	}
</style>
