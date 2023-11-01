<template>
	<view class="page  px22 flex flex-column flex-between pb20 border-box">
		<from-list ref="formList" class="" :formList="formList" @setFormData="setFormData"></from-list>

		<!-- 检查内容 -->
		<view class="  bgWhite  br14">
			<view class="px30">
				<view class="py40  flex align-center" style="border-bottom:2rpx dashed #D9D9D9;">
					<text>检查内容</text>
				</view>
			</view>


			<from-list ref="formList2" :formList="formList2" @setFormData="setFormData"></from-list>
		</view>
		<view class="mt30">
			<from-list ref="formList3" :formList="formList3" @setFormData="setFormData"></from-list>
		</view>

		<view class="bgWhite textImg px30 py40 ">
			<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
			<u--form labelPosition="left" :model="formData4" :rules="formRules4" ref="formList4">
				<view class="flex  flex-between align-center">
					<u-form-item class="flex1" label="主体描述" prop="formData4.ss" label-width="200">
						<u--input input-align="right" v-model="model1.userInfo.name" disabled border="none"></u--input>
					</u-form-item>
				</view>

				<view class="">
					<u-form-item>
						<u--textarea v-model="formData4.aad" border="none" placeholder="请填写描述"
							height="224"></u--textarea>
					</u-form-item>
				</view>


				<view class="">
					<up-image></up-image>
				</view>
			</u--form>
		</view>


		<view @click="submit" class="flex  mt94 flex-center align-center btnBg" style=" height:90rpx;">
			<text style="color:#1F9A64">提交</text>
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
				formList: [{
						type: 'addressSelect',
						placeholder: "请选择",
						selectTitle:"选择所在地区",
						selectList: [],
						rule: [{
							required: true,
							message: '请输入地块名称',
							trigger: ['change']
						}],
						value: '',
						prop: 'name',
						label: "所在地区"
					},

					{
						type: 'select',
						placeholder: "请选择",
						value: '',
						selectList: [
							[{
								value: '1',
								label: '李'
							}, {
								value: '1',
								label: '江'
							}],
							[{
								value: '2',
								label: '清平'
							}, {
								value: '2',
								label: '来了'
							}]
						],
						prop: 'date',
						label: "所在镇村"
					},


					{
						type: 'input',
						placeholder: "请填写主体名称",
						value: '',
						class: "mt20",
						rule: [{
							required: true,
							message: '请填写主体名称',
							trigger: ['change']
						}],
						prop: '666',
						label: "主体名称"
					},

					{
						type: 'select',
						selectTitle: "主体类型",
						placeholder: "请输入",
						value: '',
						class: "",
						selectList: [
							[{
								value: '1',
								label: '李'
							}, {
								value: '1',
								label: '江'
							}],
							[{
								value: '2',
								label: '清平'
							}, {
								value: '2',
								label: '来了'
							}]
						],
						rule: [{
							required: true,
							message: '请输入姓名',
							trigger: ['change']
						}],
						prop: '543',
						label: "主体类型"
					},
					{
						type: 'input',
						placeholder: "请填写经营主要品种",
						value: '',
						rule: [{
							required: true,
							message: '请填写经营主要品种',
							trigger: ['change']
						}],
						prop: '666',
						label: "经营品种"
					},
					{
						type: 'input',
						placeholder: "请填写经营主要品种",
						labelWidth: "300",
						value: '',
						prop: 'bbb',
						label: "经营品种"
					},

					{
						type: 'redio',
						placeholder: "",
						labelWidth: "380",
						value: '',
						prop: 'kkk',
						label: "是否为合格证开具主体",
						redioList: [{
							name: "是",
							value: 0
						}, {
							name: "否",
							value: 1
						}]
					},
					{
						type: 'redio',
						placeholder: "",
						labelWidth: "380",
						value: '',
						prop: 'avcvd',
						label: "是否实行风险分级管理",
						redioList: [{
							name: "是",
							value: 0
						}, {
							name: "否",
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
						prop: '666',
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
						prop: '666',
						label: "联系手机"
					},
				],


				formList2: [{
						type: 'bigRedio',
						placeholder: "",
						labelWidth: "600",
						value: '',
						prop: 'krekk',
						label: "是否建立生产记录档案，是否如实记录",
						redioList: [{
							name: "是",
							value: 0
						}, {
							name: "否",
							value: 1
						}]
					},
					{
						type: 'bigRedio',
						placeholder: "",
						labelWidth: "650",
						value: '',
						prop: 'kksdek',
						label: "是否使用国家明令禁止的农药、鱼药、兽药等",
						redioList: [{
							name: "是",
							value: 0
						}, {
							name: "否",
							value: 1
						}]
					},
					{
						type: 'bigRedio',
						placeholder: "",
						labelWidth: "600",
						value: '',
						prop: 'kkfgk',
						label: "是否违法添加和滥用添加剂",
						redioList: [{
							name: "是",
							value: 0
						}, {
							name: "否",
							value: 1
						}]
					},
					{
						type: 'bigRedio',
						placeholder: "",
						labelWidth: "600",
						value: '',
						prop: 'kntkk',
						label: "销售产品是否自检或委托检测",
						redioList: [{
							name: "是",
							value: 0
						}, {
							name: "否",
							value: 1
						}]
					},
					{
						type: 'bigRedio',
						placeholder: "",
						labelWidth: "600",
						value: '',
						prop: 'nvv',
						label: "采收时是否达到农药安全间隔期",
						redioList: [{
							name: "是",
							value: 0
						}, {
							name: "否",
							value: 1
						}]
					},

				],
				formList3: [{
						type: 'input',
						placeholder: "非必填项",
						value: '',
						prop: '123',
						label: "存在的问题"
					},
					{
						type: 'input',
						placeholder: "非必填项",
						value: '',
						prop: '66sfds6',
						label: "处理意见"
					},

				],
				formData: {},
				formData4: {
					aad: ''
				},
				formRules4: {}
			}
		},
		created() {
			this.formList2.forEach((item, index) => {
				if ((index+1) % 2 == 0) {
					item.class = "bigRedioActive"
				}
			})
		},
		methods: {
			setFormData(formData) {
				this.formData = {
					...formData,
					...this.formData
				}
				console.log(this.formData,
					"this.formDatathis.formDatathis.formDatathis.formDatathis.formDatathis.formData")
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