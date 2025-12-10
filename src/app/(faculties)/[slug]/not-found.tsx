import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        {/* Component Code */}
        <div
          className="relative flex items-center justify-center w-full text-center text-white bg-center bg-cover h-[600px]"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-75" />
          <div className="z-10 grid max-w-3xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
            <div className="sm:border-r-2">
              <div className="flex items-end">
                <div className="">
                  <div className="flex items-center justify-center w-24 h-24 text-center border">
                    <div>
                      <p className="">Hours</p>
                      <p className="text-xl font-bold sm:text-2xl">16</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-24 h-24 text-center text-gray-900 bg-white">
                    <div>
                      <p className="">Mins</p>
                      <p className="text-xl font-bold sm:text-2xl">39</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-24 h-24 text-center bg-green-600">
                    <div>
                      <p className="">15</p>
                      <p className="text-xl font-bold sm:text-2xl">Secs</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-48 h-48 text-center bg-gray-800">
                  <div>
                    <p className="">Days</p>
                    <p className="text-xl font-bold sm:text-3xl">150</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-left">
              <div className="mb-4 text-white">
                <div className="flex">
                  <span className="text-8xl">
                    4 <span className="text-site-primary">0</span> 4
                  </span>
                  <svg
                    height="35px"
                    className="mb-2"
                    fill="#00a63e"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g id="right_x5F_quote">
                        <g>
                          <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" />
                          <path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="mt-2 text-base leading-6">
                  Oops! The page you are looking for does not exist. It might
                  have been removed, had its name changed, or is temporarily
                  unavailable. Please check the URL or return to the homepage.
                </p>
                <div className="mt-5 text-sm">
                  <Link
                    href="/"
                    className="font-medium leading-none text-green-600 transition duration-500 ease-in-out hover:text-white"
                  >
                    Go Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
