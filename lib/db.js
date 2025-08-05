import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",       // your MySQL username
    password: "Alankrita@123",       // your MySQL password
    database: "college_db"
  });
  return connection;
}
