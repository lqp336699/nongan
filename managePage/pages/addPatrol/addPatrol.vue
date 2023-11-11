<template>
	<view class="page  px22 flex flex-column flex-between pb20 border-box">
		<from-list :formIsValidate.sync="formIsValidate" ref="formList" class="" :formList="formList"
			:selectList="selectList" @seletType="seletType"  @search="search" @setFormData="setFormData" key="a"></from-list>

		<!-- 检查内容 -->
		<view class="  bgWhite  br14" v-if="formList2.length>0">
			<view class="px30">
				<view class="py40  flex align-center" style="border-bottom:2rpx dashed #D9D9D9;">
					<text>检查内容</text>
				</view>
			</view>

			
				<view v-for="item in formList2" :key="item.id">
					<view :class="['flex','bigRedio' ,'px30' , 'flex-between', 'align-center', item.class ? item.class : '']"
						 :key="item.id || item.placeholder" >
						<u-form-item labelPosition="top" :required="item.hasOwnProperty('rule')"
							:labelWidth="item.labelWidth || 600" class="flex1" :prop="item.check" :label="item.title">
							<u-radio-group v-model="item.value" iconSize="24">
								<!-- @change="radioGroupChange(e,item)" -->
								 <!-- @change="radioChange" -->
								<u-radio class="" active-color="#21A068"
									v-for="(redioItem, index) in item.option" :key="index" 
									 :label="redioItem.title"
									 :name="redioItem.title"
									:disabled="redioItem.disabled">
									{{redioItem.title}}
								</u-radio>
							</u-radio-group>
						</u-form-item>
					</view>
				</view>
				
				
				
				
		</view>
		<view class="mt30">
			<from-list  ref="formList3" :formList="formList3"
				@setFormData="setFormData" key="c"></from-list>
		</view>

		<view class="bgWhite textImg px30 py40 ">
			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<u--form labelPosition="left" :model="formData4" :rules="formRules4" ref="formList4">
				<view class="flex  flex-between align-center">
					<u-form-item class="flex1" label="主体描述" prop="formData4.ss" label-width="200">
						<u--input input-align="right"  disabled border="none"></u--input>
					</u-form-item>
				</view>

				<view class="">
					<u-form-item>
						<u--textarea v-model="formData4.desc" border="none" placeholder="请填写描述"
							height="224"></u--textarea>
					</u-form-item>
				</view>
				<view class="">
					<up-image :fileList.sync="fileList"></up-image>
				</view>
			</u--form>
		</view>


		<view @click="submit" class="flex  mt94 flex-center align-center br83 btnBg"
			:style="{background: formIsValidate ? '#1F9A64' : '#ECFFF7', height:'90rpx'}">
			<text :style="{color:formIsValidate ? '#fff':'#1F9A64'}">提交</text>

		</view>
	</view>


</template>

<script>
	import UpImage from '@/components/upImg.vue'
	import FromList from '@/components/formList.vue'
	export default {
		components: {
			FromList,
			UpImage
		},
		data() {
			return {
				formIsValidate1: false,
				formIsValidate: false,
				formIsValidate2: false,
				defaultSelectList:[],
				selectList: [],
				fileList:[],
				formList: [{
						type: 'input',
						disabled: true,
						placeholder: "请选择",
						selectTitle: "选择所在地区",
						rule: [{
							required: true,
							message: '请选择地区',
							trigger: ['change']
						}],
						value: '四川省 射洪市',
						prop: 'name',
						label: "所在地区"
					},

					{
						type: 'select',
						placeholder: "请选择",
						value: '',
						selectList:[],
						prop: 'address',
						label: "所在镇村"
					},


					{
						type: 'search',
						placeholder: "请填写主体名称",
						value: '',
						class: "mt20",
						
						rule: [{
							required: true,
							message: '请填写主体名称',
							trigger: ['change']
						}],
						prop: 'uid',
						label: "主体名称"
					},

					{
						type: 'select',
						selectTitle: "行业归属",
						placeholder: "请输入",
						value: '',
						class: "",

						rule: [{
							required: true,
							message: '请输入行业归属',
							trigger: ['change']
						}],
						prop: 'work_id',
						label: "行业归属"
					},
					{
						type: 'input',
						placeholder: "请填写经营主要品种",
						value: '',
						disabled:true,
						rule: [{
							required: true,
							message: '请填写经营主要品种',
							trigger: ['change']
						}],
						prop: 'breed',

						label: "经营品种"
					},

					{
						type: 'redio',
						placeholder: "",
						labelWidth: "380",
						value: '',
						prop: 'is_hg',
						label: "是否为合格证开具主体",
						disabled:true,
						redioList: [{
							name: "否",
							value: 0
						}, {
							name: "是",
							value: 1
						}]
					},
					{
						type: 'redio',
						placeholder: "",
						labelWidth: "380",
						value: '',
						prop: 'is_sx',
						label: "是否实行风险分级管理",
						disabled:true,
						redioList: [{
							name: "否",
							value: 0
						}, {
							name: "是",
							value: 1
						}]
					},
					{
						type: 'input',
						placeholder: "请输入",
						value: '',
						rule: [{
							required: true,
							message: '请输入联系人',
							trigger: ['change']
						}],
						prop: 'contacts',

						label: "联系人"
					},
					{
						type: 'input',
						placeholder: "请输入联系手机",
						value: '',
						rule: [{
							required: true,
							message: '请输入联系手机',
							trigger: ['change']
						}],
						prop: 'mobile',

						label: "联系手机"
					},
				],


				formList2: [],
				formList3: [{
						type: 'input',
						placeholder: "非必填项",
						value: '',
						prop: 'problem',
						label: "存在的问题"
					},
					{
						type: 'input',
						placeholder: "非必填项",
						value: '',
						prop: 'take',
						label: "处理意见"
					},

				],
				formData: {},
				formData4: {
					desc: ''
				},
				formRules4: {},
				address: [],
				searchData:{},
				selectType:''
			}
		},
		watch: {
			'formData.work_id':{
				handler(newVal,oldVal){
					
					
					
					this.$http({
						url:'/Data/get_subject',
						data:{
							work_id:newVal
						}
					}).then(res=>{
						this.formList2 = res.data
						this.formList2.forEach(item=>{
							this.$set(item,'value','')
						})
					})
				}
			},
			
		},

		created() {
			this.formList2.forEach((item, index) => {
				if ((index + 1) % 2 == 0) {
					item.class = "bigRedioActive"
				}
			})
		},
		onLoad() {
			this.getAddress()
			this.$bus.$on('selectPickChange', (options) => {
				
				if(this.selectType=="address"){
					// 改变了镇的选择，获取村的数据
					console.log(options.newVal[0],options.oldVal[0])
					if (options.newVal[0] !== options.oldVal[0]) {
						
						
						let arr = this.address.filter((item, index) => {
							return index == options.newVal[0]
						})
						
						let arr1 = arr[0].village.map(item => {
							return {
								label: item.name,
								id: item.id
							}
						})
						this.selectList.pop()
						this.selectList.push(arr1)
					}
				}
				
			})

		},
		destroyed(){
			uni.removeStorageSync('selectValue')
		},
		methods: {
			setFormData(formData) {
				
				this.formData = {
					...this.formData,
					...formData,
					uid:this.searchData.id
				}

			},
			getAddress() {
				this.formList[1].selectList = []
				this.$http({
					url: '/Data/address'
				}).then(res => {
					this.address = res.data
					
				})
			},
			submit() {
				this.$refs.formList.formValidate((res) => {
					if (res instanceof Array) {
						return
					}
				})
				
				let form2 = this.formList2.map(item=>{
					if(item.value=="是"){
						 item.option.forEach(optionItem=>{
							if(optionItem.title == "是"){
								optionItem.check = true
							}
							
						})
						return item
					}else{
						 item.option.forEach(optionItem=>{
							if(optionItem.title == "否"){
								optionItem.check = true
							}
							
						})
						return item
					}
					
				})
				console.log(this.fileList)
				let string = ''
				this.fileList.forEach(item=>{
					string +=item.url+','
				})
				string = string.substring(0, string.length - 1)
				
				let form = {
					...this.formData,
					...this.formData4,
					subject:form2,
					img:string
				}
				
				this.$http({
					url:"/Data/post_patrol",
					data:{
						...form
					}
				}).then(res=>{
					uni.showToast({
						title:res.msg
					})
				})
			},
			
			// search页面传来的数据
			getList(data){
			    console.log(data,'B页面传递的数据')
				let prop = ''
				this.formList.forEach((item,index)=>{
					if(item.type=='search'){
						prop = item.prop
					}
				})
				
				
				this.$refs.formList.form[prop] = data.main_name
				this.$refs.formList.form['breed'] = data.breed
				if(data.is_sx == 0){
					this.$refs.formList.form['is_sx'] = "否"
				}else{
					this.$refs.formList.form['is_sx'] = "是"
				}
				
				if(data.is_hg== 0){
					this.$refs.formList.form['is_hg'] = "否"
				}else{
					this.$refs.formList.form['is_hg'] = "是"
				}
				
				
				this.searchData = data
				
				
				//获取行业归属
				
				// this.selectList = 
			},
			seletType(type){
				this.selectType = type
				if(type=="address"){
					this.selectList =[]
					let arr1 = this.address.map(item => {
						return {
							label: item.name,
							id: item.id
						}
					})
					let arr2 = this.address[0].village.map(item => {
						return {
							label: item.name,
							id: item.id
						}
					})
					this.formList[1].selectList.push(arr1)
					this.formList[1].selectList.push(arr2)
					this.selectList.push(arr1)
					this.selectList.push(arr2)
				}else if(type=="work_id"){
					
					this.selectList =[]
					let arr1 = this.searchData.work_arr.map(item => {
						return {
							label: item.work_name,
							id: item.id
						}
					})
					
					this.formList[1].selectList.push(arr1)
					
					this.selectList.push(arr1)
					
				}
			},
			search(){
				if(!this.formData['address']){
					uni.showToast({
						title:"请先选择镇村",
						icon:"none"
					})
					return
				}
				uni.navigateTo({
					url:'/managePage/pages/search/search?address='+this.formData['address']
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	::v-deep .u-input {
		background-color: #fff !important;
	}

	::v-deep .u-form-item {
		flex: 1 !important;
	}

	.u-form-item {
		flex: 1 !important;
	}

	::v-deep .u-form-item__body__left {
		height: 75rpx;
	}

	::v-deep .u-radio {
		margin-right: 22rpx;
	}

	.textImg /deep/ .u-form-item__body {
		padding: 0;
	}

	/deep/ .bigRedioActive {
		background: linear-gradient(90deg, #E6FFF5 0%, #FFFFFF 100%) !important;
	}
</style>