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
					prop: 'abc',
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
					prop: 'zuowu',
					label: '本季作物名称',
				}, { //日期
					type: 'date',
					placeholder: '请选择',
					value: '',
					prop: 'data',
					label: '日期',
					class:"mt30"
				}, { //收获面积
					type: 'input',
					placeholder: '请输入',
					rule: [{
						required: true,
						message: '请输入收获面积',
						trigger: ['change']
					}],
					slot: 'm²',
					prop: 'area',
					label: '收获面积'
				}, { //销售数量
					type: 'input',
					placeholder: '请输入',
					rule: [{
						required: true,
						message: '请输入销售数量',
						trigger: ['change']
					}],
					slot: 'm²',
					prop: 'num',
					label: '销售数量'
				}, { //销售对象
					type: 'input',
					placeholder: '请输入作物名称',
					rule: [{
						required: true,
						message: '请输入销售对象',
						trigger: ['change']
					}],
					value: '',
					prop: 'obj',
					label: '销售对象'
				}, { //库存数量
					type: 'input',
					placeholder: '请输入数量',
					rule: [{
						required: true,
						message: '请输入库存数量',
						trigger: ['change']
					}],
					prop: 'stock',
					label: '库存数量'
				}, { //备注
					type: 'input',
					placeholder: '选填',
					value: '',
					prop: 'remark',
					label: '备注'
				}, ],
				formData: {}
			}
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