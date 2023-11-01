<template>
	<view class="page px22 flex flex-column flex-between border-box pb60">
		<form-list ref="formList" :formList="formList" @setFormData="setFormData"></form-list>


		<view @click="submit" class="flex mt94 flex-center align-center br83" style="background: #ECFFF7; height:90rpx;">
			<text style="color:#1F9A64">提交</text>
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
				formList: [{ //日期
					type: 'date',
					placeholder: '请选择',
					value: '',
					prop: 'data',
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
					prop: 'manureName',
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
					prop: 'chengfen',
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
					prop: 'register',
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
					prop: 'unitName',
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
					prop: 'packSize',
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
					prop: 'buyNum',
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
					prop: 'outNum',
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
					prop: 'stockNum',
					label: '库存数量'
				}, ]

			};
		},
		methods: {
			setFormData(formData) {
				console.log(formData);
				this.formData = formData
			},
			submit() {
				this.$refs.formList.formValidate((res) => {
					if (res instanceof Array) {
						return
					}

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