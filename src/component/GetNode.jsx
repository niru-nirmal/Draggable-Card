import React from "react";
import Draggable from "react-draggable";

const GetNode = ({ nodeObject }) => {
  const { classToBound, name, child } = nodeObject;
  return (
    <div className={`box parent ${classToBound}`}>
      <Draggable bounds={`.${classToBound}`}>
        <div className="box child">
          Title: {name}
          <hr />
          {child?.name ? <GetNode key={name} nodeObject={child} /> : name}
        </div>
      </Draggable>
    </div>
  );
};

export default GetNode;
