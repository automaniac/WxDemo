// pages/jiemeng/jiemeng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 keyword:"",
 list:[],
 pic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579503025&di=cca5c8e6ac4639d337d8fba13298ad20&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F460%2Fw794h466%2F20180825%2F7VQZ-hifuvpf7028541.jpg",
    wheater:false
  },
  getq:function(e){
    this.setData({
      keyword:e.detail.value
    })
  },
  test:function(){
    var that=this;
  wx.request({
    url: 'https://api.jisuapi.com/jzw/search',
    data: {
      keyword: this.data.keyword,
      appkey: "421ff8ae34f37e61",
      pagenum:1,
      pagesize:1
    },
    success:function(res){
      console.log(res);
      that.setData({
        list:res.data.result.list
      })
    }
  })
  },
  showAnswer:function(){
    var that=this;
    that.setData({
      wheater:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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