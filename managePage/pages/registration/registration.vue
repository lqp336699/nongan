<template>
	<view class="px70">
		<view class="mt110">
			<view class="inlineblock" style="height:36rpx; border-bottom:18rpx solid #ECFFF7; ">
				<text  class="font36 " style="color:#1F9A64;  line-height:48rpx; ">填写监督人员信息</text>
			</view>
		</view>
		
		<view class=" mt60 flex align-center" style="height:110rpx;box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(41,193,126,0.1);">
			<u-input class="" v-model="form.moble" placeholder="请输入手机号" height="110rpx" :border="false" />
		</view>
		
		
		<view class=" mt24 flex align-center" style="height:110rpx;box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(41,193,126,0.1);">
			<u-input class="" v-model="form.aaa" placeholder="请输入唯一码" height="110rpx" :border="false" />
		</view>
		
		<view @click="submitIdentity" :class="['flex, mt94, flex-center, align-center, br10', formSubmit ?  'submit' : '']" style="background-color: #ECFFF7; height:110rpx;border:0; box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(41,193,126,0.1);">
			<text :style="{color:formSubmit ?  '#fff' : '#1F9A64' }">提交</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					moble:'',
					aaa:''
				},
				formSubmit:false
			}
		},
		watch:{
			form:{
				handler(newVal,oldVal){
					if(newVal.moble!==''&&newVal.aaa!==""){
						this.formSubmit = true
					}else{
						this.formSubmit = false
					}
				},
				deep:true
			}
		},
		methods: {
			submitIdentity(){
				uni.navigateTo({
					url:'/managePage/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.submit{
		background: #1F9A64 !important;
		box-shadow: 0 !important;
	}
</style>
