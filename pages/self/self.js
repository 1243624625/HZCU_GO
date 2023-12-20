// pages/self/self.js
var utils = require('../../utils/util.js');
const db = wx.cloud.database();
const userCollection = db.collection('user');
const cacheHelper = require('../../helper/cache_helper');
const pageHelper = require('../../helper/page_helper');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        useravatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
        miniprogram_name: utils.miniprogram_name,
        nickName: "未登录用户", // 用于存储用户昵称
    },

    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    },

    // 生命周期函数--监听页面加载
    onLoad: function () {
    },

    // 用户点击右上角分享到朋友圈
    onShareTimeline: function (res) {},

    // 回到首页
    backhome() {
        wx.navigateTo({
            url: "/pages/index/index",
        })
    },

    // 生命周期函数--监听页面初次渲染完成
    onReady() {},

    // 生命周期函数--监听页面显示
    onShow() {},

    // 生命周期函数--监听页面隐藏
    onHide() {},

    // 生命周期函数--监听页面卸载
    onUnload() {},

    // 页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh() {},

    // 页面上拉触底事件的处理函数
    onReachBottom() {},

    // 用户点击右上角分享
    onShareAppMessage() {
        return {
            title: '分享标题',
            path: '/pages/index/index',
        };
    },

    //系统管理选项：
    control: function(e) {
        let itemList = ['清除缓存', '后台管理'];
        wx.showActionSheet({
          itemList,
          success: async res => {
              let idx = res.tapIndex;
              if (idx == 0) {
                cacheHelper.clear();
                pageHelper.showNoneToast('清除缓存成功');
            }
            if (idx == 1) {
                //关闭当前所有页面转入管理员界面 
                    wx.reLaunch({
                        url: '../../package_Admin/pages/login/login',
                    });
            }
          },
          fail: function (res) { }
        })
    }
});