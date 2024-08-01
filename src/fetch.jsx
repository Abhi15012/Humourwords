import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './cards';
import { dataList } from './useContext/contextapi';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";

const Fetch = () => {
  const [change,setchange]=useState(true)
  const [quote, setQuote] = useState("");
  const { setinfo } = useContext(dataList);

  const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setQuote(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
       
      }
    };
    fetchData();
  }, [change]);

  const addList = () => {
    setinfo(quote);
  };

  return (
    <div className='grid place-content-center'>
      <Cards info={quote} />
      <button
        className='bg-amber-200 text-center cursor-pointer rounded-xl hover:shadow-yellow-200 shadow-sm hover:bg-yellow-300 mt-5 h-10 font-semibold text-lg'
        onClick={() => {
       setchange(!change)
        }}
      >
        Read More
      </button>
      <button
        className='h-10 w-full my-1 bg-green-400 hover:bg-green-500 rounded-xl mt-1 shadow-sm font-medium text-md hover:shadow-yellow-300'
        onClick={addList}
      >
        Add to List
      </button>
      <ToastContainer />
    </div>
  );
};

export default Fetch;