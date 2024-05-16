import React from "react";

export default function BlogPage({ params }) {
  const { title, contant } = params;
  return <div>{title}</div>;
}
