//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    local_klausur_sammlung: [
      {
        id: 0,
        klausur_name: 'ETT',
        klausur_bild_src: '../../pics/ETT.jpg',
        klausur_version: 'WS16/17',
        digital_version: 'ja',
        datei_format: 'pdf',
        kosten: '4',
        verfuegbarkeit: '2',
        kurzfassung: 'Die Datei ist die Altklasur von ETT'
      },
      {
        id: 1,
        klausur_name: 'INFO',
        klausur_bild_src: '../../pics/INFO.png',
        klausur_version: 'WS16/17',
        digital_version: 'ja',
        datei_format: 'pdf',
        kosten: '3',
        verfuegbarkeit: '10',
        kurzfassung: 'Die Datei ist die Altklasur von INFO'
      },
      {
        id: 2,
        klausur_name: 'DESIGN',
        klausur_bild_src: '../../pics/DESIGN.jpg',
        klausur_version: 'WS16/17',
        digital_version: 'nein',
        datei_format: '',
        kosten: '6',
        verfuegbarkeit: '2',
        kurzfassung: 'Die Datei ist die Altklasur von ETT'
      },
      {
        id: 3,
        klausur_name: 'ETT',
        klausur_bild_src: '../../pics/ETT.jpg',
        klausur_version: 'WS17/18',
        digital_version: 'ja',
        datei_format: 'pdf',
        kosten: '4',
        verfuegbarkeit: '2',
        kurzfassung: 'Die Datei ist die Altklasur von ETT'
      },
      {
        id: 4,
        klausur_name: 'INFO',
        klausur_bild_src: '../../pics/INFO.png',
        klausur_version: 'WS17/18',
        digital_version: 'ja',
        datei_format: 'pdf',
        kosten: '3',
        verfuegbarkeit: '10',
        kurzfassung: 'Die Datei ist die Altklasur von INFO'
      },
      {
        id: 5,
        klausur_name: 'DESIGN',
        klausur_bild_src: '../../pics/DESIGN.jpg',
        klausur_version: 'WS17/18',
        digital_version: 'nein',
        datei_format: '',
        kosten: '6',
        verfuegbarkeit: '2',
        kurzfassung: 'Die Datei ist die Altklasur von ETT'
      },

    ]
  }
})