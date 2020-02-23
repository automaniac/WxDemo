// pages/main/main.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    logo: "../../icons/btx.jpg",
    ac:"",
    pwd:"",
    user:null,
    result:"",
    inputvalue:null
  },
  getAc:function(e)
  {
    this.setData({
      ac:e.detail.value
    })
  },
  getPwd: function (e) {
    this.setData({
      pwd:e.detail.value
    })
  },
  login:function(){
    var that=this;
    wx.request({
      url: 'http://192.168.2.134:8080/login',
      data:{
        u_account:this.data.ac,
        u_password:this.data.pwd
      },
      success:function(res){
        if(res.data==true)
        {
        wx.switchTab({
          url: '../front/front'
        })
        console.log(res);
      //   that.setData({
      //     result:res.data
      //   })
      //   if(result==true){
      //     wx.navigateTo({
      //       url: '../front/front'
      //     }) 
      // }
        }
        else{
          wx.showToast({
            title: '登录失败'
          })
          that.setData({
            inputvalue:''
          })
        }
      }
    })
  },
  register:function(){
    wx.navigateTo({
      url: '../register/register'
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