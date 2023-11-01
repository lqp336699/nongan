<script>
	export default {
		onLaunch: function() {
			if(uni.getStorageSync('identity')){
				if(uni.getStorageSync('identity')==1){
					uni.redirectTo({
						url:"/productPage/pages/index/index"
					})
				}else if(uni.getStorageSync('identity')==0){
					uni.redirectTo({
						url:"/managePage/pages/index/index"
					})
				}
			}else{
				
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	@import url('asset/asset.css');
	@import url('asset/yzf.css');
	/deep/ .u-radio-group--row{
		justify-content: flex-end !important;
	}
	.bigRedio /deep/  .u-radio-group--row{
		margin-top: 20rpx;
		justify-content: flex-start !important;
	}
	/*每个页面公共css */
</style>
