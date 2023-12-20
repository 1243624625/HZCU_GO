// 引入微信服务器SDK
const cloud = require('wx-server-sdk');

// 初始化云环境
cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
});

// 创建数据库实例
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext();

    // 从event中获取用户提交的信息
    const { name, type } = event; // 使用 'name' 和 'type' 作为字段

    // 可选：数据验证逻辑
    // 检查用户名是否已经存在，邮箱格式是否正确等
    const userExists = await db.collection('user').where({
        name: name
    }).count();

    if (userExists.total > 0) {
        return { success: false, error: '用户名已存在' };
    }

    // 将用户信息插入数据库
    try {
        const result = await db.collection('user').add({
            data: {
                _openid: wxContext.OPENID, // 使用用户的OPENID作为唯一标识
                name: name,
                //type: type, // 用户类型，如 'student'
            }
        });

        return { success: true, id: result._id };
    } catch (error) {
        return { success: false, error: error };
    }
}
