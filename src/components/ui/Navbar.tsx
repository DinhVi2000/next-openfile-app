import { IconOpenSea } from "@/resources/icons";
import React from "react";

import IconSearch from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="px-16 bg-white w-full h-[72px] flex items-center sticky top-0 z-20 ">
      {/* logo */}
      <div className="flex items-center gap-2 mr-12">
        <IconOpenSea className="w-10 h-10" />
        <span className="text-2xl font-bold">OpenSea </span>
      </div>

      {/* search bar */}
      <label
        className="p-2 rounded-xl border border-gray-200 w-full flex gap-2 text-base items-center"
        htmlFor="searchbar"
      >
        <IconSearch className="text-grey" />
        <input
          id="searchbar"
          type="text"
          className="w-full outline-none"
          placeholder="Search items, collections, and accounts "
        />
      </label>

      {/* nav items */}
      <div className="flex">
        <div className="px-4 font-semibold">Drops</div>
        <div className="px-4 font-semibold">Stats</div>
        <div className="px-4 font-semibold">Resources</div>
      </div>
    </div>
  );
};

export default Navbar;
