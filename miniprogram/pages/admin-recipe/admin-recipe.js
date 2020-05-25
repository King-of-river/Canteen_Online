const db = wx.cloud.database()
Page({
  data: {
    value: "",
    canteen: "全部",
    goods:{}
  },

  onShow: function() {
    db.collection("Menu").get().then(res =>{
      this.setData({
        goods:res.data
      })
    })
  },

  addMenu(e) {
    wx.navigateTo({
      url: "../recipe-modify/recipe-modify?_id="+null, //此处传参用以区别是添加还是修改
    })
  }

})