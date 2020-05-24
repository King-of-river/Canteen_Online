import Dialog from '../../dist/dialog/dialog';
const db = wx.cloud.database();
const Menu = db.collection('Menu');
const _ = db.command;
Page({
  data: {
    good: {},
    _id: null
  },
  //页面加载
  onLoad: function(options) {
    this.setData({
      _id: (options._id == 'null' ? null : options._id)
    })
    if (options._id != 'null') {
      Menu.doc(options._id).get().then(res => {
        // console.log(res)
        this.setData({
          good: res.data
        })
      })
    }
  },

  //表单提交
  onSubmit: function(event) {
    Dialog.confirm({
        title: '提示',
        message: '确认添加或修改菜品信息？',
      })
      .then(() => {
        //数据更新
        if (this.data._id != null) {
          wx.cloud.callFunction({
            name: 'db_menu_command',
            data: {
              command:"update",
              data:event.detail.value
            },
            success: function(res) {
              console.log(res)
            },
            fail: console.error
          })
        }
        //数据添加
        if (this.data._id == null) {
          wx.cloud.callFunction({
            name: 'db_menu_command',
            data: {
              command:"add",
              data: event.detail.value
            },
            success: function(res) {
              console.log(res)
            },
            fail: console.error
          })
        }
        //退回上一界面
        wx.navigateBack({}).then(() => {
          wx.showToast({
            title: '修改成功',
            icon: "success"
          })
        })
      })
      .catch(() => {
        // on cancel
      });
  }

})