import React, { useContext } from "react";
import { UserContext } from "./context/userContext.js";

const BottomRightChild = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please sign up !</div>;

  return (
    <div className="bottomChild">
      BottomRightChild password: {user.password}
    </div>
  );
};

export default BottomRightChild;
