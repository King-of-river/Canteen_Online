// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

exports.main = (event, context) => {
  console.log(event)
  console.log(context)

  // 获取 WX Context (微信调用上下文)，包括OPENID、APP ID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext()

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
  return {
    event,
    openid: wxContext.OPENID,
    //appid: wxContext.APPID,
    //unionid: wxContext.UNIONID,
    //env: wxContext.ENV,
  }
}

