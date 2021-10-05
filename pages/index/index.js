// index.js
// 获取应用实例
const app = getApp()
// 默认食物
var defaultFoods = ["牛肉面", "快餐", "麻辣烫", "包子", "饺子", "馄饨", "炒面", "炸酱面", "面片"];


Page({
  data: {
  },

  // 初始参数
  startRandom: function() {
    var random = Math.round(Math.random() * (defaultFoods.length - 1));
    wx.redirectTo({
      url: '/pages/result/result?random=' + random,
    })
  },

  onLoad() {
  }
})
