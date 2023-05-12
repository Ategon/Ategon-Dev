import mysql from "mysql2";

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3006'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

export function query(sql: string, args: any = null) {
  return new Promise((resolve, reject) => {
    con.query(sql, args, (err, rows) => {
      if (err)
        return reject(err);
      resolve(rows);
    });
  });
}