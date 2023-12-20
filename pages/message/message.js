// pages/message/message.js
var utils = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //轮播图片设置信息
        indicatorDots: true, // 是否显示面板指示点
        indicatorColor: "white", //指示点颜色
        activeColor: "#2adce2", //当前选中的指示点颜色
        autoplay: true, //是否自动切换
        circular: true, //是否采用衔接滑动
        interval: 3500, //间隔时间
        duration: 1500, //滑动时间
        windowWidth: 400,
        //学校信息
        background: utils.swiper_background,
        school_logo: utils.school_logo,

    },

    jisuan(e){// 点击计算学院出现的事件
      console.log(e)
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzA5MTY0MzQwOA==&mid=2650847681&idx=1&sn=379d2262aeac698d16860ec3cbdbd73c&send_time='] // 需要预览的图片http链接列表
      })
    },

    xinchuan(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzAxOTM5ODc0Mg==&mid=2654007801&idx=1&sn=44dd9609eaa35816e8d492d96318dcc8&send_time='],
      })
    },

    waiguoyu(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzIyNjQ3NjI5Mg==&mid=2247497322&idx=1&sn=510c6ba38fec2a123672768cc98ccc3f&send_time='],
      })
    },

    xindian(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzAwNzYzMDA4NA==&mid=2649860779&idx=1&sn=02fb334d966e2431d765288b73342ffd&send_time='],
      })
    },

    faxue(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzIwNjg5NzMyOA==&mid=2247494626&idx=1&sn=01a4f4616eb0e8f899b61d14f63670dd&send_time='],
      })
    },

    guotu(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=Mzg2OTY1MzcwNg==&mid=2247494150&idx=1&sn=1e9c0246ef6925b16f56d89d826dc1cd&send_time='],
      })
    },

    chuangye(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzIxMjg2MjEzOQ==&mid=2247487793&idx=1&sn=d9230664b73301e8ee9f64d7a09bc175&send_time='],
      })
    },

    guolv(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=Mzk0NDM3NTIxOQ==&mid=2247489613&idx=1&sn=852ee7c2bc45d9eab5fc528a87c0b510&send_time='],
      })
    },

    renwen(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=Mzg4MDk3NzYwNw==&mid=2247485842&idx=1&sn=0d34402f9581fa31475abdc777f39732&send_time='],
      })
    },

    UW(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzIzMTk2NDkxNg==&mid=2247508873&idx=1&sn=f2541aa825ef2ec7c8cce24212976e23&send_time='],
      })
    },

    gongcheng(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzIyNjMzMDMzNg==&mid=2247505181&idx=1&sn=a7373ec76127df87be0f4fcf32712636&send_time='],
      })
    },

    yixue(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzIwNzQ4MzUwMw==&mid=2247512268&idx=1&sn=d6a39701d64c7b97fdb447f2f698bd19&send_time='],
      })
    },

    yigu(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzU4NTczMjM0OQ==&mid=2247495737&idx=1&sn=22e8312ef3630889c05c18dc5cfebbea&send_time='],
      })
    },

    shang(e){
      wx.previewImage({
        urls: ['https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzI5MjM2Mjc5Ng==&mid=2247522117&idx=1&sn=9c3ab854cb56985fc5d6c8deddbac3be&send_time='],
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    windowWidth: res.windowWidth,
                })
            }
        })
    },

    //图片比例
    imgHeight: function (e) {
        var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
        var imgh = e.detail.height; //图片高度
        var imgw = e.detail.width; //图片宽度
        var swiperH = winWid * imgh / imgw + "px" //等比设置swiper的高度。 即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度  ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
        this.setData({
            Height: swiperH //设置高度
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
})