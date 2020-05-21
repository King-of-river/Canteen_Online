<<<<<<< HEAD
import Dialog from '../../dist/dialog/dialog';
Page({
  data: {
    dec:"菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍"
  },
  //删除事件
  btnDel(e){
    Dialog.confirm({
      title: '提示',
      message: '确认删除该菜品？',
    })
      .then(() => {
        //数据库删除操作
        wx.navigateBack({})
          .then(() => {
            wx.showToast({
              title: '删除成功',
              icon: "success"
            })
          })
      })
      .catch(() => {
        // on cancel
      });
  },

  //确认添加/修改事件
  btnAOM(e){
    Dialog.confirm({
      title: '提示',
      message: '确认添加或修改菜品信息？',
    })
      .then(() => {
        //数据库添加或修改操作
        wx.navigateBack({})
          .then(()=>{
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
=======
import Dialog from '../../dist/dialog/dialog';
Page({
  data: {
    dec:"菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍菜品介绍"
  },
  //删除事件
  btnDel(e){
    Dialog.confirm({
      title: '提示',
      message: '确认删除该菜品？',
    })
      .then(() => {
        //数据库删除操作
        wx.navigateBack({})
          .then(() => {
            wx.showToast({
              title: '删除成功',
              icon: "success"
            })
          })
      })
      .catch(() => {
        // on cancel
      });
  },

  //确认添加/修改事件
  btnAOM(e){
    Dialog.confirm({
      title: '提示',
      message: '确认添加或修改菜品信息？',
    })
      .then(() => {
        //数据库添加或修改操作
        wx.navigateBack({})
          .then(()=>{
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
>>>>>>> develop
})