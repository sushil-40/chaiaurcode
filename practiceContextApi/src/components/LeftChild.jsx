import React, { useContext, useState } from "react";
import { UserContext } from "./context/userContext";

const LeftChild = () => {
  // const { userName, addUser } = useUser();
  // return (
  //   <div className="leftChild">
  //     LeftChild
  //     <p>Current user: {userName}</p>
  //     <button
  //       onClick={() =>
  //         addUser({
  //           userName: "sushil",
  //           email: "sushil@email.com",
  //           isGraduated: true,
  //         })
  //       }
  //     >
  //       Update User
  //     </button>
  //   </div>
  // );

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>User Sign Up!</h2>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleClick}>Add User</button>
    </div>
  );
};

export default LeftChild;
