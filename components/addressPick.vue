<template>
	<view>
		<view style="height:780rpx;" class="br20 flex flex-between  flex-column bgWhite">

			<view class="px30 flex bbe flex-between align-center" style="height:117rpx;">
				<text></text>
				<text class="col2 font32 font600">{{selectTitle}}</text>
				<image @click="close" src="@/static/form/close.png" mode="" style="width:40rpx; height:40rpx;"></image>
			</view>

			<view class="flex flex-between flex-column  " style="height:600rpx;">
				<view class="flex mt10  flex-wrap flex-between  px40 " style="height:600rpx;">
					<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange"
						@pickstart="bindStart" @pickend="bindPickend" class="picker-view">
						<picker-view-column>
							<view class="item" v-for="(item,index) in provinces" :key="index">{{item.label}}</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item,index) in citys" :key="index">{{item.label}}</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item,index) in regions" :key="index">{{item.label}}</view>
						</picker-view-column>
						
					</picker-view>

				</view>


				<view class=" flex mb20  flex-center">
					<view @click="selsetSubmit" class=" br44  flex flex-center align-center"
						style="width:690rpx; height:88rpx; background:#1F9A64;">
						<text class="colf">确定</text>
					</view>
				</view>


			</view>
		</view>

	</view>
</template>

<script>
	import area from '@/utils/area.js'
	export default {
		name: "addressPick",
		props: {
			
			selectTitle: {
				type: String,
				default: "未填写"
			}
		},
		
		data() {
			const area = area
			return {
				indicatorStyle: `height: 50px;`,
				value: [0,0],
				formVal: [],
				loading:false,
				selectList:[],
				city:'',
				val:[],
				region:'',
				province:'',
				provinces:[],
				regions:[],
				citys:[]
			};
		},
		created(){
			 let arr1 = area.map(item=>{
				return {label:item.label,value:item.value}
			})
			this.provinces=arr1
			this.citys = area[0].children
			this.regions=area[0].children[0].children
			console.log(this.provinces,this.citys,this.regions )
			
			
			// this.selectList.forEach(()=>{
			// 	this.value.push(0)
			// })
			// let string = ""
			// if (this.value) {
			// 	for (let i = 0; i <= this.value.length - 1; i++) {
			// 		string += this.selectList[i][this.value[i]]['label'] + ''
			// 	}
			
			// 	this.formVal = string
			// }
			
		},
		watch:{
			province:{
				handler(newVal,oldVal){
						let activeProvince = area.filter(item=>{
							return item.value == newVal.value
						})
						let activeCity = {}
						if(activeProvince[0].children.length < this.val[1]){
							activeCity = activeProvince[0].children[this.val[1]]
						}else{
							activeCity = activeProvince[0].children[activeProvince[0].children.length-1]
						}
						
						this.citys = activeProvince[0].children
						this.regions = activeCity.children
				}
			},
			city:{
				handler(newVal,oldVal){
						let activeProvince = area.filter(item=>{
							return item.value == this.province.value
						})
						let activeRegions = activeProvince[0].children.filter(item=>{
							return item.value == newVal.value
						})
						this.regions = activeRegions[0].children
						this.region = activeRegions[0].children[0]
					
				}
			}
		},
		methods: {
			bindStart(){
				this.loading=true
			},
			bindChange(e) {
				this.loading=true
				this.$nextTick(() => {
					let val = e.detail.value
					this.val = val
					this.province =this.provinces[val[0]] 
					this.city = this.citys[val[1]] 
					this.region = this.regions[val[2]] 
					
				})
			},
			bindPickend(){
				this.loading=false
			},
			selsetSubmit() {
				if(!this.loading){
					let string =""
					if( this.province.label && this.city.label && this.region.label){
						 string = this.province.label + "   " +  this.city.label + "   " + this.region.label	
					}else{
						string = area[0].label  + "    " + area[0].children[0].label + "   " + area[0].children[0].children[0].label
					}
					
					this.$emit("close", string)
				}
			},
			close() {
				this.$emit("close")
			}
		}
	}
</script>

<style scoped lang="scss">
	.picker-view {
		width: 750rpx;
		height: 300rpx;
		margin-top: 20rpx;
	}

	.item {
		line-height: 100rpx;
		text-align: center;
	}
</style>