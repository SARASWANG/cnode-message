const  mysql = require('mysql')
const  pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'admin123',
    database        : 'ithub'
});
// -----------导出数据库-------导出的是pool对象
module.exports = pool