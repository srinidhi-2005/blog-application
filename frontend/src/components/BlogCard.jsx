import { Link } from "react-router-dom";

function BlogCard({ blog, onDelete }) {
  return (
    <div className="border rounded-xl p-5 shadow mb-4">
      <h2 className="text-2xl font-bold">{blog.title}</h2>

      <p className="text-gray-600 mt-1">Author: {blog.author}</p>
      <p className="text-sm text-blue-600">{blog.category}</p>

      <div className="flex gap-3 mt-4">
        <Link
          to={`/blog/${blog._id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Read
        </Link>

        <Link
          to={`/edit/${blog._id}`}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(blog._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogCard;