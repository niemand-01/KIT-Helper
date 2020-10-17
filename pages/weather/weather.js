// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    place:['上海市','上海市','黄浦区'],
    weatherimg: '../../pics/weather.jpg',
    weatherword: '多云'

  },
  citychange:function(e){
    this.setData({
      place:e.detail.value,
      weather:''
    })
    this.weatherchange();
  },

  weatherchange:function(){
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.place[1],
        key:'913aa68b6d794573a53e5542e63d6de5'
      },
      success:function(res){
        that.setData({
          weather: res.data.HeWeather6[0].now,
        })
        console.log(that.data.weather)
      }
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