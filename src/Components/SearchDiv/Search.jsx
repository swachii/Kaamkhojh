import React from 'react';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'; // Import the search icon

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action="">

        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg'>
          
          <div className="flex gap-2 items-center w-full">
            <AiOutlineSearch className='text-[25px] icon'/>
            <input  type="text" className='bg-transparent text-blue-500 focus:outline-none w-[!00%]' 
              placeholder='Search Job Here.....'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
