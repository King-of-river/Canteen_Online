const cloud = require('wx-server-sdk')
//环境变量 ID
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
//传递的参数可通过event.xxx得到
exports.main = async(event, context) => {
  try {
    //添加数据
    if (event.command == 'add') {
      console.log(event)
      return await db.collection('User_info').add({
        data: {
          is_admin: event.data.is_admin,
          name: event.data.name,
          openId: event.data.openId,
          phone_num: event.data.phone_num,
          site: event.data.site,
          sw_num: event.data.sw_num
        }
      })
    }
    //更新数据
    if (event.command == "update") {
      return await db.collection('User_info').where({openId:event.data.openId}).update({
        data: {
          is_admin: event.data.is_admin,
          name: event.data.name,
          openId: event.data.openId,
          phone_num: event.data.phone_num,
          site: event.data.site,
          sw_num: event.data.sw_num
        }
      })
    }
    //删除数据
    if (event.command == "del") {
      return await db.collection('Menu').doc(event.data._id).remove()
    }
    //查询数据
    if (event.command == "get") {
      console.log('++++')
      return await db.collection('Menu').get()
    }
  } catch (e) {
    console.error(e)
  }
}