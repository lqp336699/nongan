<template>
	<view class="page  px22 flex flex-column  pb20 border-box">
		<u-form :model="form" ref="uForm">


			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']" :key="name">
					<u-form-item class="flex1" :labelWidth="190" label="所在地区">
						<u-input border="false" input-align="right" placeholder-style="text-align:right" placeholder=""
							disabled v-model="formData.name" />
					</u-form-item>
				</view>
			</view>

			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']" :key="address">
					<u-form-item class="flex1" :labelWidth="190" label="所在镇">
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请选择镇" disabled v-model="county_name" />
					</u-form-item>
				</view>
			</view>

			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']" :key="address"
					@click="openPopup('address')">
					<u-form-item class="flex1" :labelWidth="190" label="所在村">
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请选择镇村" disabled v-model="village_name" />
					</u-form-item>
				</view>
			</view>
			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']" @click="search">
					<u-form-item class="flex1" :labelWidth=" 190" label="主体名称">
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请选择主体名称" disabled v-model="uid_name" />
					</u-form-item>
					<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image>
				</view>
			</view>

			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']">
					<u-form-item class="flex1" :labelWidth=" 190" label="行业归属">
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请选择主体名称" disabled v-model="main_type_name" />
					</u-form-item>
				</view>
			</view>

			<view class="bgWhite  br20 mb10">
				<view :class="['flex',  'flex-between,px30', 'align-center']">
					<u-form-item class="flex1" :labelWidth=" 190" label="经营品种">
						<u-input border="false" input-align="right" placeholder-style="text-align:right"
							placeholder="请选择主体名称" disabled v-model="breed" />
					</u-form-item>
				</view>
			</view>

			<view class="bgWhite  br20 mb10">
				<view :class="['flex','bigRedio' ,'px30' , 'flex-between', 'align-center']">
					<u-form-item labelPosition="left" labelWidth="190" class="flex1" label="风险等级">
						<u-radio-group v-model="formData.fx_level" class="flex1">
							<u-radio active-color="#21A068" v-for="(redioItem, index) in fenxianList" :key="index"
								:name="redioItem.value">
								{{redioItem.name}}

							</u-radio>
						</u-radio-group>
					</u-form-item>
				</view>
			</view>



			<!-- 检查内容 -->
			<view class="  bgWhite checkList br14" v-if="checkedList.length>0">
				<view class="px30">
					<view class="py40  flex align-center" style="border-bottom:2rpx dashed #D9D9D9;">
						<text>检查内容</text>
					</view>
				</view>

				<view>
					<view class="px30 pb20 mt20">
						<!-- <u-checkbox-group v-model="checkedValue" placement="column">
							<u-checkbox :size="30" :labelSize="30" :iconSize="30" :customStyle="{marginBottom: '30rpx'}"
								v-for="(item, index) in checkedList" :key="index" :label="item.title"
								:name="item.title">
							</u-checkbox>
						</u-checkbox-group> -->


						<checkbox-group @change="checkboxChange">
							<label class="flex flex-start mt20 font32 align-center"  v-for="item in checkedList" :key="item.id">
								<view class="mr10">
									<checkbox :value="item.title" :checked="item.checked" />
								</view>
								<view> <text>{{item.title}}</text> <text style="color:red"> (  -{{item.score}}分 ) </text></view>
							</label>
						</checkbox-group>
					</view>
				</view>

			</view>


			<view class="mt30 px30 bgWhite">

				<view class="flex  flex-between align-center">

					<u-form-item label-position="top" label="存在的问题" label-width="200">
						<u--textarea v-model="formData.problem" border="none" placeholder="请填写存在的问题"
							height="224"></u--textarea>
					</u-form-item>
				</view>
			</view>
			<view class="mt30 px30 bgWhite">

				<view class="flex  flex-between align-center">

					<u-form-item label-position="top" label="处理意见" label-width="200">
						<u--textarea v-model="formData.take" border="none" placeholder="请填写处理意见"
							height="224"></u--textarea>
					</u-form-item>
				</view>
			</view>

			<view class="bgWhite textImg mt20 px30 py40 ">
				<view class="">
					<up-image :fileList.sync="fileList"></up-image>
				</view>
			</view>

		</u-form>


		<view @click="submit" class="flex  mt94 flex-center align-center br83 btnBg"
			:style="{background: '#1F9A64', height:'90rpx'}">
			<text :style="{color: '#fff'}">提交</text>

		</view>


		<uni-popup ref="popup" type="bottom">
			<view style="height:780rpx;" class="br20 flex flex-between  flex-column bgWhite">
				<view class="px30 flex bbe flex-between align-center" style="height:117rpx;">
					<text></text>
					<text class="col2 font32 font600">选择所在村</text>
					<image @click="close" src="@/static/form/close.png" mode="" style="width:40rpx; height:40rpx;">
					</image>
				</view>
				<view class="flex flex-between flex-column  " style="height:600rpx;">
					<picker-view class="picker-view" :indicator-style="indicatorStyle" :value="value"
						@change="bindChange" @pickstart="bindStart" @pickend="bindPickend">
						<picker-view-column>
							<view class="item" v-for="(item,index) in villageList" :key="index">{{item.name}}</view>
						</picker-view-column>
					</picker-view>
				</view>


				<view class=" flex mb20  flex-center">
					<view @click="setVillage" class=" br44  flex flex-center align-center"
						style="width:690rpx; height:88rpx; background:#1F9A64;">
						<text class="colf">确定</text>
					</view>
				</view>

			</view>

		</uni-popup>


	</view>


</template>

<script>
	import UpImage from '@/components/upImg.vue'
	import FromList from '@/components/formList.vue'
	import {
		mapState
	} from 'vuex'
	export default {
		components: {
			FromList,
			UpImage
		},
		data() {
			return {
				checkedList: [],
				formIsValidate: false,
				checkedValue: [],
				value: [0],
				indicatorStyle: `height: 50px;`,
				fenxianList: [{
					name: 'A',
					value: 1
				}, {
					name: 'B',
					value: 2
				}, {
					name: 'C',
					value: 3
				}],
				villageList: [],
				fileList: [],
				village_name: '',
				village_id: '',
				main_type_name: '',
				county_name: '',
				uid_name: '',
				breed: '',
				formData: {
					name: '四川省 射洪市',
					uid: '',
					subject: [],
					fx_level: '',
					contacts: '',
					problem: '',
					take: '',
					img: '',
					desc: ''
				},
				loading: false,
				address: [],

			}
		},
		watch: {


		},
		computed: {
			...mapState({
				userInfo: (state) => state.identity.userInfo
			})
		},

		async onLoad() {
			this.formData.contacts = this.userInfo.truename
			this.formData.mobile = this.userInfo.phoneNumber
			await this.getAddress()
			// 镇管理人员
			if (this.userInfo.identity_type == 3) {
				this.setZhenAddress()
			} else if (this.userInfo.identity_type == 4) {
				this.setCunAddress()
			}
		},

		methods: {
			bindStart() {
				this.loading = true
			},
			checkboxChange(e){
				this.checkedValue = e.detail.value
			},
			setVillage() {
				this.village_name = this.villageList[this.value[0]].name
				this.village_id = this.villageList[this.value[0]].id
				this.close()
			},
			bindChange(e) {
				this.loading = true
				// let val = e.detail.value
				this.value = e.detail.value
			},
			bindPickend() {
				this.loading = false
			},
			openPopup(string) {
				//乡镇人员
				if (this.userInfo.identity_type == 3) {
					this.$refs.popup.open('bottom')
				} else {
					//村人员
				}
			},
			close() {
				this.$refs.popup.close()
			},
			setZhenAddress() {
				this.address.forEach(item => {
					if (item.id == this.userInfo.county_id) {
						this.county_name = item.name
						this.villageList = JSON.parse(JSON.stringify(item.village))
					}
				})
			},

			setCunAddress() {
				this.address.forEach(item => {
					if (item.id == this.userInfo.county_id) {
						this.county_name = item.name
						if (item.village) {
							item.village.forEach(item2 => {
								if (item2.id == this.userInfo.village_id) {
									console.log(item2)
									this.village_name = item2.name
									this.village_id = item2.id
								}
							})
						}
					}
				})
			},


			getAddress() {
				return new Promise(resolve => {
					this.$http({
						url: '/Data/address'
					}).then(res => {
						this.address = res.data
						resolve('aa')
					})
				})

			},
			submit() {
				//处理图片
				let string = ''
				this.fileList.forEach(item => {
					string += item.url + ','
				})
				this.formData.img = string.substring(0, string.length - 1)
				//处理检查分数

				let subject = this.checkedList.filter(item => {
					return this.checkedValue.includes(item.title)
				})
				this.formData.subject = subject.map(item => {
					return {
						title: item.title,
						score: item.score,
						id: item.id
					}
				})


				this.$http({
					url: "/Data/post_patrol",
					data: {
						...this.formData
					},
					loading: true
				}).then(res => {
					uni.showToast({
						title: res.msg
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 1000)
				})
			},

			setUid(active) {
				console.log(active, "ppppp")
				this.formData.uid = active.id
				this.uid_name = active.main_name
				let string = ''
				active.work_arr.forEach(item => {
					string += item.work_name + ' '
				})
				this.breed = active.breed
				this.main_type_name = string
				//获取检查内容
				this.getCheckedData()
			},
			getCheckedData() {
				this.$http({
					url: '/Data/work_subject'
				}).then(res => {

					let data = res.data
					// data.forEach(item=>{
					// 	item.title = item.title+'（-'  + item.score  +  '分）'
					// })
					this.checkedList = res.data

				})
			},
			search() {
				if (this.village_name == '') {
					uni.showToast({
						title: "请先选择镇村",
						icon: "none"
					})
					return
				}
				//村账号
				if (this.userInfo.identity_type == 4) {
					uni.navigateTo({
						url: '/managePage/pages/search/search?village_id=' + this.village_id
					})
				} else {
					uni.navigateTo({
						url: '/managePage/pages/search/search?village_id=' + this.village_id
					})
				}

			}
		},

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


	.picker-view {
		width: 750rpx;
		height: 300rpx;
		margin-top: 20rpx;
	}

	.item {
		line-height: 100rpx;
		text-align: center;
	}

	.checkList ::v-deep .u-radio-group--row {
		display: block;
		margin-top: 20rpx;
	}

	.textImg /deep/ .u-form-item__body {
		padding: 0;
	}

	/deep/ .bigRedioActive {
		background: linear-gradient(90deg, #E6FFF5 0%, #FFFFFF 100%) !important;
	}
</style>