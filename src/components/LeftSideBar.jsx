import React from "react";
import assets from "../assets/assets";

const LeftSideBar = () => {
  return (
    <div className="bg-[#001030] text-white h-[75vh]">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <img className="w-40" src={assets.logo} alt="" />
          <div className="">
            <img
              className="w-12 opacity-60 cursor-pointer ..."
              src={assets.menu_icon}
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#002670] flex items-center gap-2 px-2 py-3">
          <img className="w-4" src={assets.search_icon} alt="" />
          <input
            className="bg-transparent border-none outline-none text-white text-sm placeholder:text-[#c8c8c8]"
            type="text"
            name=""
            id=""
            placeholder="search here"
          />
        </div>
      </div>
      <div className="flex flex-col h-[70%] overflow-y-scroll scrollbar-hide">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-3 py-5 hover:bg-[#077EFF]">
              <img
                className="w-9 aspect-square rounded-[50%]"
                src={assets.profile_img}
                alt=""
              />

              <div className="flex flex-col ">
                <p>Richard Snford</p>
                <span className="text-[#9f9f9f] text-sm hover:text-white">
                  Hello How r u?
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
