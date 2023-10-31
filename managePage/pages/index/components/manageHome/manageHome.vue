<template>
	<view class="page ">
	
		<uni-nav-bar backgroundColor="#3BC688" color="#fff" statusBar title="首页" fixed ></uni-nav-bar>
		
		<view class="px22">
			<ProductCard v-for="item in 2" :key="item" ></ProductCard>
		</view>
	</view>
</template>

<script>
	import ProductCard from '@/components/ProductCard.vue'
	export default {
		components:{
			ProductCard
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scopd lang="scss">

</style>
