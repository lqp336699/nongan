<!--
此文件为开发者工具生成，生成时间: 2023/11/6上午10:28:29
使用方法：
在 E:\work\nongan\unpackage\dist\dev\mp-weixin\managePage\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 E:\work\nongan\unpackage\dist\dev\mp-weixin\managePage\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
	
  <view class="sk-container">
    <view class="page data-v-3c704246">
      <view class="data-v-3c704246">
        <view  class="ranking data-v-3c704246 vue-ref" data-ref="ranking">
          <view class="overH manageRanking--overH flex manageRanking--flex flex-column manageRanking--flex-column page manageRanking--page pb40 manageRanking--pb40 data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
            <view  class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="position:fixed;z-index:10;">
              <view class="uni-navbar nav-bar--uni-navbar data-v-6bda1a90 nav-bar--data-v-6bda1a90 uni-nvue-fixed nav-bar--uni-nvue-fixed">
                <view class="uni-navbar__content nav-bar--uni-navbar__content data-v-6bda1a90 nav-bar--data-v-6bda1a90 uni-navbar--fixed nav-bar--uni-navbar--fixed" style="background-color:rgba(0,0,0,0);border-bottom-color:#fff;">
                  <view  class="data-v-6bda1a90 nav-bar--data-v-6bda1a90">
                    <view class="uni-status-bar bar--uni-status-bar" style="height:20px;"></view>
                  </view>
                  <view class="uni-navbar__header nav-bar--uni-navbar__header data-v-6bda1a90 nav-bar--data-v-6bda1a90" style="color:#fff;background-color:rgba(0,0,0,0);height:44px;">
                    <view class="uni-navbar__header-btns nav-bar--uni-navbar__header-btns uni-navbar__header-btns-left nav-bar--uni-navbar__header-btns-left data-v-6bda1a90 nav-bar--data-v-6bda1a90" data-event-opts="tap,onClickLeft,$event" style="width:0px;"></view>
                    <view class="uni-navbar__header-container nav-bar--uni-navbar__header-container data-v-6bda1a90 nav-bar--data-v-6bda1a90" data-event-opts="tap,onClickTitle,$event">
                      <view class="uni-navbar__header-container-inner nav-bar--uni-navbar__header-container-inner data-v-6bda1a90 nav-bar--data-v-6bda1a90">
                        <text class="uni-nav-bar-text nav-bar--uni-nav-bar-text uni-ellipsis-1 nav-bar--uni-ellipsis-1 data-v-6bda1a90 nav-bar--data-v-6bda1a90 sk-transparent sk-text-14-2857-14 sk-text" style="color:#fff;">排行</text>
                      </view>
                    </view>
                    <view class="uni-navbar__header-btns nav-bar--uni-navbar__header-btns uni-navbar__header-btns-right nav-bar--uni-navbar__header-btns-right data-v-6bda1a90 nav-bar--data-v-6bda1a90" data-event-opts="tap,onClickRight,$event" style="width:60px;"></view>
                  </view>
                </view>
                <view class="uni-navbar__placeholder nav-bar--uni-navbar__placeholder data-v-6bda1a90 nav-bar--data-v-6bda1a90">
                  <view  class="data-v-6bda1a90 nav-bar--data-v-6bda1a90">
                    <view class="uni-status-bar bar--uni-status-bar" style="height:20px;"></view>
                  </view>
                  <view class="uni-navbar__placeholder-view nav-bar--uni-navbar__placeholder-view data-v-6bda1a90 nav-bar--data-v-6bda1a90" style="height:44px;"></view>
                </view>
              </view>
            </view>
            <view class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="height:340px;position:fixed;width:100%;z-index:1;">
              <view class="relactive manageRanking--relactive data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="height:340px;">
                <image mode="true" class="absolute manageRanking--absolute data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-image" style="width:100%;height:312px;z-index:1;"></image>
                <view class="absolute manageRanking--absolute w100 manageRanking--w100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="z-index:2;">
                  <view class="flex manageRanking--flex w100 manageRanking--w100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <view class="br68 manageRanking--br68 ml36 manageRanking--ml36 border-box manageRanking--border-box bgWhite manageRanking--bgWhite flex manageRanking--flex flex-between manageRanking--flex-between align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f"
                      style="background-color:rgba(255,255,255,0.3);width:186px;margin-top:186px;">
                      <view class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f flex manageRanking--flex border-box manageRanking--border-box align-center manageRanking--align-center px54 manageRanking--px54 py14 manageRanking--py14 flex-center manageRanking--flex-center br68 manageRanking--br68 active1 manageRanking--active1"
                        data-event-opts="tap,actived,1">
                        <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-846 sk-text">红榜</text>
                      </view>
                      <view class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f flex manageRanking--flex border-box manageRanking--border-box align-center manageRanking--align-center px54 manageRanking--px54 py14 manageRanking--py14 flex-center manageRanking--flex-center br68 manageRanking--br68 colf manageRanking--colf"
                        data-event-opts="tap,actived,2">
                        <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-710 sk-text">黑榜</text>
                      </view>
                    </view>
                  </view>
                  <view class="w100 manageRanking--w100 flex manageRanking--flex mt50 manageRanking--mt50 flex-center manageRanking--flex-center bgWhite manageRanking--bgWhite data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="height:60px;border-radius:17px 17px 0 0;">
                    <view class="flex manageRanking--flex flex-around manageRanking--flex-around mt32 manageRanking--mt32 font28 manageRanking--font28 data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="width:387px;border-bottom:1px solid #E8E8E8;">
                      <view class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f activeStatus manageRanking--activeStatus sk-transparent sk-text-14-2857-904 sk-text" data-event-opts="tap,activedStatus,1">月度</view>
                      <view class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-172 sk-text" data-event-opts="tap,activedStatus,2">季度</view>
                      <view class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-991 sk-text" data-event-opts="tap,activedStatus,3">年度</view>
                    </view>
                  </view>
                  <view class="px26 manageRanking--px26 bgWhite manageRanking--bgWhite border-box manageRanking--border-box align-center manageRanking--align-center flex manageRanking--flex flex-between manageRanking--flex-between w100 manageRanking--w100 col5 manageRanking--col5 data-v-6c06fc9f manageRanking--data-v-6c06fc9f"
                    style="height:43px;">
                    <view class="py16 manageRanking--py16 flex manageRanking--flex align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                      <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-176 sk-text">排名</text>
                      <text class="ml100 manageRanking--ml100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-159 sk-text">主体名称</text>
                    </view>
                    <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-494 sk-text">评分</text>
                  </view>
                </view>
              </view>
            </view>
            <view class="bgWhite manageRanking--bgWhite flex manageRanking--flex flex-column manageRanking--flex-column align-center manageRanking--align-center flex1 manageRanking--flex1 mb30 manageRanking--mb30 data-v-6c06fc9f manageRanking--data-v-6c06fc9f"
              style="width:412px;margin-top:340px;">
              <view class="w100 manageRanking--w100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="border-bottom:1px solid #E9E9E9;">
                <view class="flex manageRanking--flex py30 manageRanking--py30 flex-between manageRanking--flex-between align-center manageRanking--align-center border-box manageRanking--border-box data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="padding-left:8px;padding-right:19px;">
                  <view class="flex manageRanking--flex align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <image mode="true" class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-image" style="width:43px;height:43px;"></image>
                    <text class="ml50 manageRanking--ml50 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-766 sk-text">射洪大榆镇凤姐蜂蜜养殖场</text>
                  </view>
                  <view class="font32 manageRanking--font32 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-981 sk-text">98</text>
                  </view>
                </view>
              </view>
              <view class="w100 manageRanking--w100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="border-bottom:1px solid #E9E9E9;">
                <view class="flex manageRanking--flex py30 manageRanking--py30 flex-between manageRanking--flex-between align-center manageRanking--align-center border-box manageRanking--border-box data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="padding-left:8px;padding-right:19px;">
                  <view class="flex manageRanking--flex align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <image mode="true" class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-image" style="width:43px;height:43px;"></image>
                    <text class="ml50 manageRanking--ml50 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-435 sk-text">射洪大榆镇凤姐蜂蜜养殖场</text>
                  </view>
                  <view class="font32 manageRanking--font32 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-741 sk-text">98</text>
                  </view>
                </view>
              </view>
              <view class="w100 manageRanking--w100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="border-bottom:1px solid #E9E9E9;">
                <view class="flex manageRanking--flex py30 manageRanking--py30 flex-between manageRanking--flex-between align-center manageRanking--align-center border-box manageRanking--border-box data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="padding-left:8px;padding-right:19px;">
                  <view class="flex manageRanking--flex align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <image mode="true" class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-image" style="width:43px;height:43px;"></image>
                    <text class="ml50 manageRanking--ml50 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-104 sk-text">射洪大榆镇凤姐蜂蜜养殖场</text>
                  </view>
                  <view class="font32 manageRanking--font32 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-260 sk-text">98</text>
                  </view>
                </view>
              </view>
              <view class="w100 manageRanking--w100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="border-bottom:1px solid #E9E9E9;">
                <view class="flex manageRanking--flex py30 manageRanking--py30 flex-between manageRanking--flex-between align-center manageRanking--align-center border-box manageRanking--border-box data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="padding-left:8px;padding-right:19px;">
                  <view class="flex manageRanking--flex align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <view class="flex manageRanking--flex flex-center manageRanking--flex-center align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="width:43px;height:43px;">
                      <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-opacity">4</text>
                    </view>
                    <text class="ml50 manageRanking--ml50 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-456 sk-text">射洪大榆镇凤姐蜂蜜养殖场</text>
                  </view>
                  <view class="font32 manageRanking--font32 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-323 sk-text">98</text>
                  </view>
                </view>
              </view>
              <view class="w100 manageRanking--w100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="border-bottom:1px solid #E9E9E9;">
                <view class="flex manageRanking--flex py30 manageRanking--py30 flex-between manageRanking--flex-between align-center manageRanking--align-center border-box manageRanking--border-box data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="padding-left:8px;padding-right:19px;">
                  <view class="flex manageRanking--flex align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <view class="flex manageRanking--flex flex-center manageRanking--flex-center align-center manageRanking--align-center data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="width:43px;height:43px;">
                      <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-opacity">5</text>
                    </view>
                    <text class="ml50 manageRanking--ml50 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-692 sk-text">射洪大榆镇凤姐蜂蜜养殖场</text>
                  </view>
                  <view class="font32 manageRanking--font32 col2 manageRanking--col2 data-v-6c06fc9f manageRanking--data-v-6c06fc9f">
                    <text class="data-v-6c06fc9f manageRanking--data-v-6c06fc9f sk-transparent sk-text-14-2857-106 sk-text">98</text>
                  </view>
                </view>
              </view>
              <view class="w100 manageRanking--w100 data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="border-bottom:1px solid #E9E9E9;">
                <view class="flex manageRanking--flex py30 manageRanking--py30 flex-between manageRanking--flex-between align-center manageRanking--align-center border-box manageRanking--border-box data-v-6c06fc9f manageRanking--data-v-6c06fc9f" style="padding-left:8px;padding-right:19px;"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
	
  </view>
</template>

<style scoped lang="scss">
	
	/*
	此文件为开发者工具生成，生成时间: 2023/11/6上午10:28:29
	
	在 E:\work\nongan\unpackage\dist\dev\mp-weixin\managePage\pages\index\index.wxss 中引入样式
	```
	@import "./index.skeleton.wxss";
	```
	
	更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
	*/
	.sk-transparent {
	    color: transparent !important;
	  }
	.sk-text-14-2857-14 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 45.8738rpx;
	    position: relative !important;
	  }
	.sk-text {
	    background-origin: content-box !important;
	    background-clip: content-box !important;
	    background-color: transparent !important;
	    color: transparent !important;
	    background-repeat: repeat-y !important;
	  }
	.sk-text-14-2857-846 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-710 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-904 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-172 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-991 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-176 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-159 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-494 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-766 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-981 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 43.3252rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-435 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-741 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 43.3252rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-104 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-260 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 43.3252rpx;
	    position: relative !important;
	  }
	.sk-opacity {
	    opacity: 0 !important;
	  }
	.sk-text-14-2857-456 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-323 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 43.3252rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-692 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 38.2282rpx;
	    position: relative !important;
	  }
	.sk-text-14-2857-106 {
	    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
	    background-size: 100% 43.3252rpx;
	    position: relative !important;
	  }
	.sk-image {
	    background: #EFEFEF !important;
	  }
	.sk-container {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    overflow: hidden;
	    background-color: transparent;
	  }
	
	
</style>