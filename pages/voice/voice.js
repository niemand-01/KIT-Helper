// pages/voice/voice.js
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tempFilePath:'',
    recordbtnpic: "../../pics/record.jpg"
  },

  startRecord:function(){
    this.setData({
      recordbtnpic: "../../pics/recordpressed.png"
    })
    const option = {
      duration: 10000,//record length, ms
      sampleRate: 16000, //record quality
      nummberOfChannels: 1,
      encodeBitRate: 96000,
      format: 'mp3', // mp3 or aac
      frameSize: 50, //kb
    }

    //start recording
    recorderManager.start(option);
    recorderManager.onStart(()=>{
      console.log('record start')
    });
    recorderManager.onError((res)=>{
      console.log(res);
    })
  },

  stopRecord:function(){
    this.setData({
      recordbtnpic: "../../pics/record.jpg"
    })
    recorderManager.stop();
    recorderManager.onStop((res)=>{
      console.log('stop recording')
      this.tempFilePath = res.tempFilePath;
      const {tempFilePath} = res
    })
  },

  playRecord:function(){
    innerAudioContext.autoplay = true
    innerAudioContext.src = this.tempFilePath
    innerAudioContext.onPlay(()=>{
      console.log('start play')
    })
    innerAudioContext.onError((res)=>{
      console.log(res.errMsg)
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