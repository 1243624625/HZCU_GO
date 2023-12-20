// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境


// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database();
  const wxContext = cloud.getWXContext()
  
  const total = await db.collection('site').count();

  const data = await db.collection('site')
        .orderBy('browse','desc')
        .limit(10).get();
  const data2 = await db.collection('site')       
        .orderBy('browse','desc')
        .where({zones:'live'})
        .limit(10).get();
  const data3 = await db.collection('site')
        .orderBy('browse','desc')
        .where({zones:'study'})
        .limit(10).get();

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    data,
    data2,
    data3,
  }
}