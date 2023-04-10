import React, { useRef, useState } from "react";
import BoxModal from "./BoxModal";

import IconClose from "@mui/icons-material/Close";
import IconKeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { IconLock, IconPublic } from "@/resources/icons";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useModalContext } from "@/contexts/modal-context";
import Dropdown from "@/components/custom/Dropdown";

const CreateCollection = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { closeModal } = useModalContext();

  useOnClickOutside(modalRef, closeModal);

  const options = [
    {
      label: "Public",
      value: "public",
      icon: <IconPublic className="text-grey text-base" />,
    },
    {
      label: "Private",
      value: "private",
      icon: <IconLock className="text-grey text-base" />,
    },
  ];

  return (
    <BoxModal>
      <div ref={modalRef} className="bg-white rounded-xl w-full max-w-[400px]">
        {/* header */}
        <header className="px-6 py-4 border-b-[1px] border-gray-200 relative">
          <div className="text-lg font-semibold text-center px-7 relative">
            Create new collection
          </div>
          <IconClose
            className="absolute top-4 right-6 cursor-pointer"
            onClick={closeModal}
          />
        </header>
        {/* section */}
        <section className="pt-4 px-6">
          <div className="flex">
            <input
              type="text"
              className="border border-gray-200 border-r-transparent rounded-l-xl p-3 outline-none text-sm w-full"
              placeholder="collection name"
            />
            <Dropdown options={options} />
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
