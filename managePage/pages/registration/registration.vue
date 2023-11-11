<template>
	<view class="px70">
		<view class="mt110">
			<view class="inlineblock" style="height:36rpx; border-bottom:18rpx solid #ECFFF7; ">
				<text  class="font36 " style="color:#1F9A64;  line-height:48rpx; ">填写监督人员信息</text>
			</view>
		</view>
		
		
	
		<view class="br10 mt60 flex align-center" style="height:110rpx;border: 2rpx solid #ccc;box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(41,193,126,0.1);">
			<u-input class="" v-model="form.mobile" placeholder="请输入手机号" height="110rpx" :border="false" />
		</view>
		
		
		<view class="br10 mt24 flex align-center" style="height:110rpx;border: 2rpx solid #ccc;box-shadow: 0rpx 0rpx 6rpx 2rpx rgba(41,193,126,0.1);">
			<u-input class="" v-model="form.random" placeholder="请输入唯一码" height="110rpx" :border="false" />
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
					mobile:'',
					random:'',
					identity:'1'
				},
				formSubmit:false
			}
		},
		watch:{
			form:{
				handler(newVal){
					if(newVal.mobile!==''&&newVal.random!==""){
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
				this.$http({
					url:"/Data/auth",
					data:{
						...this.form
					}
				}).then(async res=>{
					if(res.code == 1){
						await this.$store.dispatch('identity/setIdentity',this.form.identity)
						
						setTimeout(()=>{
							uni.redirectTo({
								url: '/managePage/pages/index/index'
							})
						},1000)
						
					}
				})
				
				
				// uni.navigateTo({
				// 	url:'/managePage/pages/index/index'
				// })
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
