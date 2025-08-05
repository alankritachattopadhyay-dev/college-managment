import { connectDB } from "../../lib/db";

export default async function handler(req, res) {
  const db = await connectDB();

  if (req.method === "GET") {
    const [rows] = await db.execute("SELECT * FROM students");
    res.status(200).json(rows);
  } 
  else if (req.method === "POST") {
    const { name, email, course } = req.body;
    await db.execute(
      "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
      [name, email, course]
    );
    res.status(201).json({ message: "Student Added" });
  }
}
