<template>
	<!-- 肥料购买及出入库记录 -->
	<view class="page px22 flex flex-column flex-between border-box pb60">
		<form-list :formIsValidate.sync="formIsValidate" ref="formList" :formList="formList"
			@setFormData="setFormData"></form-list>


		<view @click="submit" class="flex mt94 flex-center align-center br83"
			:style="{background: formIsValidate ? '#1F9A64' : '#ECFFF7', height:'90rpx'}">
			<text :style="{color:formIsValidate ? '#fff' : '#1F9A64'}">提交</text>
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
				formList: [{ //日期
					type: 'date',
					placeholder: '请选择',
					value: '',
					prop: 'time',
					label: '日期',
				}, { //肥料名称
					type: 'input',
					placeholder: '请输入名称',
					rule: [{
						required: true,
						message: '请输入肥料名称',
						trigger: ['change']
					}],
					value: '',
					prop: 'name',
					label: '肥料名称'
				}, { //有效成分
					type: 'input',
					placeholder: '请输入成分名称',
					rule: [{
						required: true,
						message: '请输入成分名称',
						trigger: ['change']
					}],
					value: '',
					prop: 'component',
					label: '有效成分'
				}, { //登记证号
					type: 'input',
					placeholder: '请输入证号',
					rule: [{
						required: true,
						message: '请输入证号',
						trigger: ['change']
					}],
					value: '',
					prop: 'no',
					label: '登记证号'
				}, { //销售单位
					type: 'input',
					placeholder: '请输入单位名称',
					rule: [{
						required: true,
						message: '请输入单位名称',
						trigger: ['change']
					}],
					value: '',
					prop: 'work',
					label: '销售单位'
				}, { //包装规格
					type: 'input',
					placeholder: '请输入规格',
					rule: [{
						required: true,
						message: '请输入规格',
						trigger: ['change']
					}],
					value: '',
					prop: 'spec',
					label: '包装规格'
				}, { //购买数量
					type: 'input',
					placeholder: '请输入数量',
					rule: [{
						required: true,
						message: '请输入数量',
						trigger: ['change']
					}],
					value: '',
					prop: 'buy_num',
					label: '购买数量'
				}, { //出库数量
					type: 'input',
					placeholder: '请输入数量',
					rule: [{
						required: true,
						message: '请输入数量',
						trigger: ['change']
					}],
					value: '',
					prop: 'out_num',
					label: '出库数量'
				}, { //库存数量
					type: 'input',
					placeholder: '请输入数量',
					rule: [{
						required: true,
						message: '请输入数量',
						trigger: ['change']
					}],
					value: '',
					prop: 'stock',
					label: '库存数量'
				}, ]

			};
		},
		methods: {
			setFormData(formData) {
				console.log(formData);
				this.formData = {
					...formData,
					type: 1
				}
			},
			submit() {
				this.$refs.formList.formValidate((res) => {
					if (res instanceof Array) {
						return
					}
					
					this.$http({
						url: '/Data/add_stock_log',
						data: this.formData,
						loading: true
					}).then(response => {
						uni.showToast({
							title: "添加成功",
							icon:"success",
							mask:true
						})
					})

				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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