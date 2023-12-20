var utils = require('../../utils/util');
import {siteCollection} from "../../database/index"
const db = wx.cloud.database()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        
        isLogin: false,
        zones:['总榜','校园生活','教学办公'],
        userInfo:{},
        index : 0,
        list: [],
        //展示数据，后端数据待更新
        current: 1, // 当前页数
        pagination: {},//分页效果
    },
    /**
     * 根据选择的分区更新
     */
    onPickerChange: function(e) {
      this.setData({
          index: e.detail.value
      });
      this.getList();
    },
    
    onLoad(options) {
        this.getList()
    },
    // 页面加载时，默认显示教育分区的数据
    onLoad: function(options) {
      this.setData({
          list: this.getList()
      });
  },  

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log("PullDownRefresh")
        this.getList()
    },

    getList(){
        var that = this
        wx.cloud.callFunction({
            name: 'rank',
            data: {
                current: that.data.current
            }
        })
        .then(res => {
            console.log('success', res.result.data.data)
            wx.stopPullDownRefresh()
            if (this.data.index == 0) {            
                that.setData({
                list: res.result.data.data,
            })} else if(this.data.index == 1) {
                that.setData({
                    list: res.result.data2.data,
            })}else {
                that.setData({
                    list: res.result.data3.data,
            })
            }
            console.log(that.data.list)
        })
        .catch(err => {
            console.log('fail', err)
        })
    },
  
    async onGetSiteDataTap(event){
      const item = event.currentTarget.dataset.item
      wx.navigateTo({
        url: '/pages/index/index',
      })
    },

    
})