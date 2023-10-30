<template>
	<view class="pb20  flex  border-box flex-between flex-column">
		<uni-popup ref="popup" type="bottom">
			<DatePick @close="close" v-if="popupType=='Date'"></DatePick>
			<!-- <u-select v-model="from[selectProp]" v-if="popupType=='Select'" :list="selectList"></u-select> -->
			
			<SelectPick  @close="close" v-model="from[selectProp]" :selectTitle="selectTitle" v-if="popupType=='Select'" :selectList="selectList"></SelectPick>
			
		</uni-popup>



		<view class="">

			<u-form :model="form" ref="uForm" label-width="180" :rules="rules" :label-style="{color:'#555'}">

				<view class="bgWhite  px30 br20 mb10" v-for="item in formList" :key="item.prop" >

					<view v-if="item.type=='input'" class="flex flex-between align-center" :key="item.prop || item.placeholder">
						<u-form-item class="flex1" :labelWidth="item.labelWidth || 90" :required="item.hasOwnProperty('rule')" :prop="item.prop"
							:label="item.label">
							<u-input border="false" input-align="right" placeholder-style="text-align:right"
								:placeholder="item.placeholder" v-model="form[item.prop]" />
						</u-form-item>

						<slot v-if="item.slot">
							{{item.slot}}
						</slot>
					<!-- 	<image v-if="item.type=='select'" style="width:15rpx; height:27rpx;"
							src="@/static/form/left.png" mode=""></image> -->

					</view>

					<view class="flex flex-between align-center" @click="showDate(item.prop)" v-if="item.type==='date'" :key="item.prop || item.placeholder">
						<u-form-item class="flex1 " :labelWidth="item.labelWidth || 90" :required="item.hasOwnProperty('rule')" :prop="item.prop"
							:label="item.label">
							<u-input input-align="right" placeholder-style="text-align:right" border="false"
								v-model="form[item.prop]" :placeholder="item.placeholder" type="select" disabled />
						</u-form-item>
						<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image>
					</view>
					
					
					<view class="flex flex-between align-center"  @click="showSelect(item)"  v-if="item.type==='select'" :key="item.prop || item.placeholder">
						{{item.prop}}
						<u-form-item class="flex1 " :labelWidth="item.labelWidth || 90" :required="item.hasOwnProperty('rule')" :prop="item.prop"
							:label="item.label">
							<u-input input-align="right" placeholder-style="text-align:right" border="false"
								v-model="form[item.prop]" :placeholder="item.placeholder" type="select" disabled />
						</u-form-item>
						<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image>
					</view>




					<view class="flex  flex-between align-center" v-if="item.type=='textarea'" :key="item.prop || item.placeholder">
						<u-form-item labelPosition="top" :labelWidth="item.labelWidth || 90" class="flex1 "
							:prop="item.prop" :label="item.label">

							<u--textarea class="" :required="item.hasOwnProperty('rule')" style="width:100%;"
								border="none" :height="item.height || 100" v-model="form[item.prop]" placeholder="请输入内容"
								count></u--textarea>

						</u-form-item>
						<!-- 	<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image> -->
					</view>


					<view class="" v-if="item.type=='redio'" :key="item.prop || item.placeholder">
						<u-form-item labelPosition="left" :required="item.hasOwnProperty('rule')"
							:labelWidth="item.labelWidth || 90" class="flex1" :prop="item.prop" :label="item.label">
							<u-radio-group v-model="form[item.prop]" @change="radioGroupChange(e,item)">
								<u-radio @change="radioChange" class="" active-color="#21A068"
									v-for="(redioItem, index) in item.redioList" :key="index" :name="redioItem.name"
									:disabled="redioItem.disabled">
									{{redioItem.name}}
								</u-radio>
							</u-radio-group>
						</u-form-item>
					</view>

				</view>

			</u-form>
		</view>

	</view>
</template>

<script>
	import DatePick from '@/components/datePick.vue'
	import SelectPick from  '@/components/selectPick.vue'
	export default {
		name: "formList",
		components: {
			DatePick,SelectPick
		},
		props: {
			formList: {
				type: Array,
				default: [],
			}
		},
		data() {
			let form = {}
			let rules = {}
			this.formList.forEach(item => {
				if (!form[item.prop]) {
					this.$set(form, item.prop, '')
				}
				
				if (item.rule) {
					this.$set(rules, item.prop, item.rule)
				}
			})
			return {
				form: form,
				dateProp: "",
				rules: {
					...rules
				},
				popupType:false,
				selectList:[],
				selectProp:"",
				selectTite:""
			}
		},

		watch: {
			'form': {
				handler: function(newVal) {
					// 拷贝newVal
					let newValCopy = Object.assign({}, newVal)


					// 替换redio的name字段为value
					let redioLists = this.formList.filter(item => {
						return item.type == "redio"
					})
					redioLists.forEach(item2 => {
						if (item2.redioList.length > 0) {
							item2.redioList.forEach(redioListItem => {
								if (newValCopy[item2['prop']] == redioListItem.name) {
									newValCopy[item2['prop']] = redioListItem.value
								}
							})
						}

					})

					this.$emit('setFormData', newValCopy)
				},
				deep: true
			}
		},
		mounted() {

		},
		methods: {
			showDate(prop) {
				this.dateProp = prop
				this.popupType = 'Date'
				this.$refs.popup.open('bottom')
			},
			showSelect(item){
				console.log(item,"pppppppppppppppppppp")
				this.selectList = item.selectList
				this.selectTitle=item.selectTitle
				this.selectProp = item.prop
				this.popupType = 'Select'
				this.$refs.popup.open('bottom')
			},
			close(value) {
				if(this.popupType == 'Date'){
					this.form[this.dateProp] = value
				}else{
					this.form[this.selectProp] = value
				}
				
				this.popupType = ''
				this.$refs.popup.close()
			},
			radioChange() {

			},
			radioGroupChange() {
				//此时this.form[item.prop]为name值
			},
			formValidate(callBack) {
				this.$refs.uForm.validate().then(res => {
					callBack(res)
				}).catch(errors => {
					callBack(errors)
				})
			}
		}
	}
</script>

<style scoped lang="scss">



</style>