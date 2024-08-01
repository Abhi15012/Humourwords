import React from "react";

import Fetch from "./fetch";
import ListComp from "./listComp";
import Contextapi from "./useContext/contextapi";


const App = () => {
  return (
  
    <Contextapi>
      <div className="h-screen text-bold bg-gradient-to-r from-sky-500 to-indigo-500">

        <ListComp />
    

      <div className=" text-bold grid place-content-center ">

        <Fetch />
      </div>

      </div>
    </Contextapi>
  );
};

export default App;
