<template>
	<view class="page px22 py16">
		<!-- <view class="" v-html="detailContent">
			
		</view> -->
		 <rich-text :selectable="true"  :nodes="detailContent"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newId:'',
				detailData:'',
				detailContent:''
			}
		},
		onLoad(options){
			this.newId = options.id || ''
			this.getNewDetail()
		},
		methods: {
			getNewDetail(){
				this.$http({
					url: '/Data/newDetail',
					data: {
						id: this.newId
					}
				}).then(res => {
					this.detailData=res.data
					this.detailContent = this.$replace_Rich_text(res.data.content)
				})
			}
		}
	}
</script>

<style>

</style>
