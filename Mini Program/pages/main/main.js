// pages/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wechat:"../../icons/wechat.png",
    bed:"../../icons/bed.png",
    idcard: "../../icons/idcard.png",
    food: "../../icons/food.png",
    phone: "../../icons/phone.png",
    q: "../../icons/q.png",
    qq: "../../icons/qq.png",
    rao: "../../icons/rao.png",
    tv: "../../icons/tv.png",
    news:"../../icons/news.png",
    think:"../../icons/think.png"
    // latitude: "",
    // longitude: "",
    // result: "",
    // items:""
  },
  phone:function(){
    wx.navigateTo({
      url: '../phone/phone'
    })
  },
  tv:function(){
    wx.navigateTo({
      url: '../tvlist/tvlist'
    })
  },
  dream:function(){
    wx.navigateTo({
      url: '../dream/dream'
    })
  },
  idcard:function(){
    wx.navigateTo({
      url: '../idcard/idcard'
    })
  },
  news: function () {
    wx.navigateTo({
      url: '../news/news'
    })
  },
  food:function(){
    wx.navigateTo({
      url: '../menu/menu'
    })
  },
  wechat:function(){
    wx.navigateTo({
      url: '../wechat/wechat'
    })
  },
  ai:function(){
    wx.navigateTo({
      url: '../ai/ai'
    })
  },
  think: function () {
    wx.navigateTo({
      url: '../think/think'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // wx.getLocation({
    //   type: 'wgs84',
    //   success(res) {
    //     console.log(res);
    //     that.data.latitude = res.latitude
    //     that.data.longitude = res.longitude
    //     const speed = res.speed
    //     const accuracy = res.accuracy
    //   }
    // })
    // wx.request({
    //   url: 'https://api.jisuapi.com/weather/query',
    //   data: {
    //     appkey: "7009759da54db935",
    //     location: "31.82057,117.22901"
    //     //location: this.data.latitude +','+ this.data.longitude
    //   },
    //   success: function(res) {
    //     console.log(res);       
    //     that.setData({
    //       result: res.data.result,
    //       items:res.data.daily
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})