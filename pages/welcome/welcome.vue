<template>
	<view class="page  flex flex-center align-center">
		<u-loading-page  fontSize="38" iconSize ="56" :loading="true"></u-loading-page>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			// this.$store.dispatch('identity/changeIdentity')
			
			setTimeout(()=>{
				uni.redirectTo({
					url:'/pages/identity/identity'
				})
			},1000)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
