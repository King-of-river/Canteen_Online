Page({
  data: {
    value: "",
    canteen: "全部",
    goods: [
      {
        price: "10",
        desc: "套餐描述",
        name: "套餐名称",
        canteen:"食堂",
        imageURL: "cloud://test-iqvto.7465-test-iqvto-1302018735/my-image.jpg",
      },
      {
        price: "10",
        desc: "套餐描述",
        name: "套餐名称",
        canteen: "食堂",
        imageURL: "cloud://test-iqvto.7465-test-iqvto-1302018735/my-image.jpg",
      },
      {
        price: "10",
        desc: "套餐描述",
        name: "套餐名称",
        canteen: "食堂",
        imageURL: "cloud://test-iqvto.7465-test-iqvto-1302018735/my-image.jpg",
      }
    ],
  },

  addMenu(e){
    wx.navigateTo({
      url: '../recipe-modify/recipe-modify',//此处传参用以区别是添加还是修改
    })
  }
})