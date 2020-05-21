const app = getApp()

Page({
  data: {
    value:"",        //当前输入的值，van-search的value字段。
    canteen:"全部",  //搜索框左侧文本，van-search的label字段。
    goods:[
      {
        price:"10",
        desc:"套餐描述",
        name:"套餐名称",
        imageURL: "cloud://test-iqvto.7465-test-iqvto-1302018735/my-image.jpg",
      },
      {
        price: "10",
        desc: "套餐描述",
        name: "套餐名称",
        imageURL: "cloud://test-iqvto.7465-test-iqvto-1302018735/my-image.jpg",
      },
      {
        price: "10",
        desc: "套餐描述",
        name: "套餐名称",
        imageURL: "cloud://test-iqvto.7465-test-iqvto-1302018735/my-image.jpg",
      }
    ],

  },

  onShow() {
    this.getTabBar().init();
  },

})
