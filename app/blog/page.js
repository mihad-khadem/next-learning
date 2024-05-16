import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "Content 2",
    },
  ];
  return (
    <div>
      Blogs
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
