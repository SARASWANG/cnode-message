const  express = require('express');
const app = express();
const PORT = 3043

// 路由 设置
app.get('/', function (req, res) {
    // res.send('Hello World--------index12341234')
    res.json({
        "name" : "lele"    // Content-Type: application/json
    })
})

// 监听端口
app.listen(PORT, () => {
    console.log('success---3043')
})