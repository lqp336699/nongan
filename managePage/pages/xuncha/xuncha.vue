<template>
	<view class="px24 page pt1">
		<view class="bgWhite br20 py40 px30 mt20" v-for="item in list" :key="item.id">
			<view class="flex  flex-between align-center">
				<text>{{$u.timeFormat(item.create_time, 'yyyy-mm-dd hh:MM')}}</text>
				
				<image style="width:27rpx; height:30rpx;" src="/static/xuncha/edit.png" mode=""></image>
			</view>
			<view class="mt20">
				<text>日期: {{$u.timeFormat(item.create_time, 'yyyy-mm-dd')}}</text>
			</view>
			<view class="mt20">
				<text>地块名称: {{item.main_name}}</text>
			</view>
			<view class="mt20">
				<text>地块面积: </text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				list:[],
				form:{
					page:1,
					limit:10,
					user_patrol_id:'',
					time:1
				}
			}
		},
		
		computed: {
			...mapState({
				userInfo: (state) => state.identity.userInfo
			})
		},
		
		onLoad(){
			this.form.user_patrol_id=this.userInfo.id
			this.getList()
		},
		methods: {
			getList(){
				this.$http({
					url: "/Data/patrol_index",
					data: {
						...this.form
					},
					
				}).then(res=>{
					this.list = res.data.list
					console.log(this.list,"pppppppp")
				})
				
			}
		}
	}
</script>

<style>

</style>
