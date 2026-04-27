import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateBlog = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    navigate("/");
  };

  return (
    <form
      onSubmit={updateBlog}
      className="space-y-4 max-w-xl mx-auto"
    >
      <h1 className="text-3xl font-bold">Edit Blog</h1>

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="author"
        value={form.author}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        className="w-full border p-2 rounded h-40"
      ></textarea>

      <input
        type="text"
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Update Blog
      </button>
    </form>
  );
}

export default EditBlog;