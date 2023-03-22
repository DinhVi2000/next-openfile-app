/* eslint-disable @next/next/no-img-element */
import React from "react";
import Info from "./Info";

const Banner = () => {
  return (
    <div>
      {/* cover image */}
      <div className="max-h-[320px] overflow-hidden relative">
        <div className="h-0 pb-[25%] relative">
          <span className="absolute inset-0 ">
            <img
              src="	https://i.seadn.io/gcs/files/e4f1e2ee5b51a1f5d39cc2a9daa7dd45.png?auto=format&w=1920"
              alt=""
              className="min-h-full min-w-full max-w-full max-h-full w-0 h-0 object-cover top-0 m-auto "
            />
          </span>
        </div>
      </div>

      {/* avatar */}
      <div className="py-0 px-16">
        <div className="flex items-center">
          <div className="mt-[-156px] mb-4">
            <div className="w-[180px] h-[180px] z-[1] relative rounded-2xl overflow-hidden border-[6px] border-white shadow-sm">
              <button>
                <span>
                  <img
                    src="https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=3840"
                    alt="Ani Mkhitaryan"
                    srcSet="https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=48 48w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=64 64w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=128 128w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=256 256w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=384 384w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=512 512w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=640 640w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=750 750w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=828 828w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=1080 1080w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=1200 1200w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=1920 1920w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=2048 2048w, https://i.seadn.io/gcs/files/94225a739bc61a73d0ac88000c0f0bf3.jpg?auto=format&w=3840 3840w"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* info */}
      <Info />
    </div>
  );
};

export default Banner;
