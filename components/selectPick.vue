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
						class="picker-view">
						<!--渲染类型 [[{value: '1',label: '江'},{value: '1',label: '江'}],[{value: '1',label: '江'},{value: '1',label: '江'}] -->
						<picker-view-column v-for="(selectListItem,index) in selectList" :key="index">
							<view class="item" v-for="(item,index2) in selectListItem" :key="index2">{{item.label}}</view>
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
	export default {
		name: "selectPick",
		props: {
			selectList: {
				type: Array,
				default: [
					[0, 1, 2, 3],
					[4, 5, 6, 7],
					[8, 1, 6, 9]
				]
			},
			selectTitle:{
				type: String,
				default:"未填写"
			}
		},
		data() {
			return {
				indicatorStyle: `height: 50px;`,
				value: []
			};
		},
		methods: {
			bindChange(e) {
				this.value =  e.detail.value
				
			},
			selsetSubmit(){
				this.$nextTick(() => {
					if(this.value.length>0){
						for(let i=0; i++; i<this.value.length){
							this.selectList[i]
						}
					}
					
					
					this.$emit("close",this.value)
				})
			},
			close(){
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