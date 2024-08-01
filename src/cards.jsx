import React from 'react'

const Cards = ({info}) => {
  return (

    <div className=' min-h-[420px] w-64 flex flex-col justify-center items-center my-auto mt-20 bg-white  rounded-lg shadow-md shadow-black  hover:shadow-yellow-100 overflow-hidden' >
<p  className='text-2xl  w-3/4 text-pretty text-center  font-semibold italic '>{info}</p>



    </div>

  )
}

export default Cards
