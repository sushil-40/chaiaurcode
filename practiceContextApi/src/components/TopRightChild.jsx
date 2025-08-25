import React, { useContext } from "react";
import { UserContext } from "./context/userContext";
const TopRightChild = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please sign up</div>;

  return (
    <div className="topChild">TopRightChild user: Welcome {user.userName}</div>
  );
};

export default TopRightChild;
