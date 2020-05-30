import Dialog from '../../dist/dialog/dialog';
Page({
  data: {
    //columns: { '杭州': 10, '宁波': 10, '温州': 10, '嘉兴': 10, '湖州': 10 },
    columns: ['三公寓一号楼', '三公寓二号楼', '三公寓三号楼', '三公寓四号楼', '三公寓五号楼'],
    selectBuilding:"",
    show: false,
    user_info: {
      user_num: '',
      user_name: '',
      user_dorm: '',
      user_room: ''
    }
  },

  onChange(event) {
    this.setData({
      selectBuilding:event.detail.value
    }),
    wx.showToast({
      title: "当前选择："+this.data.selectBuilding,
      icon:'none'
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

  setNum(event) {
    this.setData({
      'user_info.user_num': event.detail,
    })
  },
  setName(event) {
    this.setData({
      'user_info.user_name': event.detail,
    })
  },
  setRoom(event) {
    this.setData({
      'user_info.user_room': event.detail,
    })
  },
  submit_info: function() {
    var num = this.data.user_info.user_num;
    if (num.length != 10 || isNaN(num)) {
      wx.showToast({
        title: '请输入有效学工号',
        icon: 'none'
      })
      return;
    }

    var name = this.data.user_info.user_name;
    if (name.length == 0) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      })
      return;
    }

    var room = this.data.user_info.user_room;
    if (room.length != 4 || isNaN(room)) {
      wx.showToast({
        title: '请输入有效房间号',
        icon: 'none'
      })
      return;
    }

    Dialog.confirm({
      title: '提示',
      message: '确人提交认证信息?',
    }).then(() => {

    }).catch(() => {

    })

  }
})