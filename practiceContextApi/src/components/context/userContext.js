// import { createContext, useContext, useState } from "react";

// export const UserContext = createContext({
//   userName: "Ram",
//   email: "user@email.com",
//   isGraduated: false,
//   addUser: () => {},
// });

// export const UserContextProvider = UserContext.Provider;

// export const useUser = () => useContext(UserContext);

import React from "react";

export const UserContext = React.createContext();
