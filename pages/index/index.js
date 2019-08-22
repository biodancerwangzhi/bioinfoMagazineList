//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    daIndex1: 0,
    daIndex2: 0,
    imageUrl1: "../../imgs/sort-desc.png",
    imageUrl2: "../../imgs/sort-desc.png",
    listData: [
      { "code": "01", "text": "text2", "type": "type1" },
      { "code": "02", "text": "text3", "type": "type2" },
      { "code": "03", "text": "text5", "type": "type3" },
      { "code": "04", "text": "text1", "type": "type4" },
      { "code": "05", "text": "text4", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ]
  },
  sort1: function (e) {
    if (this.data.daindex1 == 0) {
      this.setData({
        imageUrl1: "../../imgs/sort-desc.png",
        daindex1: 1
      })
    } else {
      this.setData({
        imageUrl1: "../../imgs/sort-asc.png",
        daindex1: 0
      })
    }
  },
  sort2: function (e) {
    if (this.data.daindex2 == 0) {
      this.setData({
        imageUrl2: "../../imgs/sort-desc.png",
        daindex2: 1
      })
    } else {
      this.setData({
        imageUrl2: "../../imgs/sort-asc.png",
        daindex2: 0
      })
    }
  },

  onLoad: function () {
    console.log('onLoad')
  }

})
