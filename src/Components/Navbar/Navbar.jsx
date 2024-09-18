import React from 'react';

const Navbar = () => {
  return (
    <div className='navBar flex justify-between items-center p-12'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Kaam</strong>Khojh
        </h1>
      </div>
      <nav className='menu flex gap-8'>
        <ul className="flex space-x-8">
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">About</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Blog</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li>
         </ul>
      </nav>
    </div>
  );
};

export default Navbar;
