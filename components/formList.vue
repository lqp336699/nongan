<template>
	<view class="pb20  flex  border-box flex-between flex-column">
		<uni-popup ref="popup" type="bottom">
			<DatePick @close="close" v-if="popupType=='Date'"></DatePick>
			<!-- <u-select v-model="from[selectProp]" v-if="popupType=='Select'" :list="selectList"></u-select> -->

			<SelectPick @close="close" :selectTitle="selectTitle" v-if="popupType=='Select'" :selectList="selectList">
			</SelectPick>
			
			<AddressPick @close="close" :selectTitle="selectTitle" v-if="popupType=='addressSelect'" ></AddressPick>

		</uni-popup>



		<view class="">

			<u-form :model="form" ref="uForm" error-type="toast" label-width="180" :rules="rules"
				:label-style="{color:'#555'}">

				<view class="bgWhite  br20 mb10" v-for="item in formList" :key="item.prop">

					<view v-if="item.type=='input'"
						:class="['flex',  'flex-between,px30', 'align-center', item.class ? item.class : '']"
						:key="item.prop || item.placeholder">
						<u-form-item class="flex1" :labelWidth="item.labelWidth || 190"
							:required="item.hasOwnProperty('rule')" :prop="item.prop" :label="item.label">
							<u-input border="false" input-align="right" placeholder-style="text-align:right"
								:placeholder="item.placeholder" :disabled="item.disabled" v-model="form[item.prop]" />
						</u-form-item>

						<slot v-if="item.slot">
							{{item.slot}}
						</slot>
					

					</view>
					
					<view v-if="item.type=='search'"
						:class="['flex',  'flex-between,px30', 'align-center', item.class ? item.class : '']"
						:key="item.prop || item.placeholder" @click="search">
						<u-form-item class="flex1" :labelWidth="item.labelWidth || 190"
							:required="item.hasOwnProperty('rule')" :prop="item.prop" :label="item.label">
							<u-input border="false" input-align="right" placeholder-style="text-align:right"
								:placeholder="item.placeholder" :disabled="item.disabled" v-model="form[item.prop]" />
						</u-form-item>
					
						<slot v-if="item.slot">
							{{item.slot}}
						</slot>
					
					</view>

					<view :class="['flex',  'flex-between', 'align-center,px30', item.class ? item.class : '']"
						@click="showDate(item.prop)" v-if="item.type==='date'" :key="item.prop || item.placeholder">
						<u-form-item class="flex1 " :labelWidth="item.labelWidth || 190"
							:required="item.hasOwnProperty('rule')" :prop="item.prop" :label="item.label">
							<u-input input-align="right" placeholder-style="text-align:right" border="false"
								v-model="form[item.prop]" :placeholder="item.placeholder" type="select" disabled />
						</u-form-item>
						<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image>
					</view>


					<view :class="['flex',  'flex-between', 'align-center,px30', item.class ? item.class : '']"
						@click="showSelect(item)" v-if="item.type==='select'" :key="item.prop || item.placeholder">
						<u-form-item class="flex1 " :labelWidth="item.labelWidth || 190"
							:required="item.hasOwnProperty('rule')" :prop="item.prop" :label="item.label">
							<u-input input-align="right" placeholder-style="text-align:right" border="false"
								v-model="form[item.prop]" :placeholder="item.placeholder" type="select" disabled />
						</u-form-item>
						<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image>
					</view>
					
					<view :class="['flex',  'flex-between', 'align-center,px30', item.class ? item.class : '']"
						@click="showSelect(item)" v-if="item.type==='addressSelect'" :key="item.prop || item.placeholder">
						<u-form-item class="flex1 " :labelWidth="item.labelWidth || 190"
							:required="item.hasOwnProperty('rule')" :prop="item.prop" :label="item.label">
							<u-input input-align="right" placeholder-style="text-align:right" border="false"
								v-model="form[item.prop]" :placeholder="item.placeholder" type="select" disabled />
						</u-form-item>
						<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image>
					</view>




					<view :class="['flex',  'flex-between', 'align-center,px30', item.class ? item.class : '']"
						v-if="item.type=='textarea'" :key="item.prop || item.placeholder">
						<u-form-item labelPosition="top" :labelWidth="item.labelWidth || 190" class="flex1 "
							:prop="item.prop" :label="item.label">

							<u--textarea class="" :required="item.hasOwnProperty('rule')" style="width:100%;"
								border="none" :height="item.height || 100" v-model="form[item.prop]" placeholder="请输入内容"
								count></u--textarea>

						</u-form-item>
						<!-- 	<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image> -->
					</view>


					<view :class="['flex',  'flex-between', 'align-center,px30', item.class ? item.class : '']"
						v-if="item.type=='redio'" :key="item.prop || item.placeholder">
						<u-form-item labelPosition="left" :required="item.hasOwnProperty('rule')"
							:labelWidth="item.labelWidth || 190" class="flex1" :prop="item.prop" :label="item.label">
							<u-radio-group :value="form[item.prop]" @change="radioGroupChange(e,item)" >
								<u-radio :disabled="item.disabled" @change="radioChange" class="" active-color="#21A068"
									v-for="(redioItem, index) in item.redioList" :key="index" :name="redioItem.name" :label="redioItem.name"
									>
									{{redioItem.name}}
								</u-radio>
							</u-radio-group>
						</u-form-item>
					</view>

					<view :class="['flex','bigRedio' ,'px30' , 'flex-between', 'align-center', item.class ? item.class : '']"
						v-if="item.type=='bigRedio'" :key="item.id || item.placeholder" >
						<u-form-item labelPosition="top" :required="item.hasOwnProperty('rule')"
							:labelWidth="item.labelWidth || 190" class="flex1" :prop="item.id" :label="item.label">
							<u-radio-group v-model="form[item.checked]" @change="radioGroupChange(e,item)">
								<u-radio @change="radioChange" class="" active-color="#21A068"
									v-for="(redioItem, index) in item.redioList" :key="index" :name="redioItem.name"
									:disabled="redioItem.disabled">
									{{redioItem.name}}
								</u-radio>
							</u-radio-group>
						</u-form-item>
					</view>

				<!-- 	<view :class="['flex',  'flex-between', 'align-center,px30', item.class ? item.class : '']"
						v-if="item.type=='textImage'" :key="item.prop || item.placeholder">
						<u-form-item class="flex1 " :labelWidth="item.labelWidth || 190"
							:required="item.hasOwnProperty('rule')" :prop="item.prop" :label="item.label">

							<u-input border="false" input-align="right" placeholder-style="text-align:right"
								:placeholder="item.placeholder" v-model="form[item.prop]" />

						</u-form-item>
					</view> -->


				</view>

			</u-form>
		</view>

	</view>
</template>

<script>
	import DatePick from '@/components/datePick.vue'
	import AddressPick from '@/components/addressPick.vue'
	import SelectPick from '@/components/selectPick.vue'
	export default {
		name: "formList",
		components: {
			DatePick,
			SelectPick,
			AddressPick
		},
		props: {
			formList: {
				type: Array,
				default: [],
			},
			formIsValidate:{
				type:Boolean,
				default:false
			},
			selectList:{
				type: Array,
				default: [],
			}
		},
		data() {
			let form = {}
			let rules = {}
			let requireForm = []
			this.formList.forEach(item => {
				if (!form[item.prop]) {
					this.$set(form, item.prop, item.value)
				}
				
				if(item.rule){
					requireForm.push(item.prop)
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
				selectForm:[],
				requireForm:requireForm,
				popupType: false,
				selectProp: "",
				selectTitle: ""
			}
		},
		mounted(){
			if(this.requireForm.length == 0){
				this.$emit('update:formIsValidate',true)
			}
		},
		watch: {
			'form': {
				handler: function(newVal) {
					// 拷贝newVal
					let newValCopy = Object.assign({}, newVal)
					let requireSuccess = true
					
					this.requireForm.forEach(item=>{
						if(newValCopy[item] == "" || !newValCopy[item]){
							 requireSuccess = false
						}
					})
					this.$emit('update:formIsValidate',requireSuccess)
					
					// 替换redio的name字段为value
					let redioLists = this.formList.filter(item => {
						return item.type == "redio"
					})
					
					
					
					let dateLists = this.formList.filter(item => {
						return item.type == "date"
					})
					
					
					let work_id = this.selectForm.map(item=>{
						return item.id
					})
					
					newValCopy[this.selectProp] = work_id[0]
					
					
					dateLists.forEach(item=>{
						let date =  newValCopy[item['prop']].replace('年','-').replace('月','-').replace('日','')
						let time = new Date(date).getTime()/1000
						
						 newValCopy[item['prop']] = time
						
						// newValCopy[item['prop']] = 
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
					this.$emit('setFormData', newValCopy) //页面接收newValCopy
				},
				deep: true
			}
		},
	
	
		methods: {
			showDate(prop) {
				this.dateProp = prop
				this.popupType = 'Date'
				this.$refs.popup.open('bottom')
			},
			showSelect(item) {
				
				// this.$emit('update:selectList', item.selectList)
				this.$emit('seletType',item.prop)
				
				this.selectTitle = item.selectTitle
				this.selectProp = item.prop
				if(item.type=="select"){
					this.popupType = 'Select'
				}else if(item.type=="addressSelect"){
					this.popupType = 'addressSelect'
				}
				
				
				this.$refs.popup.open('bottom')
			},
			close(value) {
				if(value){
					if (this.popupType == 'Date') {
						this.form[this.dateProp] = value
					} else {
						
						let string = ''
						if (value.length>0) {
							for (let i = 0; i <= value.length - 1; i++) {
								
								if(value[i]){
									string += value[i]['label'] + '   '
								}
							}
						
						}
						
						this.selectForm = value
					
						
						this.form[this.selectProp] = string
					}
				}

				this.popupType = ''
				this.$refs.popup.close()
			},
			setSelectProp(val) {
				// console.log(val, "bbcvvvcxcccx")
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
			},
			search(){
				this.$emit('search')
			}
		}
	}
</script>

<style scoped lang="scss">


</style>