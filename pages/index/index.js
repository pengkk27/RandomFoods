// index.js
// 获取应用实例
const app = getApp()
// 默认食物
var defaultFoods = ["牛肉面", "快餐", "麻辣烫", "包子", "饺子", "馄饨", "炒面", "炸酱面", "面片"];


Page({
  data: {
    animationData: {},
    foodAnimation: {},
    tipText: '这顿吃啥',
    stop: false,
    food: 'kljlk'
  },

  // 开始随机按钮进行的操作
  handleClick: function() {
    this.animationData = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear'
    })
    this.foodAnimation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear'
    })
    this.animationData.translate3d(-75, -60, 0).scale(0.6).step()
    this.foodAnimation.translate3d(0, -110, 0).opacity(1).step()
    this.setData({
      animationData: this.animationData.export(),
      foodAnimation: this.foodAnimation.export() 
    })
    
    var random = Math.round(Math.random() * (defaultFoods.length - 1));
    this.setData({
      food: defaultFoods[random]
    })
    
  },




  onLoad() {
  }
})
