import { useModalContext } from "@/contexts/modal-context";
import { MODAL_NAME } from "@/utils/constants";
import axios from "axios";
import React, { useState, memo } from "react";

const Wrapper = ({ currentTab }: any) => {
  const TabNode: any = {
    collection: <CollectionTab />,
    file: <FileTab />,
  };

  return (
    <div className="w-full flex items-center justify-center mx-16 border rounded-xl border-gray-200 mb-10">
      {TabNode[currentTab]}
    </div>
  );
};

export default Wrapper;

const CollectionTab = memo(function CollectionTab() {
  const { openModal } = useModalContext();

  return (
    // no file
    <div className="my-20">
      <h3 className="text-lg">No collection found for this search</h3>
      <div className="w-full text-center my-3">
        <button
          className="text-white mx-auto bg-blue-500 rounded-xl py-3 px-4 cursor-pointer
                     hover:bg-blue-400 transition-all text-sm font-semibold"
        onClick={() => openModal(MODAL_NAME.CREATE_COLLECTION)}
        >
          Create Collection
        </button>
      </div>
    </div>
  );
});

const FileTab = memo(function CollectionTab() {
  const [file, setFile] = useState();

  var POST_URL =
    "https://api.cloudinary.com/v1_1/" + "djbob7bxy" + "/auto/upload";

  const submitFile = (payload: any) => {
    const data = new FormData();
    data.append("file", payload);
    data.append("upload_preset", "b8oqqd5w");
    data.append("cloud_name", "djbob7bxy");

    axios
      .post(POST_URL, data)
      .then(({ data }: any) => {
        console.log("data :", data);
      })
      .catch((e) => console.log("e :", e));
  };

  const onSelectFiles = async (e: any) => {
    setFile(e.target.files[0]);
    submitFile(e.target.files[0]);
  };
  return (
    // no file
    <div className="my-20">
      <h3 className="text-lg">No file found for this search</h3>
      <div className="w-full text-center my-3">
        <input
          type="file"
          id="file"
          // multiple
          className="hidden"
          onChange={onSelectFiles}
        />
        <label
          htmlFor="file"
          className="text-white mx-auto bg-blue-500 rounded-xl py-3 px-4 cursor-pointer inline-block
               hover:bg-blue-400 transition-all text-sm font-semibold"
        >
          Upload file
        </label>
      </div>
    </div>
  );
});
