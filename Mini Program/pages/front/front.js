// pages/front/front.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plus:"../../icons/plus.jpg",
    reduce:"../../icons/reduce.jpg",
    wechat: "../../icons/wechat.png",
    bed: "../../icons/bed.png",
    idcard: "../../icons/idcard.png",
    img1:"",
    img2:"",
    img3:"",
    user:"",
    banner:[],
    menu:[],
    latitude: "",
    longitude: "",
    result: "",
    items: "",
    num:1,
    inputValue:0
  },
  click1:function(){
    var that=this;
    that.setData({
      num:1
    })
    wx.request({
      url: 'http://192.168.2.134:8080/menu',
      data:{
        cid:1
      },
      success: function (res) {
        console.log(res);
        that.setData({
          menu: res.data
        })
      }
    })
  },
  click2: function () {
    var that = this;
    that.setData({
      num: 2
    })
    wx.request({
      url: 'http://192.168.2.134:8080/menu',
      data: {
        cid: 2
      },
      success: function (res) {
        console.log(res);
        that.setData({
          menu: res.data
        })
      }
    })
  },
  click3: function () {
    var that = this;
    that.setData({
      num: 3
    })
    wx.request({
      url: 'http://192.168.2.134:8080/menu',
      data: {
        cid: 3
      },
      success: function (res) {
        console.log(res);
        that.setData({
          menu: res.data
        })
      }
    })
  },
  priceup:function(){
    var that=this;
    wx.request({
      url: 'http://192.168.2.134:8080/priceup',
      data: {
        cid: that.data.num
      },
      success: function (res) {
        console.log(res);
        that.setData({
          menu: res.data
        })
      }
    })
  },
  pricedown: function () {
    var that = this;
    wx.request({
      url: 'http://192.168.2.134:8080/pricedown',
      data: {
        cid: that.data.num
      },
      success: function (res) {
        console.log(res);
        that.setData({
          menu: res.data
        })
      }
    })
  },
  // plus:function(){
  //   var that=this;
  //   that.setData({
  //     inputValue :that.data.inputValue++
  //   })
  // },
  // reduce: function () {
  //   var that = this;
  //   if(inputValue>0)
  //   that.setData({
  //     inputValue: that.data.inputValue--
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://192.168.2.134:8080/banner',
      success:function(res){
        console.log(res);
        that.setData({
          banner:res.data
        })
      }
    })
    wx.request({
      url: 'http://192.168.2.134:8080/menu',
      data: {
        cid: 1
      },
      success: function (res) {
        console.log(res);
        that.setData({
          menu: res.data
        })
      }
    })
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res);
        that.setData({
          latitude:res.latitude,
         longitude:res.longitude
        })
        // const speed = res.speed
        // const accuracy = res.accuracy
        wx.request({
          url: 'https://api.jisuapi.com/weather/query',
          data: {
            appkey: "7009759da54db935",
            //location: "31.82057,117.22901"
            location: that.data.latitude +','+ that.data.longitude
          },
          success: function (res) {
            console.log(res);
            that.setData({
              result: res.data.result,
              items: res.data.daily
            })
          }
        })
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})