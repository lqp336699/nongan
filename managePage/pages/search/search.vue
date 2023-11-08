<template>
	<view class="page">
		<u-search searchIconSize="44" @change="search" actionText="取消" v-model="form.keyword" @custom="cancle"
			inputAlign="center" height="70" :clearabled="true"></u-search>

		<view class="mt20 px22">
			<view class="flex align-center br15 bgWhite px22 mt10" style="height:120rpx;" @click="selectName(item)"
				v-for="item in list" :key="item.id">
				<text class="mr10">主体名称：</text>
				<text>{{item.main_name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					keyword: '',
					county_id: '',
					village_id: ''
				},
				list: []
			}
		},
		onLoad(options) {
			if (options && options.address) {
				let arr = options.address.split(',')
				if (arr.length > 0) {
					if (arr[0]) {
						this.form.county_id = arr[0]
					}

					if (arr[1]) {
						this.form.village_id = arr[1]
					}
				}
			}


			this.getName()

		},
		methods: {

			getName() {
				this.$http({
					url: "/Data/user_product",
					data: this.form,
				}).then(res => {
					this.list = res.data
				})
			},
			search() {
				this.$u.debounce(this.getName, 500)
			},
			cancle() {
				console.log("点击了取消")
				uni.navigateBack()
			},
			selectName(active) {

				let pages = getCurrentPages()


				let prevPage = pages[pages.length - 2]

				// 3. 给上一页面实例绑定getValue()方法和参数（注意是$vm）
				prevPage.$vm.getList(active)
				uni.navigateBack({
					delta: 1 // 返回的页面数
				})
			}
		}
	}
</script>

<style>

</style>