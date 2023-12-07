<template>
	<view class="page">
		<!-- 导航栏 -->
		<uni-nav-bar backgroundColor="#F7F7F7" color="#222" left-icon="left" leftWidth="50rpx" :border="false"
			@clickLeft="back" statusBar title="生产农事记录" fixed></uni-nav-bar>
		<!-- 导航栏 -->
		
		<!-- 生产农事记录 -->
		<view class="px22 flex flex-column flex-between border-box pb60">
			<form-list :formIsValidate.sync="formIsValidate" ref="formList" :formList="formList"
				@setFormData="setFormData"></form-list>
		
		
			<view @click="submit" class="flex mt94 flex-center align-center br83"
				:style="{background: formIsValidate ? '#1F9A64' : '#ECFFF7', height:'90rpx'}">
				<text :style="{color:formIsValidate ? '#fff' : '#1F9A64'}">提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	import formList from '@/components/formList.vue'
	export default {
		components: {
			formList
		},
		data() {
			return {
				formIsValidate: false,
				formList: [{ //地块名称
					type: 'input',
					placeholder: '请输入名称',
					rule: [{
						required: true,
						message: '请输入地块名称',
						trigger: ['change']
					}],
					value: '',
					prop: 'name',
					label: '地块名称'
				}, { //地块面积
					type: 'input',
					placeholder: '请输入',
					rule: [{
						required: true,
						message: '请输入地块面积',
						trigger: ['change']
					}],
					slot: 'm²',
					prop: 'dk_area',
					label: '地块面积'
				}, { //本季作物名称
					type: 'input',
					placeholder: '请输入作物名称',
					rule: [{
						required: true,
						message: '请输入作物名称',
						trigger: ['change']
					}],
					value: '',
					prop: 'nzu_name',
					label: '本季作物名称',
				}, { //前茬作物名称
					type: 'input',
					placeholder: '请输入作物名称',
					rule: [{
						required: true,
						message: '请输入作物名称',
						trigger: ['change']
					}],
					value: '',
					prop: 'qc_name',
					label: '前茬作物名称',
				}, { //日期
					type: 'date',
					placeholder: '请选择',
					rule: [{
						required: true,
						message: '请选择日期',
						trigger: ['change']
					}],
					value: '',
					prop: 'time',
					label: '日期',
					class: "mt30"
				}, {
					type: 'textarea',
					placeholder: "请输入活动内容",
					labelWidth: "300",
					height: "300",
					value: '',
					prop: 'n_activity',
					label: "农事活动内容"
				}],
				formData: {}
			}
		},
		onLoad(options) {
			console.log(options.id,'optionsoptionsoptionsoptions')
		},
		methods: {
			setFormData(formData) {
				this.formData = {
					...formData,
					type: 4
				}
			},
			submit() {
				this.$refs.formList.formValidate((res) => {
					if (res instanceof Array) {
						return
					}

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

				})
			},
			back(){
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