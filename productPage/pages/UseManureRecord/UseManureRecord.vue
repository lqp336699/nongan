<template>
	<view class="page px22 flex flex-column flex-between border-box pb60">
		<form-list :formIsValidate.sync="formIsValidate" ref="formList" :formList="formList" @setFormData="setFormData"></form-list>


		<view @click="submit" class="flex mt94 flex-center align-center br83" :style="{background: formIsValidate ? '#1F9A64' : '#ECFFF7', height:'90rpx'}">
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
				formIsValidate:false,
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
				}, { //每亩用量
					type: 'input',
					placeholder: '请输入用量',
					rule: [{
						required: true,
						message: '请输入用量',
						trigger: ['change']
					}],
					value: '',
					prop: 'useNum',
					label: '每亩用量'
				}, { //施肥方式
					type: 'input',
					placeholder: '请输入方式',
					rule: [{
						required: true,
						message: '请输入方式',
						trigger: ['change']
					}],
					value: '',
					prop: 'way',
					label: '施肥方式'
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
				console.log(formData);
				this.formData = {...formData,type:2}
			},
			submit() {
				this.$refs.formList.formValidate((res) => {
					if (res instanceof Array) {
						return
					}
					
					
					this.$http({
						url:"/Data/add_product_log",
						data:this.formData,
						loading:true
					}).then(res=>{
						console.log(res,"ooooooooooooooo")
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