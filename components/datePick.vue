<template>
	<view>
		<view style="height:780rpx;" class="br20 bgWhite">
			<view class="px30 flex bbe flex-between align-center" style="height:117rpx;">
				<text></text>
				<text class="col2 font32 font600">选择日期</text>
				<image @click="close" src="@/static/form/close.png" mode="" style="width:40rpx; height:40rpx;"></image>
			</view>
			<view class="flex flex-between flex-column  " style="height:600rpx;">
				<view class="flex mt10  flex-wrap flex-between  px40 " style="height:600rpx;">
					<picker-view :immediate-change="false"  :indicator-style="indicatorStyle"
						:value="dateTime" @change="bindChange" @pickstart="bindChange" @pickend="bindChange" class="picker-view">
						<picker-view-column>
							<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
						</picker-view-column>
					</picker-view>
				</view>

				<view class=" flex mt50 flex-center">
					<view @click="dateSubmit" class=" br44  flex flex-center align-center"
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
		name: "formPopup",
		data() {
			return {
				years: [],
				goodCate: [],
				year: 1990,
				months: [],
				month: '',
				days: [],
				dateTimeFormat: "",
				day: "",
				value: [0,0,0],
				dateTime: [999, 1, 1],
				indicatorStyle: `height: 100rpx;`
			};
		},
		watch: {
			'year': {
				handler(newVal, oldVal) {
					this.days = []
					let daysArr = this.getCountDays(newVal, this.month)
					for (let i = 1; i <= daysArr; i++) {
						this.days.push(i)
					}
				}
			},
			'month': {
				handler(newVal, oldVal) {
					this.days = []
					let daysArr = this.getCountDays(this.year, newVal)
					for (let i = 1; i <= daysArr; i++) {
						this.days.push(i)
					}
				}
			}
		},
		mounted() {
		
			this.getDate()
			this.getCountDays()
		},
		methods: {
			dateSubmit() {
				this.$nextTick(() => {
					this.dateTimeFormat = this.year + '年' + this.month + '月' + this.day + '日'
					this.$emit("close",this.dateTimeFormat)
				})

			},
			bindChange(e) {
				let val = e.detail.value
				if(val){
					this.year = this.years[val[0]]
					this.month = this.months[val[1]]
					this.day = this.days[val[2]]
					let time1 = this.year + '-' + this.month + '-' + this.day
					let time = new Date(time1).getTime() / 1000
				}
			

			},
			/*获取一个月的天数 */
			getCountDays(year, month) {
				var curDate = new Date();
				curDate.setFullYear(year)

				curDate.setMonth(month);
				/* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
				curDate.setDate(0);
				/* 返回当月的天数 */
				return curDate.getDate();
			},
			getDate() {
				let date = new Date()
				let years = []
				let year = date.getFullYear()
				let months = []
				let month = date.getMonth() + 1
				let days = []
				let day = date.getDate()
				for (let i = 1990; i <= date.getFullYear(); i++) {
					years.push(i)
				}
				for (let i = 1; i <= 12; i++) {
					months.push(i)
				}
				for (let i = 1; i <= 31; i++) {
					days.push(i)
				}
				this.years = years
				this.days = days
				this.months = months
				this.value = [9999, month - 1, day - 1]
				this.year = this.years[0]
				this.month = this.months[0]
				this.day = this.days[0]
			},
			close() {
				this.$emit("close")
			}
		},
	}
</script>

<style scoped lang="scss">
	.picker-view {
		width: 750rpx;
		height: 400rpx;
		margin-top: 10rpx;
	}

	.item {
		line-height:70rpx;
		height:100rpx;
		text-align: center;
	}
</style>