<template>
	<view class="modal-dialog" id="modal" :style="{
		height: height + 'px',
		left: show ? '0px' : `1000px`,
	}">
		<view class="bgWhite">
			<slot></slot>
		</view>
	</view>
</template>
<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			height: 0,
			top:0
		}
	},
	mounted() {
		let that = this
		const setting = uni.getSystemInfoSync()
		const query = uni.createSelectorQuery().in(this)
		this.$nextTick(() => {
			query
				.select("#modal")
				.boundingClientRect((data) => {
					let height = setting.windowHeight - data.bottom + setting.safeAreaInsets.bottom
					that.height = height
					that.top = setting.windowHeight - height
				})
				.exec()
		})

	},
}
</script>
<style lang="scss">
.modal-dialog {
	background-color: rgba(0,0,0,.5);
	position: absolute;
	left: 0;
	width: 100%;
	z-index: 99;
	box-sizing: border-box;
	padding-bottom: env(safe-area-inset-bottom);
}
</style>
