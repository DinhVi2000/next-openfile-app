import React from "react";

const Tabs = () => {
  return (
    <div className="mx-16 flex gap-8 mt-8 mb-6  border-b-[0.5px] border-gray-200">
      {/* tab */}
      <div className="text-base font-medium pb-2.5 border-black border-b-[3px]">
        Items
      </div>
      {/* tab */}
      <div className="text-base font-medium pb-2.5 text-[#707a83] ">
        Analytics
      </div>
      {/* tab */}
      <div className="text-base font-medium pb-2.5 text-[#707a83] ">
        Activity
      </div>
    </div>
  );
};

export default Tabs;
