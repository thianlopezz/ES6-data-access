import mysql from "mysql";

class MysqlConnection {
  pool = null;

  init() {
    this.pool = mysql.createPool({
      connectionLimit: 15,
      host: process.env.MYSQL_HOST || "localhost",
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASS || "password",
      database: process.env.MYSQL_DB || "mydb"
    });
  }

  acquire() {
    return new Promise((resolve, reject) => {
      this.pool.getConnection(function(error, connection) {
        if (error) {
          reject(error);
        } else {
          resolve(connection);
        }
      });
    });
  }
}

export default new MysqlConnection();
