// pages/lo_summary/lo_summary.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTopTab: "1",
        demo: [{
            image: '/images/place_intro/实验室1.jpg',
            title: '教学办',
            address: '理四-338',
            describe: '内有美女老师！',
            count: '888',
            delCount: '666'
        }, {
            image: '/images/place_intro/实验室2.jpg',
            title: '学工办',
            address: '理四-336',
            describe: '也有美女老师！',
            count: '888',
            delCount: '666'
        }, {
            image: '/images/place_intro/实验室2.jpg',
            title: '实验中心',
            address: '理四-213A',
            describe: '没见过的地方。',
            count: '888',
            delCount: '666'
        },{
            image: '/images/place_intro/实验室1.jpg',
            title: '党委书记办',
            address: '理四-346',
            describe: '这个地方没去过。',
            count: '888',
            delCount: '666'
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.lin.renderWaterFlow(this.data.demo, false, () => {
            console.log('渲染成功')
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    //顶部选项卡的切换函数
    changeTabs: function (e) {
        console.log('Tab changed to:', e.detail.activeKey);
        this.setData({
            currentTopTab: e.detail.activeKey
        });
    },

    Gotopage: function () {
        wx.navigateTo({
            url: '/packageA/pages/place_page',
        })
    }
})