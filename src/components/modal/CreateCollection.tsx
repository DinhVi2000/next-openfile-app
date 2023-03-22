import React from "react";
import BoxModal from "./BoxModal";

import IconClose from "@mui/icons-material/Close";
import IconKeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { IconLock, IconPublic } from "@/resources/icons";

const CreateCollection = () => {
  return (
    <BoxModal>
      <div className="bg-white rounded-xl ">
        {/* header */}
        <header className="px-6 py-4 border-b-[1px] border-gray-200">
          <div className="font-semibold text-center px-7 relative">
            Create new collection
          </div>
        </header>
        {/* section */}
        <section className="py-4 px-6">
          <div className="flex">
            <input
              type="text"
              className="border border-gray-200 border-r-transparent rounded-l-xl p-3 outline-none text-sm w-full"
              placeholder="collection name"
            />
            <Dropdown />
          </div>
        </section>
        {/* footer */}
        <footer className="p-6">
          <button className="py-4 px-6 bg-blue-500 rounded-xl text-white w-full hover:bg-blue-400">
            Create
          </button>
        </footer>
      </div>
    </BoxModal>
  );
};

export default CreateCollection;

const Dropdown = () => {
  return (
    <div className="p-3 border border-gray-200 rounded-r-xl cursor-pointer flex items-center gap-1 text-sm relative">
      Public
      <IconKeyboardArrowDown className="text-grey" />
      {/* content */}
      <div className="rounded-[10px] bg-white shadow-dd absolute z-40 top-full right-[-10px]">
        {/* item */}
        <div className="p-4 border-b-[1px] border-gray-200 flex items-center gap-2">
          <IconPublic className="text-grey text-base" />
          Public
        </div>
        {/* item */}
        <div className="p-4 border-b-[1px] border-gray-200 flex items-center gap-2">
          <IconLock className="text-grey text-base" />
          Private
        </div>
      </div>
    </div>
  );
};
