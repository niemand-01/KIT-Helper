// pages/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usrname:'',
    local_path:'',
    savedImgUrl:'',
    clickgmt:''
  },

  getcoupon:function(e){
    var mythis = this
    wx.getUserInfo({
      success(res){
        console.log(res.usrInfo)
          mythis.setData({
            usrname: res.usrInfo.nickName
         })
        this.downloadImg(res.userInfo.avatarUrl)
      }
    })
  },

  makeposter:function(e){
    var self = this;
    wx.getSetting({
      success(res){
        if(!res.authSetting['scope.writePhotosAlbum']){
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success(){
            }
          })
        }
        else{
          wx.showLoading({
            title: '正在生成',
          });
          self.drawImg();
          setTimeout(function () { wx.hideLoading() }, 200);
        }
      }
    })
    
  },

  drawImg:function(){
    const ctx = wx.createCanvasContext('canvas1');
    ctx.clearRect(0,0,372,135);
    ctx.drawImage("../../pics/couponpic.jpg",0,0,372,135)
    ctx.drawImage(this.data.savedImgUrl,50,45,40,40)
    ctx.setFillStyle("#02446e")
    ctx.setFontSize(26);
    ctx.fillText(this.data.usrname,100,60)
    ctx.fillText("选择了一部",100,80)
    this.dateformat()
    ctx.fillText("验证码："+this.data.clickgmt,100,100)

    var self =this;
    ctx.draw()
    ctx.draw(true,setTimeout(function(){
        wx.canvasToTempFilePath({
          x:0,
          y:0,
          width:372,
          height:135,
          destWidth:372,
          destHeight: 135,
          canvasId: 'canvas1',
          success(res){
            self.data.savedImgUrl = res.tempFilePath;
            self.saveImageToAlbum();
          },
          fail(err){
            console.log(err.errMsg);
          },
          complete(res){
            console.log("completed")
          }
        })
      },2000))

  },

  saveImageToAlbum:function(){
    console.log('saving!!')
    if(this.data.savedImgUrl != ''){
      wx.saveImageToPhotosAlbum({
        filePath: this.data.savedImgUrl,
        success(res){
          wx.showModal({
            title: 'save success!',
            content: 'manuell share in wechat!',
            showCancel: false
          });
        },
        fail(err){
          console.log(err);
          if (err.errMsg == "saveImageToPhotosAlbum:fail cancel"){
            wx.showModal({
              title: 'save failed',
              content: 'u canceled the save',
              showCancel:false
            })
          }
        }
      })
    }
    else{
      wx.showModal({
        title: 'hint',
        content: 'u may prohibit the authority to save',
        complete(res){
          console.log(res);
          if(res.confirm){
            wx.openSetting({
            })
          }
          else{
            wx.showModal({
              title: 'fail saving',
              content: 'u canceled saving',
              showCancel: true
            })
          }
        }
      })
    }
  },

  downloadImg:function(url){
    if(typeof url === 'string'){
      wx.getImageInfo({
        src: url,
        success: function(res){
          local_path: res.path
        },
        fail:function(err){
          console.log(err)
        }
      })
    }
  },

  dateformat(){
    let gmt = new Date();

    let nYear = String(gmt.getFullYear());
    let nMonth = this.numFormatting(gmt.getMonth()+1);
    let nDay = gmt.getDate()<10?'0'+gmt.getDate():gmt.getDate();
    let ntime = gmt.getHours()+''+gmt.getMinutes();
    let end_date = nYear+nMonth+nDay+ntime;
    this.setData({
      clickgmt:end_date
    })
  },

  numFormatting(num){
    if(String(num).length<2){
      return '0'+num
    }else{
      return num
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.dateformat()
    var self = this
    wx.getUserInfo({
      success(res){
        var userInfo = res.userInfo
        self.setData({
          usrname: userInfo.nickName,
          savedImgUrl: userInfo.avatarUrl
        });
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