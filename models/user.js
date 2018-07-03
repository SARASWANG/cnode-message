// 导入mysql模块
const dbMysql = require('./mysql.js')
// 导出该模块
// 增加一个用户
exports.createUs = (user, callback) => {
    dbMysql.query(
        'insert into `users` set ? ',
        user,
        (err, results) => {
            if (err) {
                return callback(err)
            }
            // 返回查询到的数据
            // callback(null, results)
            if (results.affectedRows > 0) {
                callback(null, true)
            } else {
                callback(null, false)
            }
        }
    )
}
// 根据email查询
exports.getByEmail = (email, callback) => {
    dbMysql.query(
        "select * from `users` where `email` = ?",
        email,
        (err, results) => {
            if (err) {
                return callback(err)
            }
            // email要求是唯一的，不能重复，所有判断email只能查到一个用户信息
            if (results.length > 0) {
                callback(null, results[0])
            } else {
                callback(null, null);
            }
        }
    )
}

// 根据nickname查询用户
exports.getByNickname = (nickname, callback) => {
    dbMysql.query(
        "select * from `users` where `nickname` = ?",
        nickname,
        (err, results) => {
            if (err) {
                return callback(err)
            }
            // nickname，不能重复，所有判断email只能查到一个用户信息
            if (results.length > 0) {
                callback(null, results[0])
            } else {
                callback(null, null);
            }
        }
    )
}

