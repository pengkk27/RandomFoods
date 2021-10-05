// pages/result/result.js

// 默认食物
var defaultFoods = ["牛肉面", "快餐", "麻辣烫", "包子", "饺子", "馄饨", "炒面", "炸酱面", "面片"];

Page({

    /**
     * 页面的初始数据
     */
    data: {
        result: ""
    },


    newRandom: function() {
        var random = Math.round(Math.random() * (defaultFoods.length - 1));
        wx.redirectTo({
          url: '/pages/result/result?random=' + random,
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            result : defaultFoods[options.random]
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