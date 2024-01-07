"use client";

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            src="/My.jpg"
            height={250}
            width={250}
            alt="Bande Abdoul Aziz"
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1  hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text  hover:bg-gradient-to-r from-purple-500 to-orange-400 z-[1] tracking-tighter text-5xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Abdoul Aziz Bande!
        </div>
        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          I do Code &{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            Netflix
          </span>{" "}
          🍿
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate software engineer specialising in web and mobile
          application development with a commitment to the creation of elegant,
          user-friendly applications.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:bandeabdelaziz3@gmail.com")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
