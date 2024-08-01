const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql', // Docker Compose 서비스 이름으로 변경
  user: 'root', // MYSQL_ROOT_PASSWORD와 일치해야 함
  password: 'johnahn',
  database: 'myapp',
  port: 3306,
});
exports.pool = pool;
