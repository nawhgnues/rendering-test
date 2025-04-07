export default async function SSG() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "force-cache",
  });
  const data = await response.json();

  return <div>SSG: {data?.title}</div>;
}
