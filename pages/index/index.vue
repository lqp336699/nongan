<template>
	<view class="page  px22 ">
		<from-list class="" :formList="formList" @setFormData="setFormData"></from-list>
		
		<view class="flex  mt94 flex-center align-center" style="background: #ECFFF7; height:90rpx;">
			<text style="color:#1F9A64">提交</text>
		</view>
	</view>
	
	
</template>

<script>
	import FromList from '@/components/formList.vue'
	export default {
		components:{FromList},
		data() {
			return {
				formList:[
					{type:'input', placeholder:"请输入", rule:[{}], value:'', prop:'name', label:"地块名称"},
					{type:'date', placeholder:"请选择", value:'', prop:'date', label:"日期"},
					{type:'input', placeholder:"请输入", value:'',  rule:[{required: true,message: '请输入姓名',trigger: ['blur', 'change']}], slot:"m²", prop:'aaa', label:"名称"},
					{type:'textarea', placeholder:"请输入活动内容", labelWidth:"300", height:"300", value:'', slot:"m²", prop:'bbb', label:"农事活动内容"},
					{type:'redio', placeholder:"请输入活动内容", labelWidth:"350",  value:'',  prop:'kkk', label:"是否为合格证开具主体",redioList:[{name:"是",value:0},{name:"否",value:1}]},
				],
				formData:{}
			}
		},
		onLoad() {

		},
		methods: {
			setFormData(formData){
				this.formData = formData
				console.log(this.formData,"this.formDatathis.formDatathis.formDatathis.formDatathis.formDatathis.formData")
			}
		}
	}
</script>

<style scoped lang="scss">
	::v-deep  .u-input{
		background-color: #fff !important;
	}
	::v-deep .u-form-item {
		flex: 1 !important;
	}
	::v-deep .u-form-item__body__left{
		height:75rpx;
	}
	::v-deep .u-radio{
		margin-right: 22rpx;
	}
</style>
