<template>
	
	
	
	<view >
		<Skeleton v-if="skeleton"></Skeleton>
		<view class="relactive overH" v-if="!skeleton">
			<uni-nav-bar statusBar title="生产主体" :height="44" :leftWidth="0" fixed></uni-nav-bar>
			<view class=" px22 py18"	:style="{position:'fixed', background:'#F7F7F7',right:0,left:0}">
				<u-search @search="search" @custom="search" :searchIconSize="44" :height="70"
					:action-style="{color:'#fff', padding:'18rpx 28rpx', borderRadius:'36rpx',background:'#1F9A64'}"
					placeholder="搜索" v-model="keyword"></u-search>
			</view>
			
			<view v-if="true" class="page overH mt100 ">
				<view class="px22 ">
					<product-item v-for="item in recodeList" :productData="item" :key="item.id"></product-item>
				</view>
				<view style="height:50rpx;"></view>
				<view>
					<u-loadmore fontSize="28" iconSize="28" :status="status" :loading-text="loadingText" :loadmore-text="loadmoreText"
						:nomore-text="nomoreText" />
				</view>
			
			</view>
		</view>
		
	</view>

</template>

<script>
	import ProductItem from '@/components/productItem.vue'
	import Skeleton from './skeleton/skeleton.vue'
	export default {
		components: {
			ProductItem,
			Skeleton
		},
		data() {
			return {
				status: 'loadmore',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '没有更多了',
				limit: 8,
				page: 1,
				keyword: '',
				recodeList: [],
				skeleton:true
			}
		},
		async created() {
			await this.getData()
			this.skeleton = false
		},
		computed:{
			searchTop:{
				get(){
					return 'calc(var(--window-bottom) + 44)'
				}
			}
		},
		methods: {
			search() {
				console.log("mmmmmmmmm")
				this.getData()
			},
			loadMore() {
				if (this.status == 'nomore') {
					return
				}


				this.page++

				this.$http({
					url: '/Data/patrol_index',
					data: {
						page: this.page,
						limit: this.limit,
						keyword: this.keyword
					}
				}).then(res => {

					if (res.data.list.length < this.limit) {
						this.status = 'nomore'
					} else {
						this.status = 'loadmore'
					}
					this.recodeList = res.data.list

				})
			},
			getData() {
				return new Promise(resolve=>{
					this.status = "loading"
					this.$http({
						url: '/Data/patrol_index',
						data: {
							page: this.page,
							limit: this.limit,
							keyword: this.keyword
						}
					}).then(res => {
					
						if (res.data.list.length < this.limit) {
							this.status = 'nomore'
						} else {
							this.status = 'loadmore'
						}
						this.recodeList = res.data.list
						resolve('ll')
					
					})
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">

</style>