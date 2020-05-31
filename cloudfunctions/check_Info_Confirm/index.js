// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  //const wxContext = cloud.getWXContext()

  // 自定义逻辑
  try{
    db.collection('').where({           //补充集合名
      openid : wxContext.OPENID
    })
    .get({
      success: function(res) {
      //如果有找到对应信息，那么返回给调用处
      }
      //如果没找到调用信息，那么返回失败
    })
  }catch(e){
    console.error(e)
  }
  /*return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }*/
}