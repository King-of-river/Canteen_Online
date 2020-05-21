import Dialog from '../../dist/dialog/dialog';
import Toast from '../../dist/toast/toast';
Page({
  data:{
    show:false
  },

 showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onSubmit(){
    Dialog.confirm({
      title: '订单信息确认',
      message: '菜品名:\n预计送达时间：\n价格：',
      messageAlign:"left",
    })
      .then(() => {
        Toast.success("订单确认，跳转到订单页面");
      })
      .catch(() => {
        // on cancel
      });
  }
})