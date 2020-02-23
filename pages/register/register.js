// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputvalue:null,
    logo: "../../icons/btx.jpg",
    ac: "",
    pwd1: "",
    pwd2: "",
    name: ""
  },
  getName: function(e) {
    this.setData({
      name:e.detail.value
    })
  },
  getAc: function(e) {
    this.setData({
      ac:e.detail.value
    })
  },
  getPwd1: function(e) {
    this.setData({
      pwd1:e.detail.value
    })
  },
  getPwd2: function(e) {
    this.setData({
      pwd2:e.detail.value
    })
  },
  register: function() {
    var that=this;
    var na=that.data.name;
    var acc=that.data.ac;
    var p1=that.data.pwd1;
    var p2=that.data.pwd2;
    console.log("name= " + na + "acc= " + acc + "p1= " + p1 + "p2= " +p2);
    if (na != '' && acc != '' && p1 != '' && p1 == p2) {
      wx.request({
        url: 'http://192.168.2.134:8080/register',
        data:{
          u_name:this.data.name,
          u_password:this.data.pwd1,
          u_account:this.data.ac     
        },
        success: function (res) {
          console.log(res);
          if(res.data==true)
          {
            wx.navigateBack({
              
            })
            wx.showToast({
              title: '注册成功!',
            })
          }else{
            wx.showToast({
              title: '注册失败!',
            })
            that.setData({
              inputvalue: ''
            })
          }
        }
      })
      // console.log("name=" + na + "account=" + acc + "pwd1=" + p1 + "pwd2=" + p2);
    } else {
      wx.showToast({
        title: 'Opps!输入有误，请重新输入！',
        icon: ':C',
      })
      that.setData({
        inputvalue:''
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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