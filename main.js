import App from './App'
import Request from '@/utils/request.js'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from '@/uni_modules/uview-ui'
import store from '@/store/index.js'
import permission from 'utils/permission.js'







Vue.prototype.$http = Request.http


Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(uView)



uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: 'rpx'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			size: 30
		}
		// 其他组件属性配置
		// ......
	}
})





const app = new Vue({
  ...App,
  store,
   beforeCreate () {
          // this就是Vue实例对象vm   ,vm上有$on,$emit,$off，直接用它就行
          Vue.prototype.$bus = this   // 安装全局事件总线
      }
})
app.$mount()

permission()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif