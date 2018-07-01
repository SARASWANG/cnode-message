// 创建路由
const express = require('express')
const router = express.Router()
// 导入首页路由处理函数模块
const show = require('../controllers/index.js')

// 导入用户路由处理函数模块
const user = require('../controllers/user.js')

// 设计路由  index
router.get('/', show.showIndex)


// 用户路由设计
router
    .get('/signin', user.showSignin)
    .post('/signin', user.handleSignin)
    .get('/signup', user.showSignup)
    .post('/signup', user.handleSignup)
    .post('/signout', user.handleSignout)

//导出路由模块
module.exports = router