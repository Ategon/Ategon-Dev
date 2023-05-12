//import mysql from "mysql2/promise";

export async function GET() {
  /*const con = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3006'),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });*/

  /*try {
    /*const [results] = await con.query("SELECT * from games");
    con.end();
    const results = {test: "test"}

    return new Response (JSON.stringify(results), { 
      status: 200 
    })
  } catch (error: any) {
    return new Response (JSON.stringify({ error: error.message }), { 
      status: 500 
    })
  }*/

  return new Response ("test", { 
    status: 200 
  })
}