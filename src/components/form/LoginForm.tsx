import { IconOpenSea } from "@/resources/icons";
import { path } from "@/utils/$path";
import { loginYupSchema } from "@/validators/login.validator";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputHook from "../hooks/InputHook";
import { useAuthContext } from "@/contexts/auth-context";

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  }: any = useForm({
    resolver: yupResolver(loginYupSchema),
  });

  const { loginWithEmail } = useAuthContext();

  const onSubmit: any = (formData: any) => {
    loginWithEmail(formData);
    console.log("onSubmit");
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-8 text-gray-600">
      {/* title */}
      <div className="text-center mb-4">
        <h3 className="mb-2">
          <Link href={path.static.home}>
            <IconOpenSea className="w-[100px] inline-block" />
          </Link>
        </h3>
        <h4 className="text-lg font-semibold">Sign in</h4>
        <p className="text-sm">Sign in with your email and password</p>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* input field */}
        <div className="mb-3">
          <div className="flex w-full justify-between">
            <label className="block" htmlFor="email">
              Email
            </label>
            <p className="text-red-600 text-sm h-4 leading-6">
              {errors?.email?.message}
            </p>
          </div>
          <InputHook
            control={control}
            name="email"
            type="text"
            placeholder="Email address"
            className="py-2 px-4 rounded-xl border border-gray-200 w-[350px]"
          />
        </div>

        {/* password field */}
        <div className="mb-2">
          <div className="flex w-full justify-between">
            <label className="block" htmlFor="email">
              Password
            </label>
            <p className="text-red-600 text-sm h-4 leading-6">
              {errors?.password?.message}
            </p>
          </div>
          <InputHook
            control={control}
            name="password"
            type="password"
            placeholder="Password"
            className="py-2 px-4 rounded-xl border border-gray-200 w-[350px]"
          />
        </div>

        {/* forgot password link */}
        <Link
          href={path.static.home}
          className="text-blue-600 text-right w-full block mb-2 text-[13px]"
        >
          Forgot password?
        </Link>
        <div className="w-full text-center ">
          <button
            type="submit"
            className="bg-blue-500 text-white w-full text-lg px-6 py-3 rounded-xl mx-auto inline-block"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
