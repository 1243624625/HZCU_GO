// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // 获取数据库和集合
  const db = cloud.database()
  //选择逻辑
  const type = event.type
  if(type === 0){//教学办公
  }else if (type === 1){//校园生活
  }else { //宝藏空间
  }
  const collection =db.collection("site")
  //从集合 查询
  const res = await collection.get()
  return {
    name:"地点信息",
    liveRooms:res.data
  }
}