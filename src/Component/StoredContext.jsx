import { createContext, useState } from "react";
import Navsection from "./NavSection/Navsection";
// import Menu from "./Menu/Menu";

export const UserContext = createContext();

function StoredContext() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(true);
  console.log("StoredContext rendering...");
  console.log("Context value:", { user, setUser, login, setLogin });
  

  return (
    <UserContext.Provider value={{ user, setUser, login, setLogin }}>
        <Navsection />
    </UserContext.Provider>
  );
}

export default StoredContext;
