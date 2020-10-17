// pages/search/search.js
var name_temp = [];
var temp = [];
var temp_sammlung = [];
var sammlung =[];
var app = getApp();
var local_klausur_sammlung='';
var ver = "www.eucross.com" //localhost
var urlBase = "https://"+ver+"/api/v1/lecture/"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showCloseIcon: false,
    inputvalue: '请输入你想要的altklausur',

    showCloseIcon1: false,
    inputvalue1: '请输入你想要的altklausur',

    noinput: true,
    return_map:'',
    local_kurs_sammlung:''
  },

  handlefocus(e){
    if (e.detail.value === '请输入你想要的altklausur'){
      this.setData({
        inputvalue:'',
        showCloseIcon:true
      })
    }
  },

  handlefocus1(e) {
    if (e.detail.value === '请输入你想要的altklausur') {
      this.setData({
        inputvalue1: '',
        showCloseIcon1:true
      })
    }
  },

  handleconfirm(e){
    this.setData({
      inputvalue: e.detail.value
    })
    console.log(this.data.inputvalue)
  },

  handleinput(e){
    this.setData({
      inputvalue: e.detail.value
    })
  },

  handleinput1(e) {
    this.setData({
      inputvalue1: e.detail.value
    })
  },

  clearvalue(e){
    this.setData({
      showCloseIcon: false,
      inputvalue: ''
    });
  },

  clearvalue1(e) {
    this.setData({
      showCloseIcon1: false,
      inputvalue1: ''
    });
  },


  searchBlur(name) {
    let url = urlBase + "nameblur/" + name
    let self = this
    console.log(url)
    wx.request({
      url: urlBase + "nameblur/" + name,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        let r = res.data
        let temp = []
        for(let item of r){
          temp.push({
            id: item.id,
            kurs_name: item.name,
            kurs_bild_src: '../../pics/ETT.jpg',
            kurs_semester: item.semester,
            kurs_pass: item.password
          })
        }
        self.setData({
          local_kurs_sammlung: temp
        })  
      },
      fail: function (res) { },
      complete: function (res) { console.log(res.data) },
    })
  },

  searchShort(name){
    let self = this
    wx.request({
  url: urlBase + "nameshort/" + name,
  data: '',
  header: {},
  method: 'GET',
  dataType: 'json',
  responseType: 'text',
  success: function(res) {

    let r = res.data
    let temp = []
    for (let item of r) {
      temp.push({
        id: item.id,
        kurs_name: item.name,
        kurs_bild_src: '../../pics/ETT.jpg',
        kurs_semester: item.semester,
        kurs_pass: item.password
      })
    }
    self.setData({
      local_kurs_sammlung: temp
    })  
  },
  fail: function(res) {},
  complete: function(res) {},
})
  },

  onTap(e){
    console.log(this.data.inputvalue)
    this.searchBlur((this.data.inputvalue))
  },

  onTap1(e) {
    this.searchShort((this.data.inputvalue1))
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    local_klausur_sammlung=app.globalData.local_klausur_sammlung;
    temp = local_klausur_sammlung;
    sammlung = temp;
    temp.forEach((data, index, array) => {
      name_temp.push(data.klausur_name);
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
    this.setData({
      local_klausur_sammlung:local_klausur_sammlung
    })
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