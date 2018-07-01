const  express = require('express');
const router = require('./routes/router.js')

const app = express();
const PORT = 3087

// 挂载路由
app.use(router)

// 监听端口
app.listen(PORT, () => {
    console.log('success---')
})