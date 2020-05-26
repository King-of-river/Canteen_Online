Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'cart-o',
				text: '点餐',
				url: '/pages/tab-order/order'
			},
			{
				icon: 'orders-o',
				text: '订单',
        url: '/pages/tab-orders/orders'
      }, 
      {
        icon: 'manager-o',
        text: '我的',
        url: '/pages/tab-my/my'
      },
      {
				//为了方便王江月调试，暂时在这里放置一个入口
        icon: 'manager-o',
        text: '管理',
        url: '/pages/manage/manage'
      }
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
