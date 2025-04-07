"use client";

import React, { useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState<{ title: string }>({ title: "" });

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => setData(json));
    };

    fetchData();
  }, []);

  return <div>CSR : {data?.title}</div>;
}
