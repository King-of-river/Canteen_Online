const app = getApp()
Page({
  data: {
    value: "",
    canteen: "全部",
    notice1: [{}],
    notice2: [{}],
    cell: [{}],
    to_recipe: [
      {
        name: "食谱管理",
        desc: "查看、修改、增添或删减食谱",
      },
    ],
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
  },
  
})

