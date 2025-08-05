import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function EditStudent() {
  const router = useRouter();
  const { id, name, email, course } = router.query;

  const [form, setForm] = useState({ id: "", name: "", email: "", course: "" });

  useEffect(() => {
    if (id) setForm({ id, name, email, course });
  }, [id, name, email, course]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch("/api/student", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Edit Student</h1>
      <form onSubmit={handleUpdate}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Course"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
