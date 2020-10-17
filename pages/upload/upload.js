// pages/upload/upload.js

var updata = {
  name:'',
  nameShort:'',
  semester:'',
  password:''
}

var ver = "www.eucross.com" //localhost
var urlBase = "https://" + ver + "/api/v1/lecture/"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  buildfullname(e){
    updata.name = e.detail.value
  },
  buildshortname(e){
    updata.nameShort = e.detail.value
  },
  buildsemester(e){
    updata.semester = e.detail.value
  },
  buildpass(e){
    updata.password = e.detail.value
  },

  postrequest(updata){
    wx.request({
      url: urlBase,
      data: updata,
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {
        console.log(res.data)
      },
    })
  },
  submit(e){
    let self=this
    wx.showModal({
      title: '请确认输入内容',
      content: JSON.stringify(updata),
      success(res){
        console.log(updata)
        self.postrequest(updata)
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