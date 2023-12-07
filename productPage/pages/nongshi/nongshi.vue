<template>
	<view class="page px22">
		<!-- 导航栏 -->
		<uni-nav-bar backgroundColor="#F7F7F7" color="#222" left-icon="left" leftWidth="50rpx" :border="false"
			@clickLeft="back" statusBar title="生产农事记录" fixed></uni-nav-bar>
		<!-- 导航栏 -->

		<u--form :model="formData" ref="form" :rules="rules" errorType="toast">

			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']" :key="name">
					<u-form-item class="flex1" :labelWidth="190" label="地块名称"  prop="name">
						<u-input border="false" input-align="right" placeholder-style="text-align:right" placeholder="请输入地块名称"
							v-model="formData.name" />
					</u-form-item>
				</view>
			</view>
			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']" :key="dk_area">
					<u-form-item class="flex1" :labelWidth="190" label="地块面积"  prop="dk_area">
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请输入地块面积" v-model="formData.dk_area" />
					</u-form-item>
				</view>
			</view>

			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']" :key="nzu_name">
					<u-form-item class="flex1" :labelWidth="190" label="本季作物名称" prop="nzu_name">
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请输入本季作物名称" v-model="formData.nzu_name" />
					</u-form-item>
				</view>
			</view>

			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']" :key="qc_name">
					<u-form-item class="flex1" :labelWidth="190" label="前茬作物名称"  prop="qc_name">
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请输入前茬作物名称" v-model="formData.qc_name" />
					</u-form-item>
				</view>
			</view>

			<view class="bgWhite  br20 mb10">
				<view @click="show = true" :class="['flex',  'flex-between,px30', 'align-center']" :key="time">
					<u-form-item class="flex1" :labelWidth="190" label="日期"  >
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请选择" disabled="" v-model="date" />
					</u-form-item>
					<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image>
				</view>
			</view>


			<view class="mt30 px30 bgWhite">

				<view class="flex  flex-between align-center">

					<u-form-item label-position="top" label="农事活动内容" label-width="200"  prop="n_activity">
						<u--textarea v-model="formData.n_activity" border="none" placeholder="请填写活动内容"
							height="100"></u--textarea>
					</u-form-item>
				</view>
			</view>


		</u--form>

		<view @click="submit" class="flex  mt94 flex-center align-center br83 btnBg"
			:style="{background: '#1F9A64', height:'90rpx'}">
			<text :style="{color: '#fff'}">提交</text>

		</view>

		<u-calendar :show="show" mode="single" @close="close" @confirm="confirm"></u-calendar>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				show: false,
				formData: {
					name:'',
					dk_area: '',
					nzu_name: '',
					type:4,
					qc_name: '',
					time: '',
					n_activity: ''
				},
				rules: {
					name: [{
						required: true,
						message: '请填写地块名称',
						trigger: ['blur', 'change']
					}],
					dk_area: [{
						required: true,
						message: '请填写地块面积',
						trigger: ['blur', 'change']
					}],
					nzu_name: [{
						required: true,
						message: '请填写本季作物名称',
						trigger: ['blur', 'change']
					}],
					qc_name: [{
						required: true,
						message: '请填写前茬作物名称',
						trigger: ['blur', 'change']
					}],
					time: [{
						required: true,
						message: '请选择时间',
						trigger: ['blur', 'change']
					}],
					
				}
			}
		},
		computed: {
			date: {
				get() {
						
					if(this.formData.time){
						return uni.$u.timeFormat(this.formData.time, 'yyyy-mm-dd');
					}else{
						return ''
					}
				},
				set(val) {
					this.formData.time = new Date(val).getTime()
				}
			}
		},
		onLoad(options) {
			if (options.id) {
				this.getFormData(options.id)
			}
		},
		methods: {
			getFormData(id) {
				this.$http({
					url: "/Data/log_detail",
					data: {
						id: id,
						log_type: 2
					},
					loading: true
				}).then(res => {
					for (let key in this.formData) {
						this.formData[key] = res.data[key]
					}

				})
			},
			confirm(e) {
				this.date = e[0]
				this.show = false
			},
			close() {
				this.show = false
			},
			submit() {
				this.$refs.form.validate().then(res => {
					console.log(res,"ppppp")
					this.$http({
						url: "/Data/add_product_log",
						data: this.formData,
						loading: true
					}).then(res => {
						uni.showToast({
							title: "添加成功",
							icon: "success",
							mask: true
						})
						setTimeout(() => {
							uni.navigateBack({})
						}, 1000)
					})
				}).catch(errors => {
					
				})
				// this.$refs.form.validate((res) => {
				// 	console.log(res,'朋友同意同意同意')
				

				// })
			},
			back() {
				uni.navigateBack({})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-navbar__header-container-inner {
		justify-content: left !important;
	}

	/deep/ .uni-nav-bar-text {
		font-size: 36rpx !important;
	}

	::v-deep .u-input {
		background-color: #fff !important;
	}

	::v-deep .u-form-item {
		flex: 1 !important;
	}

	::v-deep .u-form-item__body__left {
		height: 75rpx;
	}

	::v-deep .u-radio {
		margin-right: 22rpx;
	}
</style>