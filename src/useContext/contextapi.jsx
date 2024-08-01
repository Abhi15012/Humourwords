import React, { createContext, useContext, useState } from "react";

export const dataList = createContext({
  setinfo: () => {},
  info: [],
});
const Contextapi = ({children}) => {
  const [info, setinformation] = useState("");
  function setinfo(value) {
    setinformation(value);
  }
  return(
    <dataList.Provider  value={{info,setinfo}} >{children}</dataList.Provider>
  )
};

export default Contextapi;
