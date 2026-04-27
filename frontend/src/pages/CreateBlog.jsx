import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    navigate("/");
  };

  return (
    <form
      onSubmit={submitData}
      className="space-y-4 max-w-xl mx-auto"
    >
      <h1 className="text-3xl font-bold">Create Blog</h1>

      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="content"
        placeholder="Content"
        onChange={handleChange}
        className="w-full border p-2 rounded h-40"
      ></textarea>

      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Add Blog
      </button>
    </form>
  );
}

export default CreateBlog;