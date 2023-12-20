// pages/map/map.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['教学楼', '宿舍楼', '校门', '食堂','运动场所','景点','生活服务','快递服务','学生服务','其他'], // 添加更多类别
    activeCategory: '教学楼', // 当前激活的类别
    subKey:'HACBZ-4Q7KW-SJPRX-37GUX-LLPE3-VDFIL',
    enable3d:false,
    showLocation:true,
    showCompass:false,
    enableOverlooking:false,
    enableZoom:true,
    enableScroll:true,
    enableRotate:false,
    enablePolygon:false,
    enableSatellite:false,
    enableTraffic:false,
    latitude:'30.332011',
    longitude:'120.15588',
    allMarkers: [
      {
        "id": 1,
        "name": '问源楼',
        "latitude": 30.32820901417811, 
        "longitude": 120.15703194635536,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "宿舍楼"
      },
      {
        "id": 2,
        "name":'思睿楼',
        "latitude": 30.329715610493086, 
        "longitude": 120.15746259741373,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 3,
        "name":'尚雅楼',
        "latitude": 30.328925638368844, 
        "longitude": 120.15746618656321,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 4,
        "name":'惟学楼',
        "latitude": 30.330274161979222, 
        "longitude": 120.15628165226681,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 5,
        "name":'求真楼',
        "latitude": 30.330508017432766, 
        "longitude": 120.15712781727922,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 6,
        "name":'致远楼',
        "latitude": 30.32280152274872,
        "longitude":  120.15721998775896,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 7,
        "name":'慕贤楼',
        "latitude": 30.3218313676273,
        "longitude":  120.15727960943896,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 8,
        "name":'明德楼',
        "latitude": 30.321436815951888, 
        "longitude": 120.15406313942074,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 9,
        "name":'精诚楼2',
        "latitude": 30.32157958724495, 
        "longitude": 120.15492579581253,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 10,
        "name":'精诚楼1',
        "latitude": 30.321263250570286, 
        "longitude":120.15493228195082,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 11,
        "name":'弘毅楼',
        "latitude": 30.321599014837375, 
        "longitude": 120.15755527031604,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category":"宿舍楼"
      },
      {
        "id": 12,
        "name": "教一",
        "latitude": 30.320159912258006,
        "longitude": 120.15483317485713,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 13,
        "name": "教二",
        "latitude": 30.320120619780276,
        "longitude": 120.15594079397233,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 14,
        "name": "教三",
        "latitude": 30.323860368796634,
        "longitude": 120.15435848044885,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 15,
        "name": "教四",
        "latitude": 30.32427711174626,
        "longitude": 120.15451941298049,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 16,
        "name": "教五",
        "latitude": 30.32493463590564,
        "longitude": 120.15419754791719,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 17,
        "name": "教六",
        "latitude": 30.324582722115778,
        "longitude": 120.15445503996783,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 18,
        "name": "教七",
        "latitude": 30.324212285181645,
        "longitude": 120.15400442887923,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 19,
        "name": "理一",
        "latitude": 30.327118344668133,
        "longitude": 120.15361830724954,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 20,
        "name": "理二",
        "latitude": 30.32666668249273,
        "longitude": 120.15359124173175,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 21,
        "name": "理三",
        "latitude": 30.32623838023,
        "longitude": 120.15359124173175,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 22,
        "name": "理四",
        "latitude": 30.326534298356975,
        "longitude": 120.15435809806915,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 23,
        "name": "理五",
        "latitude": 30.3259346738543,
        "longitude": 120.15341080494646,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 24,
        "name": "文一",
        "latitude": 30.327040472021537,
        "longitude": 120.15722704305666,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 25,
        "name": "文二",
        "latitude": 30.3267134062563,
        "longitude": 120.157272152253,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 26,
        "name": "文三",
        "latitude": 30.326884726555267,
        "longitude": 120.15830064192906,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 27,
        "name": "文四",
        "latitude": 30.32661217139336,
        "longitude": 120.15811118330451,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 28,
        "name": "文五",
        "latitude": 30.325926886492617,
        "longitude": 120.15766911318059,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 29,
        "name": "文六",
        "latitude": 30.325676641357834,
        "longitude": 120.15769640598776,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "教学楼"
      },
      {
        "id": 30,
        "name": "北秀楼",
        "latitude": 30.330928669716627,
        "longitude": 120.15675278238257,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "食堂"
      },
      {
        "id": 31,
        "name": "工程师餐厅",
        "latitude": 30.33039360481402,
        "longitude": 120.15453847661132,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "食堂"
      },
      {
        "id": 32,
        "name": "学苑餐厅",
        "latitude": 30.324122826595513,
        "longitude": 120.15710256604807,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "食堂"
      },
      {
        "id": 33,
        "name": "二食堂",
        "latitude": 30.323968641858592,
        "longitude": 120.15719187770019,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "食堂"
      },
      {
        "id": 34,
        "name": "晨苑餐厅",
        "latitude": 30.322481343193285,
        "longitude": 120.1549426731687,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "食堂"
      },
      {
        "id": 35,
        "name": "南校南门",
        "latitude": 30.319973190564124,
        "longitude": 120.15548248470205,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "校门"
      },  
      {
        "id": 36,
        "name": "南校北门",
        "latitude": 30.324980511542776,
        "longitude": 120.15625421595165,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "校门"
      },
      {
        "id": 37,
        "name": "北校南门",
        "latitude": 30.325876062022164,
        "longitude": 120.15516257335518,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "校门"
      },
      {
        "id": 38,
        "name": "北校北门",
        "latitude": 30.33216730030725,
        "longitude": 120.15564613304576,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "校门"
      },
      {
        "id": 39,
        "name": "图书馆",
        "latitude": 30.328668805098125,
        "longitude": 120.1560718630673,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "学生服务"
      },
      {
        "id": 40,
        "name": "灵峰教育超市",
        "latitude": 30.3309776127011,
        "longitude": 120.1570250300252,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "生活服务"
      },
      {
        "id": 41,
        "name": "启真超市",
        "latitude": 30.323829220288726,
        "longitude": 120.15728386637431,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "生活服务"
      },
      {
        "id": 42,
        "name": "711便利店",
        "latitude": 30.3309776127011,
        "longitude": 120.15713826444033,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "生活服务"
      },
      {
        "id": 43,
        "name": "罗森便利店",
        "latitude": 30.322361030932875,
        "longitude": 120.15428558999504,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "生活服务"
      },
      {
        "id": 44,
        "name": "北校水果店",
        "latitude": 30.3309762361491,
        "longitude": 120.15694847718117,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "生活服务"
      },
      {
        "id": 45,
        "name": "南校水果店",
        "latitude": 30.322329880376536,
        "longitude": 120.15524641592887,
        "iconPath": "../../images/icon/定位.png",
        "width": 30,
        "height": 30,
        "category": "生活服务"
      }
      
    ].map(marker => ({
      ...marker,
      callout: {
        content: marker.name,
        color: '#ffffff',
        fontSize: 12,
        borderRadius: 10,
        bgColor: '#1296db',
        padding: 5,
        display: 'ALWAYS'
      }
    })), // 用于存储所有markers的副本
    markers: [],
    circles:[],
    polylines:[],//线
    polygons:[],//面
    showDialog:false,
    currentMarker:null,
    showAllCategories: false, // 用于控制分类显示的状态
    searchQuery: '', // 用于存储搜索查询
    searchSuggestions: [], // 存储搜索建议的数组
  },

  navi1(){
    const latitude=this.data.currentMarker.latitude;
    const longitude=this.data.currentMarker.longitude;
    wx.openLocation({
      latitude,
      longitude,
      scale:18
    });
  },

  navi2(){
    let plugin = requirePlugin('routePlan');
    let key = 'HACBZ-4Q7KW-SJPRX-37GUX-LLPE3-VDFIL';  //使用在腾讯位置服务申请的key
    let referer = 'wx147358d850ffe32c';   //调用插件的app的名称
    let endPoint = JSON.stringify({  //终点
    'name':this.data.currentMarker.name,
    'latitude': this.data.currentMarker.latitude,
    'longitude': this.data.currentMarker.longitude
    });
    wx.navigateTo({
    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 过滤出类别为“教学楼”的标记
    const AtFirst = this.data.allMarkers.filter(marker => marker.category === '教学楼');
  
    // 设置markers数组为过滤后的结果
    this.setData({
      markers: AtFirst
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //const map=wx.createMapContext("map");
    //map.moveToLocation();//定位到当前位置
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
  handleMarkerTap(e) {
    // 打印事件对象，以便查看事件信息
    console.log(e);

    // 通过事件对象中的 markerId 找到对应的标记(marker)
    const marker = this.data.markers.find(item => item.id == e.markerId);

    // 如果找到了对应的标记(marker)
    if (marker) {
        // 更新页面数据，显示当前标记(marker)的信息
        this.setData({
            currentMarker: marker,
            showDialog: true  //显示一个对话框或弹窗
        });
    }
},
onTabTap: function(e) {
  const category = e.currentTarget.dataset.category;
  this.setData({
    activeCategory: category
  });
  // 根据选中的类别过滤 allMarkers
  const filteredMarkers = this.data.allMarkers.filter(marker => marker.category === category);
  this.setData({
    markers: filteredMarkers
  });
},

// 分类按钮点击事件处理函数
onCategoryTap: function() {
  this.setData({
    showAllCategories: !this.data.showAllCategories, // 切换状态
  });
},

// 点击搜索按钮时触发的函数
onSearchTap: function() {
  const that = this;
  wx.showModal({
    title: '搜索地点',
    editable: true,
    placeholderText: '请输入搜索内容',
    success: function (res) {
      if (res.confirm && res.content) {
        that.searchLocation(res.content);
      }
    }
  });
},

// 搜索地点的函数
searchLocation: function(query) {
  const searchQuery = query.toLowerCase();
  const searchedMarkers = this.data.allMarkers.filter(marker =>
    marker.name.toLowerCase().includes(searchQuery)
  );

  if (searchedMarkers.length > 0) {
    // 获取搜索到的第一个地点的位置
    const firstLocation = searchedMarkers[0];

    // 处理搜索到的地点
    this.setData({
      markers: searchedMarkers,
      activeCategory: searchedMarkers[0].category,
      latitude: firstLocation.latitude, // 更新地图中心纬度为第一个地点的纬度
      longitude: firstLocation.longitude // 更新地图中心经度为第一个地点的经度
    });
  } else {
    // 搜索失败的提示
    wx.showToast({
      title: '该地点不存在！',
      icon: 'none',
      duration: 2000
    });
  }
},


})