import React from "react";

export default async function SSR() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  const data = await response.json();

  return <div>SSR: {data?.title}</div>;
}
