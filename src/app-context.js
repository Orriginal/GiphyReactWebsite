import React, { useState, useEffect, createContext } from "react";

// This creates a Provider and a Consumer
const DefaultContext = createContext();

function AppContext(props) {
  const { children } = props;
  const [data, setData] = useState({});

  return (
    <DefaultContext.Provider
      value={{
        setdata: d => setData(d),
        data: data
      }}
    >
      {children}
    </DefaultContext.Provider>
  );
}

export default AppContext;
export { DefaultContext };
