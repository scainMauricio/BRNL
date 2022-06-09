import { createContext, useState } from "react";

export const searchContext = createContext();

export function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <searchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </searchContext.Provider>
  );
}
