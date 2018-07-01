const express = require('express')
const app = express()
const router = require('./routes/router.js')

// 配置静态资源-----下载jquery bootstrap3.3.7
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))

// 配置模版
app.engine('html', require('express-art-template'));



const PORT = 3087
// 挂载路由
app.use(router)
// 监听端口
app.listen(PORT, () => {
    console.log('success---')
})