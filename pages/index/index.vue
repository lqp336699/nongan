<template>
	<view class="page  px22 ">
		<from-list ref="formList" class="" :formList="formList" @setFormData="setFormData"></from-list>
		
		<view @click="submit" class="flex  mt94 flex-center align-center btnBg" style=" height:90rpx;">
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
					{type:'input', placeholder:"请输入", rule:[{required: true,message: '请输入地块名称',trigger: [ 'change']}], value:'', prop:'name', label:"地块名称"},
					
					{type:'date', placeholder:"请选择", value:'', prop:'date', label:"日期"},
					
					{type:'input', placeholder:"请输入", value:'',  rule:[{required: true,message: '请输入姓名',trigger: [ 'change']}], slot:"m²", prop:'666', label:"名称"},
					
					{type:'select', selectTitle:"主体类型", placeholder:"请输入select", value:'', selectList:[[{prop: '1',label: '江'},{prop: '1',label: '江'}],[{value: '2',label: 'cv'},{value: '2',label: 'cv'}]], rule:[{required: true,message: '请输入姓名',trigger: [ 'change']}],  prop:'543', label:"select"},
					
					{type:'textarea', placeholder:"请输入活动内容", labelWidth:"300", height:"300", value:'', slot:"m²", prop:'bbb', label:"农事活动内容"},
					
					{type:'redio', placeholder:"请输入活动内容", labelWidth:"380",  value:'',  prop:'kkk', label:"是否为合格证开具主体",redioList:[{name:"是",value:0},{name:"否",value:1}]},
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
			},
			submit(){
				this.$refs.formList.formValidate((res)=>{
					if( res instanceof Array){
						return
					}
					
					
				})
				
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
