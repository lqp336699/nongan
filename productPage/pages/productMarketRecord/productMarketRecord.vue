<template>
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
				}, { //日期
					type: 'date',
					placeholder: '请选择',
					value: '',
					prop: 'time',
					label: '日期',
					class: "mt30"
				}, { //收获面积
					type: 'input',
					placeholder: '请输入',
					rule: [{
						required: true,
						message: '请输入收获面积',
						trigger: ['change']
					}],
					slot: 'm²',
					prop: 'have_area',
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
					prop: 'xs_num',
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
					prop: 'xs_object',
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
						url: "/Data/add_product_log",
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