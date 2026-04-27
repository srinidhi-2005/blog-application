import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewBlog() {
  const { id } = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="border rounded-xl p-6 shadow">
      <h1 className="text-4xl font-bold">{blog.title}</h1>

      <p className="mt-2 text-gray-600">
        Author: {blog.author}
      </p>

      <p className="text-blue-600 mb-4">
        {blog.category}
      </p>

      <p>{blog.content}</p>
    </div>
  );
}

export default ViewBlog;