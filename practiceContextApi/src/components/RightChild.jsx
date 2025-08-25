import React from "react";
import TopRightChild from "./TopRightChild";
import BottomRightChild from "./BottomRightChild";

const RightChild = () => {
  return (
    <div className="rightChild">
      <div className="top">
        <TopRightChild />
      </div>
      <div className="top">
        <BottomRightChild />
      </div>
    </div>
  );
};

export default RightChild;
