import React, { useState } from "react";

function StateFunc() {
  let [click, setClick] = useState([]);
  const updateClick = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10,
      },
    ]);
  };

  console.log(click);
  return (
    <div>
      <ul>
        {click.map((item) => (
          <li>{item.value}</li>
        ))}
      </ul>
      <button onClick={updateClick}>Add Number</button>
    </div>
  );
}

export default StateFunc;
