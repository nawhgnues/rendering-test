import React from "react";

export default async function ISR() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { revalidate: 10 },
  });
  const data = await response.json();

  const now = new Date().toISOString();

  return (
    <div>
      <h2>ISR: {data?.title}</h2>
      <p>Page created at: {now}</p>
    </div>
  );
}
