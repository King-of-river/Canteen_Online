// pages/userInfoSubmit/InfoSubmit.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    value_number: '',
    value_name: '',
    value_room: '',
    dorm: '请选择'
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
})
