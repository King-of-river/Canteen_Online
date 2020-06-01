import Dialog from '../../dist/dialog/dialog';
Page({
  data: {
    columns: ['三公寓一号楼', '三公寓二号楼', '三公寓三号楼', '三公寓四号楼', '三公寓五号楼'],
    selectBuilding: '三公寓一号楼',
    show: false,
    flag: {
      sw_num_f: true,
      room_f: true,
      phone_f: true
    },

    building: '',
    room: '',

    user_info: {
      is_admin: true,
      name: '',
      openId: '',
      phone_num: '',
      site: '',
      sw_num: ''
    }
  },

  onShow() {
    this.setData({
      'user_info.openId':getApp().globalData.openId
    })
  },

  picker_onChange(event) {
    this.setData({
        selectBuilding: event.detail.value
      }),
      wx.showToast({
        title: "当前选择：" + this.data.selectBuilding,
        icon: 'none'
      })
  },

  showPopup() {
    this.setData({
      show: true
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },
  //学工号设置
  setNum(event) {
    if (event.detail.length != 10 || isNaN(event.detail)) {
      this.setData({
        'flag.sw_num_f': false
      })
    } else {
      this.setData({
        'flag.sw_num_f': true
      })
      this.setData({
        'user_info.sw_num': event.detail,
      })
    }

  },

  //姓名
  setName(event) {
    this.setData({
      'user_info.name': event.detail,
    })
  },

  //房间号
  setRoom(event) {
    if (event.detail.length != 4 || isNaN(event.detail)) {
      this.setData({
        'flag.room_f': false
      })
    } else {
      this.setData({
        'flag.room_f': true
      })
      this.setData({
        room: event.detail,
      })
    }
  },
  //电话号码
  setPhone_num(event) {
    if (event.detail.length != 11 || isNaN(event.detail)) {
      this.setData({
        'flag.phone_f': false
      })
    } else {
      this.setData({
        'flag.phone_f': true,
        'user_info.phone_num': event.detail,
      })

    }
  },

  submit_info: function() {
    Dialog.confirm({
      title: '提示',
      message: '确人提交认证信息?',
    }).then(() => {
      console.log(this.data.user_info)
    }).catch(() => {

    })

  }
})