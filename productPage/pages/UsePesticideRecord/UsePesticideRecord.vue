<template>
	<!-- 农药使用记录 -->
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
					rule: [{
						required: true,
						message: '请选择日期',
						trigger: ['change']
					}],
					value: '',
					prop: 'time',
					label: '日期',
					class: "mt30"
				}, { //农药名称
					type: 'input',
					placeholder: '请输入名称',
					rule: [{
						required: true,
						message: '请输入农药名称',
						trigger: ['change']
					}],
					value: '',
					prop: 'ny_name',
					label: '农药名称'
				}, { //防治对象
					type: 'input',
					placeholder: '请输入名称',
					rule: [{
						required: true,
						message: '请输入防治对象',
						trigger: ['change']
					}],
					value: '',
					prop: 'fz_object',
					label: '防治对象'
				}, { //每亩用量
					type: 'input',
					placeholder: '请输入用量',
					rule: [{
						required: true,
						message: '请输入用量',
						trigger: ['change']
					}],
					value: '',
					prop: 'mu_use',
					label: '每亩用量'
				}, { //稀释倍数
					type: 'input',
					placeholder: '请输入稀释倍数',
					rule: [{
						required: true,
						message: '请输入稀释倍数',
						trigger: ['change']
					}],
					value: '',
					prop: 'multiple',
					label: '稀释倍数'
				}, { //施用方法
					type: 'input',
					placeholder: '请输入剂型',
					rule: [{
						required: true,
						message: '请输入施用方法',
						trigger: ['change']
					}],
					value: '',
					prop: 'sy_method',
					label: '施用方法'
				}, { //安全间隔期
					type: 'input',
					placeholder: '请输入间隔期',
					rule: [{
						required: true,
						message: '请输入安全间隔期',
						trigger: ['change']
					}],
					value: '',
					prop: 'aq_time',
					label: '安全间隔期'
				}, { //备注
					type: 'input',
					placeholder: '选填',
					value: '',
					prop: 'remark',
					label: '备注'
				}, ]
			};
		},
		methods: {
			setFormData(formData) {
				this.formData = {
					...formData,
					type: 3
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
							icon: "success",
							mask: true
						})
						setTimeout(() => {
							uni.navigateBack({})
						}, 1000)
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