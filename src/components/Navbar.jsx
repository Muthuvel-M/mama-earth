import React from "react";

import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mt-4  px-14 syne">
      <div className=" ">
        <img src="/icons/logo.png" />
      </div>
      <div className="space-x-40 hidden md:flex text-[16px]">
        
        <div>
            <div className="mt-2">
                <div className="flex ">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                
            <div class="text-gray-500 select-none"><CiSearch /></div>
            <input type="text" name="price" id="price" class="block min-w-0 grow py-1.5 pr-3 pl-1 px--20 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="search" />
            </div>
                <button type="submit" className="flex bg-blue-400 rounded-r-lg justify-center items-center w-24 text-white gap-2 text-[18px]"><CiSearch /> Search</button>
            </div>
            
            </div>
        </div>

        {/* <button className="px-[24px] py-[8px] rounded-full hover:bg-white hover:text-black transition">
          Contact
        </button> */}
      </div>
      <button className="border border-white px-4 py-2 rounded-full">
        HIRE ME
      </button>
    </nav>
  );
};

export default Navbar;