
Page({
  data: {
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
    ]
  },

  //生命周期函数--监听页面显示
  onShow() {
    this.getTabBar().init();
  },

})