// import { IconHiddenEye, IconShowEye } from "@/resources/icons";
import React, { useState } from "react";
import { useController } from "react-hook-form";

interface InputHookProps {
  control: any;
  type: string;
  name: string;
}

const InputHook = ({ control, type = "text", name, ...props }: any) => {
  // const [passwordShown, setPasswordShown] = useState(false);

  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="relative">
      <input
        type={type}
        className="p-4 w-full border border-gray-100 rounded-lg bg-white outline-none focus:border-blue-500 transition-all"
        {...field}
        {...props}
      />
      {/* {type === "password" && (
        <div
          className="absolute top-[29%] right-[2%] cursor-pointer"
          onClick={() => setPasswordShown((value) => !value)}
        >
          {passwordShown ? <IconHiddenEye /> : <IconShowEye />}
        </div>
      )} */}
    </div>
  );
};

export default InputHook;
