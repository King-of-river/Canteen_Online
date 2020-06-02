const app = getApp()

Page({
  data: {
    value: "",
    canteen: "全部",
    goods:[]
  },

  onShow() {
    this.getTabBar().init(); //初始化底部导航栏
    wx.cloud.callFunction({
      name: 'db_menu_command',
      data: {
        command: "get",
      }
    }).then(res => {
      this.setData({
        goods: res.result.data,
      })
    })
  },

  onLoad: function() {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              // 用户已经授权过
              // 根据自己的需求有其他操作再补充
            }
          });
        } else {
          // 用户没有授权
          wx.redirectTo({
            url: '../authorization/authorization',
          })
        }
      }
    });
  },
})