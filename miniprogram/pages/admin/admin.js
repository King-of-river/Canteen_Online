const app = getApp()
Page({
  data: {
    value: "",
    canteen: "全部",
    notice1: [{}],
    notice2: [{}],
    cell: [{}],
    to_order_assis: [
      {
        name: "出餐助手",
        desc: "分批显示订单，急速出餐",
      },
    ],
    to_statistics: [
      {
        name: "订单统计",
        desc: "查看窗口经营数据",
      }
    ],
    click1(event) {
      wx.navigateTo({
        url: '../a-order-assis/a-order-assis',
      })
    },
    tap2(event) {
      wx.navigateTo({
        url: '../admin-recipe/admin-recipe',
      })
    },
  },
  
})

