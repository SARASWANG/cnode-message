// 创建路由
const  express = require('express')
const router = express.Router()
// 导入首页路由处理函数模块
const show = require('../controllers/index.js')

// 设计路由  index
router.get('/',show.showIndex)

//导出路由模块
module.exports = router