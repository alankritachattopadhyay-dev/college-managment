import { connectDB } from "../../lib/db";

export default async function handler(req, res) {
  const db = await connectDB();

  if (req.method === "PUT") {
    const { id, name, email, course } = req.body;
    await db.execute(
      "UPDATE students SET name=?, email=?, course=? WHERE id=?",
      [name, email, course, id]
    );
    res.status(200).json({ message: "Student Updated" });
  } 
  else if (req.method === "DELETE") {
    const { id } = req.body;
    await db.execute("DELETE FROM students WHERE id=?", [id]);
    res.status(200).json({ message: "Student Deleted" });
  }
}
