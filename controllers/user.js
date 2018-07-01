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
    res.render('signup.html')
}
// 处理注册页面处理函数
exports.handleSignup = (req,res) => {
    // 渲染注册页面
    res.send('handleSignUp')
}
// 处理退出页面处理函数
exports.handleSignout = (req,res) => {
    res.send('handleSignOut')
}