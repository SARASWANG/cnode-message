// 导入mysql模块
const dbMysql = require('./mysql.js')
//导入md5模块
const  md5 = require('md5');

// 渲染登录页面处理函数
exports.showSignin = (req,res) => {
    res.send('showSignIn')
}
// 处理登录页面处理函数
exports.handleSignin = (req,res) => {
    res.send('handleSignIn')
}

// 渲染注册页面处理函数
exports.showSignup = (req,res) => {
    // 渲染注册页面
    res.render('signup.html')
}
// 处理注册页面处理函数
exports.handleSignup = (req,res) => {
    // 1 先验证用户名是否重复
    // const selectSql = "select * from 'users'"


    // 收集表单数据 req.body
    // 给密码加密
    req.body.password = md5(req.body.password)
    // 把表单数据添加到数据库中
    const sql = 'insert into `users` set ? '
    dbMysql.query(sql, req.body,function (error, results) {
        if (error) {
            return res.send('服务器错误')
        }
        // 若受影响的行 = 1， 表示添加成功，否则表示添加失败，并在注册页面提示
        if (results.affectedRows == 1) {
            res.redirect('/signin')
        }else {
            res.render('signup.html', {
                msg : '注册失败'
            })
        }
    });

}
// 处理退出页面处理函数
exports.handleSignout = (req,res) => {
    res.send('handleSignOut')
}