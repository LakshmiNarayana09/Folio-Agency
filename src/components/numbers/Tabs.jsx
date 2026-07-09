import React from "react";

function Tabs() {
  return (
    <div className="w-[721px] mt-16">

      

      <div className="flex items-center">

        <div className="w-[237px] border-t border-white"></div>

        <div className="w-[484px] border-t border-[#606060]"></div>

      </div>

      

      <div className="flex justify-between mt-8">

        <button className="text-[#8B8B8B] text-[18px] font-semibold">
          Overview
        </button>

        <button className="text-white text-[18px] font-semibold">
          Features
        </button>

        <button className="text-[#8B8B8B] text-[18px] font-semibold">
          Highlights
        </button>

        <button className="text-[#8B8B8B] text-[18px] font-semibold">
          Compatibility
        </button>

      </div>

    </div>
  );
}

export default Tabs;