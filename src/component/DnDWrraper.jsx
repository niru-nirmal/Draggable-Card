import React, { useState } from "react";
import Draggable from "react-draggable";
import GetNode from "./GetNode";

const sample = { classToBound: "p-0", name: "Child", child: {} };

function DnDWrraper() {
  const [nodeObject, setNodeObject] = useState(sample);
  const [count, setCount] = useState(0);
  const addNode = () => {
    setCount(count + 1);
    const randomSelector = "node" + Math.random().toString(16).slice(2);
    const newNode = {
      classToBound: randomSelector,
      name: `after click ${count + 1}`,
      child: nodeObject,
    };
    setNodeObject(newNode);
  };
  return (
    <>
      <button onClick={addNode}>Add Parent</button>
      <hr />
      <GetNode nodeObject={nodeObject} />
      <hr />
    </>
  );
}

export default DnDWrraper;
