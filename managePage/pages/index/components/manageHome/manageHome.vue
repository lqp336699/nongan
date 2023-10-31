<template>
	<view class="page px22">
		
		<ProductCard v-for="item in 2" :key="item"></ProductCard>
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

<style>

</style>
