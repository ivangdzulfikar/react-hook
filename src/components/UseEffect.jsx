import React, { useEffect, useState } from "react";

const UseEffect = ({ title }) => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <h2>{title}</h2>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>

        <ul>
          {items.map((item) => {
            return <li>{JSON.stringify(item)}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default UseEffect;
