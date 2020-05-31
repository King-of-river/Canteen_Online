//app.js
App({

  globalData: {
    userOpenID: "",
    userNickname: "",
    userAvatarUrl: "",
    userDepartment: "",
    userName: "",
    userNumber: ""
  },

  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'test-iqvto',
      })
    }
    this.enterMainPage(this.isAlreadyLogin());
  },

  isAlreadyLogin() {
    try {
      //从缓存中获取用户信息
      var alreadyLogin = wx.getStorageSync('user_info');
     if (alreadyLogin) {
        
        //设置globalData（这里写）
        return true;
     }

     //如果缓存没有了，要从数据库中搜寻（调用云函数）
     wx.cloud.callFunction({
      name: 'login',
      success: function(res){
        //从云函数获取用户信息。（云函数内写）
        //设置globalData（这里写）
      },
      fail: console.error
     })

     //实在无法获取用户信息，那么进入认证页面。
     //从认证页面，填写用户信息，上传数据库，然后存入缓存（认证页面写）
     return false;
    } catch (e) {
      //排除错误
    }
  },

  enterMainPage(flag) {
    if (flag) {
      wx.redirectTo({
        url: 'pages/userInfoSubmit/InfoSubmit',
      })
    } else {
      wx.switchTab({
        url: 'pages/tab-order/order',
      })
    }
  }

})
