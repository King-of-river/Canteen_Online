Page({
  data: {
    nickname:"昵称",
    status:"123456",
  },
  
  //生命周期函数--监听页面显示
  onShow() {
    this.getTabBar().init();
  },
})