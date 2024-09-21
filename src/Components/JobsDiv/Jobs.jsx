import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

const jobData = [
  {
    id: 1,
    title: 'Web Developer',
    location: 'Canada',
    time: 'Now',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit rerum ducimus, illum sequi mollitia.',
  },
  {
    id: 2,
    title: 'Software Engineer',
    location: 'USA',
    time: '2 days ago',
    description: 'Temporibus odio labore odit mollitia quaerat magni qui repellat, est ad voluptatem eveniet laudantium autem.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'Remote',
    time: '1 week ago',
    description: 'Voluptatibus impedit rerum ducimus, illum sequi mollitia. Temporibus odio labore odit mollitia quaerat magni qui repellat.',
  },
  {
    id: 4,
    title: 'Data Scientist',
    location: 'UK',
    time: '5 hours ago',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni qui repellat, est ad voluptatem.',
  },
];

const Jobs = () => {
  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {jobData.map((job) => (
        <div
          key={job.id}
          className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
              {job.title}
            </h1>
            <span className="flex items-center text-[#ccc] gap-1">
              <BiTimeFive /> {job.time}
            </span>
          </div>
          <h6 className="text-[#ccc]">{job.location}</h6>
          <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
            {job.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
