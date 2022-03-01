import React from "react";
import "./Intro.css";

export default function IntroService() {
  return (
    <div className="py-16 mx-auto ">
      <div className="grid justify-items-stretch">
        <h1 className="text-3xl md:text-6xl sm:text-4xl mr-6 text-blue-400 font-mono font-extrabold sm:ml-2">
          {" "}
          WHAT WE DO{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8"
          style={{ width: "300px", height: "10px" }}
        ></div>
      </div>
      <div className="flex justify-center mx-8 leading-4 mt-10 px-14">
        <p className="text-xl md:text-2xl sm:text-3xl font-extralight">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </p>
      </div>
      <div className="grid justify-items-center lg:grid-cols-5 sm:grid-cols-2 mt-10 px-2 mx-6">
        <img
          className="w-1/2 ml-4"
          src={require("../../img/Icon-05.png")}
          alt=""
        />
        <img
          className="w-1/2 ml-4"
          src={require("../../img/Icon-04.png")}
          alt=""
        />
        <img
          className="w-1/2 ml-4"
          src={require("../../img/Icon-02.png")}
          alt=""
        />
        <img
          className="w-1/2 ml-4"
          src={require("../../img/Icon-01.png")}
          alt=""
        />
        <img
          className="w-1/2 ml-4"
          src={require("../../img/Icon-03.png")}
          alt=""
        />
      </div>
    </div>
  );
}
