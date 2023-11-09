<template>
	<view class="">
		<!-- <Skeleton v-if="true"></Skeleton> -->
		
		<view v-if="true" class="page overH pb50">
			<uni-nav-bar statusBar title="生产主体" fixed></uni-nav-bar>
			<!-- <scroll-view scroll-y="true" class="pb60 border-box bd" bd> -->
			
			<view class="px22 mt20">
				<u-search @search="search" :searchIconSize="44" :height="64" :action-style="{color:'#fff', padding:'18rpx 28rpx', borderRadius:'36rpx',background:'#1F9A64'}" placeholder="搜索" v-model="keyword"></u-search>
			</view>
			<view class="px22 ">
				<!-- <view v-if="recodeList.length == 0" class="py100 flex flex-center align-center">
						<text>暂无数据</text>
					</view> -->
				<!-- <view v-if="recodeList.length > 0" class="pb40   border-box"> -->
				<product-item v-for="item in recodeList" :productData="item" :key="item.id"></product-item>
				<!-- </view> -->
			</view>
			<view style="height:50rpx;"></view>
			<view >
				<u-loadmore fontSize="28" :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
					:nomore-text="nomoreText" />
			</view>
		
			<!-- </scroll-view> -->
		</view>
	</view>
	
</template>

<script>
	
	
	
	import ProductItem from '@/components/productItem.vue'
	import Skeleton from './skeleton/skeleton.vue'
	export default {
		components: {
			ProductItem,Skeleton
		},
		data() {
			return {
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了',
				limit: 8,
				page: 1,
				keyword:'',
				recodeList: [],
			}
		},
		created() {
			this.getData()
		},
		
		methods: {
			search(){
				console.log("mmmmmmmmm")
				this.getData()
			},
			getMore(){
				if(this.status == 'nomore'){
					return 
				}
				
				
				this.page++
				
				this.$http({
					url: '/Data/patrol_index',
					data:{
						page: this.page,
						limit: this.limit,
						keyword:this.keyword
					}
				}).then(res => {
					
					if(res.data.list.length < this.limit){
						this.status = 'nomore'
					}else{
						this.status = 'loadmore'
					}
					this.recodeList = res.data.list
					
				})
			},
			getData() {
				this.status = "loading"
				this.$http({
					url: '/Data/patrol_index',
					data:{
						page: this.page,
						limit: this.limit
					}
				}).then(res => {
					
					if(res.data.list.length < this.limit){
						this.status = 'nomore'
					}else{
						this.status = 'loadmore'
					}
					this.recodeList =res.data.list
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">

</style>