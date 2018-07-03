//导入md5模块
const md5 = require('md5');
// 导入models模块
const userModel = require('../models/user')

// 渲染登录页面处理函数
exports.showSignin = (req, res) => {
    res.render('signin.html')
}
// 处理登录页面处理函数
exports.handleSignin = (req, res) => {
    // todo
    // 验证用户名是否存在
    // 获取表单数据   req.body
    // 1 验证邮箱是否存在
    dbMysql.query(
        "select * from `users` where email = ?",
        req.body.email,
        (error, result) => {  //result 是一个数组，
            if (error) {
                return res.json({
                    conde: 401,
                    msg: '服务器错误'
                })
            }
            // 验证邮箱是否正确,
            if (result.length < 0) {
                return res.json({
                    code: 401,
                    msg: '邮箱不存在'
                })
            }
            // 上面通过以后，继续验证密码
            req.body.password = md5(req.body.password)
            // 密码与数据库中的不匹配返回数据
            if (req.body.password !== result[0].password) {
                return res.json({
                    code: 402,
                    msg: '密码错误'
                })
            }
            // 登录成功，
            res.json({
                code: 200,
                msg: '登录成功'
            })

        }
    )

}

// 渲染注册页面处理函数
exports.showSignup = (req, res) => {
    // 渲染注册页面
    res.render('signup.html')
}
// 处理注册页面处理函数
exports.handleSignup = (req, res) => {
    // 1 先验证邮箱是否重复
    userModel.getByEmail(req.body.email, (err, user) => {
        if (err) {
            return res.send('服务器内部错误')
        }
        // 验证昵称
        userModel.getByNickname(req.body.nickname, (err, user) => {
            if (err) {
                return res.send('服务器内部错误')
            }
            // 给密码加密
            req.body.password = md5(req.body.password)
            userModel.createUs(req.body,(err,isok) => {
                if (isok) {
                    res.redirect('/signin')
                }else {
                    res.render('/signup', {
                        msg : '注册失败'
                    })
                }
            })
        })
    })

    // // 给密码加密
    // req.body.password = md5(req.body.password)
    // // 把表单数据添加到数据库中
    // const sql = 'insert into `users` set ? '
    // dbMysql.query(sql, req.body, function (error, results) {
    //     if (error) {
    //         return res.send('服务器错误')
    //     }
    //     // 若受影响的行 = 1， 表示添加成功，否则表示添加失败，并在注册页面提示
    //     if (results.affectedRows == 1) {
    //         res.redirect('/signin')
    //     } else {
    //         res.render('signup.html', {
    //             msg: '注册失败'
    //         })
    //     }
    // });

}
// 处理退出页面处理函数
exports.handleSignout = (req, res) => {
    res.send('handleSignOut')
}