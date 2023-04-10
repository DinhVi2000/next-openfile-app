import { IconOpenSea } from "@/resources/icons";
import { staticPaths } from "@/utils/$path";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="border border-gray-200 rounded-2xl p-8 text-gray-600">
      {/* title */}
      <div className="text-center mb-4">
        <h3 className="mb-2">
          <Link href={staticPaths.home}>
            <IconOpenSea className="w-[100px] inline-block" />
          </Link>
        </h3>
        <h4 className="text-lg font-semibold">Sign in</h4>
        <p className="text-sm">Sign in with your email and password</p>
      </div>

      {/* form */}
      <form>
        <div>
          {/* input */}
          <div className="mb-2">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Username Email address"
              className="py-2 px-4 rounded-xl border border-gray-200 w-[350px]"
            />
          </div>
          {/* input */}
          <div className="mb-2">
            <label htmlFor="email" className="block ">
              Password
            </label>
            <input
              id="email"
              type="text"
              placeholder="Password"
              className="py-2 px-4 rounded-xl border border-gray-200 w-[350px]"
            />
          </div>

          {/* forgot */}
          <Link
            href={staticPaths.home}
            className="text-blue-600 text-right w-full block mb-2 text-[13px]"
          >
            Forgot password?
          </Link>
          <div className="w-full text-center ">
            <button className="bg-blue-500 text-white w-full text-lg px-6 py-3 rounded-xl mx-auto inline-block">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
