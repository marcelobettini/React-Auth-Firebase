import { createContext, useState } from "react";
export const UserCtx = createContext();
export const UserCtxProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>;
};