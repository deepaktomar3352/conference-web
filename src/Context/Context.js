import { Children, createContext, useState } from "react";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {

  const [render, setRender] = useState("");
 

  return (
    <DataContext.Provider
      value={{
       render,
        setRender,
            }}
    >
      {children}
    </DataContext.Provider>
  );
};


export { DataContext, DataProvider };
