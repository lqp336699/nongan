<template>
	<view class="page px22">
		<form-list ref="formList" :formList="formList" @setFormData="setFormData"></form-list>
		
		
		<view @click="submit" class="flex  mt94 flex-center align-center" style="background: #ECFFF7; height:90rpx;">
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
				formList:[
					{
						type: 'input',
						placeholder:'请输入名称',
						rule:[{
							required: true,
							message: '请输入地块名称',
							trigger: ['blur','change']
						}],
						value: '',
						prop: 'name',
						label: '地块名称'
					}
				],
				formData: {}
			}
		},
		methods: {
			setFormData(formData){
				console.log(formData);
				this.formData = formData
			},
			submit(){
				this.$refs.formList.formValidate()
			}
		}
	}
</script>

<style>

</style>
