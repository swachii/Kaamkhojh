import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../../Assets/logo1.png'; // Importing the logo

// Data for the job listing
const Data = {
  id: 1,
  image: logo1,
  title: 'Web Developer',
  time: 'Now',
  location: 'Canada',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit rerum ducimus, illum sequi mollitia. Temporibus odio labore odit mollitia quaerat magni qui repellat, est ad voluptatem eveniet laudantium autem!',
  company: 'Novac Linus Co.'
};

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
              {Data.title}
            </h1>
            <span className="flex items-center text-[#ccc] gap-1">
              <BiTimeFive /> {Data.time}
            </span>
          </div>
          <h6 className="text-[#ccc]">{Data.location}</h6>
          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            {Data.desc}
          </p>

          <div className="company flex items-center gap-2">
            <img src={Data.image} alt="Company Logo" className="w-[10%]" />
            <span className="text-[14px] py-[1rem] block group-hover:text-white">{Data.company}</span>
          </div>
          
          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor bg-white group-hover/item:text-textColor group-hover:text-white'>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
