// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    classification: '',
    score: 0,
    durTime: 0,
    difficulty: '',
    comments: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad (query) {
    // 这里的 query 将是 url 中，问号(?) 后面的键值对组成的一个对象
    let classificationArray = query['classification'].split("/")
    let classStr= ''
    for(let i of classificationArray){
      classStr += '    '
      classStr+=i
      classStr +='\n'
    }
    let commentsArray = query['comments'].split("/")
    let commentsStr = ''
    for (let i of commentsArray) {
      commentsStr += '    '
      commentsStr += i
      commentsStr += '\n'
    }
    this.setData({
      name: query.name,
      classification: classStr,
      score: query.score,
      durTime: query.durTime,
      difficulty: query.difficulty,
      comments: commentsStr
    });
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