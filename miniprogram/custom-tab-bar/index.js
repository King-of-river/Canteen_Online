const app = getApp();
Component({
  //数据
  data: {
    selected: 0,//当前tabBar页面
    color: "#cdcdcd",//未选中tabBar时的文字颜色
    selectedColor: "#22385d",//选中时tabBar文字颜色
    //addImgPath:'/pages/resource/image/tab-bar-image/add.png',//添加发布图标
    // tabBar对象集合
    list: [
      {
        pagePath: "/pages/tab-order/order",
        //iconPath: "/pages/resource/image/tab-bar-image/find.png",
        //selectedIconPath: "/pages/resource/image/tab-bar-image/select_find.png",
        text: "点餐"
      },
      {
        pagePath: "/pages/tab-extend/extend",
        //iconPath: "/pages/resource/image/tab-bar-image/special.png",
        //selectedIconPath: "/pages/resource/image/tab-bar-image/select_special.png",
        text: "扩展"
      },
      {
        pagePath: "/pages/tab-orders/orders",
        //iconPath: "/pages/resource/image/tab-bar-image/message.png",
        //selectedIconPath: "/pages/resource/image/tab-bar-image/select_message.png",
        text: "订单"
      },
      {
        pagePath: "/pages/tab-my/my",
        //iconPath: "/pages/resource/image/tab-bar-image/my.png",
        //selectedIconPath: "/pages/resource/image/tab-bar-image/select_my.png",
        text: "我的"
      }
    ]
  },
  methods: {
    // tabBar切换事件
    tab_bar_index(e) {
      const url = e.currentTarget.dataset.path
      wx.switchTab({ url })
    },

    // 发布添加按钮跳转
    // tab_bar_add() {
    //   var url = "/pages/tab-add/add"
    //   wx.navigateTo({url})
    // }
  }
})