import React, { useState } from "react";

const UseState = ({ title }) => {
  const [count, setCount] = useState(0);

  const btn = {
    padding: "8px 24px",
    borderRadius: "10px",
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    backgroundColor: "teal",
    color: "white",
  };

  return (
    <>
      <h2 style={{ fontSize: "4rem", textDecoration: "underline" }}>{title}</h2>
      <div>
        <button style={btn} onClick={() => setCount(count + 1)}>
          +
        </button>
        <p>{count}</p>
        <button style={btn} onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </>
  );
};

export default UseState;
