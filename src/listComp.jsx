import React, { useContext, useState, useEffect } from "react";
import { dataList } from "./useContext/contextapi";

const ListComp = () => {
  const { info } = useContext(dataList);

  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...list, info]);
  }, [info]);

  return (
    <div className="bg-white/10 fixed  h-screen md:w-52 md:scale-100  scale-0 flex flex-col"> <p className="text-3xl font-bold italic  text-red-500 mb-4  text-center ">List</p>
      <ul className="bg-white/35 overflow-y-auto">
        {list.map((item) => {
          return<li className="mb- text-lg font-medium  rounded-lg ">{item} <hr /></li>;
        })}
      </ul>
    </div>
  );
};

export default ListComp;
