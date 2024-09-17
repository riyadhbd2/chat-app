import React, { useState } from "react";
import assets from "../assets/assets";

const LeftSideBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#001030] text-white h-[75vh]">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <img className="w-40" src={assets.logo} alt="" />
          <div className="flex justify-between w-5 items-center">
            <img
              onClick={handleMenu}
              className="w-12 opacity-60 cursor-pointer ..."
              src={assets.menu_icon}
              alt=""
            />
            {showMenu && (
              <div className="relative top-[100px] right-20  p-5 w-[200px] rounded-sm bg-white text-black">
                <p className="cursor-pointer text-[10px]">Edit Profile</p>
                <hr className="border-[1px]" />
                <p className="cursor-pointer text-[10px]">Log Out</p>
              </div>
            )}
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
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-5 hover:bg-[#077EFF]"
            >
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
