<template>
	<view class="pb20  flex  border-box flex-between flex-column">
		<uni-popup ref="popup" type="bottom">
			<DatePick @close="close"></DatePick>



		</uni-popup>



		<view class="">


			<u-form :model="form" ref="uForm" label-width="180" :rules="rules" :label-style="{color:'#555'}">



				<view class="bgWhite  px30 br20 mb10" v-for="item in formList" :key="item.prop">

					<view v-if="item.type=='input'" class="flex flex-between align-center">
						<u-form-item class="flex1" :required="item.hasOwnProperty('rule')" :prop="item.prop" :label="item.label">
							<u-input border="false" input-align="right" placeholder-style="text-align:right"
								:placeholder="item.placeholder" v-model="form[item.prop]" />
						</u-form-item>

						<slot v-if="item.slot">
							{{item.slot}}
						</slot>
						<image v-if="item.type=='select'" style="width:15rpx; height:27rpx;"
							src="@/static/form/left.png" mode=""></image>

					</view>

					<view class="flex flex-between align-center" @click="showDate(item.prop)" v-if="item.type=='date'">
						<u-form-item class="flex1 " :required="item.hasOwnProperty('rule')" :prop="item.prop" :label="item.label">
							<u-input input-align="right" placeholder-style="text-align:right" border="false"
								v-model="form[item.prop]" :placeholder="item.placeholder" type="select" disabled />
						</u-form-item>
						<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image>
					</view>




					<view class="flex  flex-between align-center" v-if="item.type=='textarea'">
						<u-form-item labelPosition="top" :labelWidth="item.labelWidth || 90" class="flex1 "
							:prop="item.prop" :label="item.label">

							<u--textarea class="" :required="item.hasOwnProperty('rule')" style="width:100%;" border="none" :height="item.height || 100"
								v-model="form[item.prop]" placeholder="请输入内容" count></u--textarea>

						</u-form-item>
						<!-- 	<image style="width:15rpx; height:27rpx;" src="@/static/form/left.png" mode=""></image> -->
					</view>


					<view class="" v-if="item.type=='redio'">
						<u-form-item labelPosition="left" :required="item.hasOwnProperty('rule')" :labelWidth="item.labelWidth || 90" class="flex1 bd"
							:prop="item.prop" :label="item.label">
							<u-radio-group v-model="form[item.prop]" @change="radioGroupChange(e,item)">
								<u-radio @change="radioChange" class="" active-color="#21A068" v-for="(redioItem, index) in item.redioList" :key="index"
									:name="redioItem.name" :disabled="redioItem.disabled">
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
	export default {
		name: "formList",
		components: {
			DatePick
		},
		props: {
			formList: {
				type: Array,
				default: [],
			}
		},
		data() {
			let form = {}
			let rules={}
			this.formList.forEach(item => {
				if (!form[item.prop]) {
					this.$set(form, item.prop, '')
				}
				if(!rules[item.rule]){
					this.$set(rules, item.prop, item.rule)
				}
				
			})
			
			return {
				form: form,
				dateProp: "",
				rules:rules
			}
		},
			
		watch:{
			'form':{
				handler:function(newVal){
					// 拷贝newVal
					let newValCopy = Object.assign({},newVal)
					
					
					// 替换redio的name字段为value
					let redioLists = this.formList.filter(item=>{
						return item.type=="redio"
					})
					redioLists.forEach(item2=>{
						console.log(item2.redioList.length)
						 if(item2.redioList.length > 0){
							 item2.redioList.forEach(redioListItem=>{
								  if(newValCopy[item2['prop']] == redioListItem.name){
									  newValCopy[item2['prop']] = redioListItem.value
								  }
							 })
						 }
						
					})
					
					this.$emit('setFormData',newValCopy)
				},
				 deep:true
			}
		},
		mounted() {
			console.log(this.form,this.rules)
		},
		methods: {
			showDate(prop) {
				this.dateProp = prop
				this.$refs.popup.open('bottom')
			},
			close(value) {
				this.form[this.dateProp] = value
				this.$refs.popup.close()
			},
			radioChange(){
				
			},
			radioGroupChange(e,item){
			
				//此时this.form[item.prop]为name值
				console.log(item,"lfkdsfslfsad")
			},
			formValidate(){
				console.log("nnbnbnbnbnb")
				this.$refs.uForm.validate(valid =>{
					if(valid){
						console.log('验证通过');
					}else{
						console.log('验证失败');
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">



</style>