import React, { useEffect, useRef, useState } from "react";

export const UseRef = ({ title }) => {
  const [name, setName] = useState("");
  // const renderCount = useRef(1);
  // // return this object { current: 0 }

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h2>{title}</h2>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>
          My Name is {name} an it used to be {prevName.current}
        </p>
      </div>
    </div>
  );
};
