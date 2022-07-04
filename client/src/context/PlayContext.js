import { createContext, useState } from "react";

export const PlayContext = createContext();

function PlayContextProvider({ children }) {
  const [uri, setUri] = useState("");

  return (
    <PlayContext.Provider value={{ uri, setUri }}>
      {children}
    </PlayContext.Provider>
  );
}

export default PlayContextProvider;
