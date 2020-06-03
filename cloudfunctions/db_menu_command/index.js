const cloud = require('wx-server-sdk')
//环境变量 ID
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
// 云函数入口函数
//传递的参数可通过event.xxx得到
exports.main = async(event, context) => {
  try {
    //添加数据
    if (event.command == "add") {
      return await db.collection('Menu').add({
        data: {
          meal_img: event.data.meal_img,
          meal_info: event.data.meal_info,
          meal_name: event.data.meal_name,
          meal_price: event.data.meal_price,
          meal_status: true,
          meal_window: event.data.meal_window
        }
      })
    }
    //更新数据
    if (event.command == "update") {
      return await db.collection('Menu').doc(event.data._id).update({
        data: {
          meal_img: event.data.meal_img,
          meal_info: event.data.meal_info,
          meal_name: event.data.meal_name,
          meal_price: event.data.meal_price,
          meal_status: true,
          meal_window: event.data.meal_window
        }
      })
    }
    //删除数据
    if(event.command == "del"){
      return await db.collection('Menu').doc(event.data._id).remove()
    }
    //查询数据
    if(event.command == "get"){
      console.log('++++')
      return await db.collection('Menu').get()
    }
  } catch (e) {
    console.error(e)
  }
}