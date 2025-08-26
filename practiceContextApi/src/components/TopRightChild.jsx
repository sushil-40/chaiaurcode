// import React, { useContext } from "react";
// import { UserContext } from "./context/userContext";
import ThemeButton from "./ThemeButton";
const TopRightChild = () => {
  // const { user } = useContext(UserContext);
  // if (!user) return <div>Please sign up</div>;

  return (
    <>
      {/* <div className="topChild">
        TopRightChild user: Welcome {user.userName}
      </div> */}
      <ThemeButton />
    </>
  );
};

export default TopRightChild;
