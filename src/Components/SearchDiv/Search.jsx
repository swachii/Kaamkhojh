import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const Search = () => {
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex gap-4'>
          {/* Job Search Input */}
          <div className='flex items-center rounded-[8px] gap-2 bg-white p-5 shadow-lg flex-1'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input
              type="text"
              className='bg-transparent text-blue-500 focus:outline-none w-full'
              placeholder='Search Job Here.....'
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <AiOutlineCloseCircle
              className='text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer'
              onClick={() => setJob('')}
            />
          </div>

          {/* Company Search Input */}
          <div className='flex items-center rounded-[8px] gap-2 bg-white p-5 shadow-lg flex-1'>
            <BsHouseDoor className='text-[25px] icon' />
            <input
              type="text"
              className='bg-transparent text-blue-500 focus:outline-none w-full'
              placeholder='Search by companies.....'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <AiOutlineCloseCircle
              className='text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer'
              onClick={() => setCompany('')}
            />
          </div>

          {/* Location Search Input */}
          <div className='flex items-center rounded-[8px] gap-2 bg-white p-5 shadow-lg flex-1'>
            <CiLocationOn className='text-[25px] icon' />
            <input
              type="text"
              className='bg-transparent text-blue-500 focus:outline-none w-full'
              placeholder='Search By Location.....'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <AiOutlineCloseCircle
              className='text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer'
              onClick={() => setLocation('')}
            />
          </div>
          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
        </div>
      </form>

      {/* Sorting Options */}
      <div className='flex items-center gap-4'> 
        {/* First Sort By */}
        <div className='flex items-center'>
          <label htmlFor="relevance1" className='text-[#808080] font-semibold mr-2'>Sort By:</label>
          <select name="" id="relevance1" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        {/* Second Sort By */}
        <div className='flex items-center'>
          <label htmlFor="type" className='text-[#808080] font-semibold mr-2'>Type:</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full Time</option>
            <option value="">Part Time</option>
            <option value="">Contract-based</option>
            <option value="">Remote</option>
          </select>
        </div>   

        {/* Third Sort By */}
        <div className='flex items-center'>
          <label htmlFor="Level" className='text-[#808080] font-semibold mr-2'>Level:</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Beginner</option>
            <option value="">Senior</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
