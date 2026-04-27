import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function Home() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const res = await fetch("http://localhost:5000/api/blogs");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const deleteBlog = async (id) => {
    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
    });

    getBlogs();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>

      {blogs.map((blog) => (
        <BlogCard
          key={blog._id}
          blog={blog}
          onDelete={deleteBlog}
        />
      ))}
    </div>
  );
}

export default Home;