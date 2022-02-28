import React from "react";
import "./Banner.css";

export default function BannerService() {
  return (
    <div className=" works container-fluid py-16 mx-auto">
      <div className="grid justify-items-stretch">
        <h1 className="text-3xl md:text-6xl sm:text-4xl text-blue-400 font-mono font-extrabold">
          {" "}
          WHY CHOOSE US{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8"
          style={{ width: "300px", height: "10px" }}
        ></div>
      </div>
      <div className="flex justify-center mx-8 leading-4 mt-10 px-14">
        <p className="text-xl md:text-2xl sm:text-3xl font-extralight ">
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
      <div className=" mt-10 px-2 mx-20 grid md:grid-cols-10 sm:grid-cols-3 grid-cols-2">
        <div className="md:col-span-2 sm:col-span-1 col-span-1 ">
          <img
            className="mx-auto w-1/2"
            src={require("../../img/artificial-intelligence-2.png")}
            alt=""
          />
          <h5 className="text-md sm:text-sm m-4 pt-3 text-blue-700 font-semibold">
            {" "}
            LONG-TERM PARTNERSHIPS{" "}
          </h5>
        </div>
        <div className="md:col-span-2 sm:col-span-1 col-span-1">
          <img
            className="mx-auto w-1/2"
            src={require("../../img/artificial-intelligence-1.png")}
            alt=""
          />
          <h5 className="text-md sm:text-sm pt-3 m-4 text-blue-700 font-semibold">
            {" "}
            EFFICIENT WORKING PROCESS{" "}
          </h5>
        </div>
        <div className="md:col-span-2 sm:col-span-1 col-span-1">
          <img
            className="mx-auto w-1/2"
            src={require("../../img/artificial-intelligence-3.png")}
            alt=""
          />
          <h5 className="text-md sm:text-sm pt-3 m-4 text-blue-700 font-semibold">
            {" "}
            QUALITY ASSURANCE{" "}
          </h5>
        </div>
        <div className="md:col-span-2 sm:col-span-1 col-span-1">
          <img
            className="mx-auto w-1/2"
            src={require("../../img/artificial-intelligence-4.png")}
            alt=""
          />
          <h5 className="text-md sm:text-sm pt-3 m-4 text-blue-700 font-semibold">
            {" "}
            STRONG TECHNICAL TEAM
          </h5>
        </div>
        <div className="md:col-span-2 sm:col-span-1 col-span-1">
          <img
            className="mx-auto w-1/2"
            src={require("../../img/artificial-intelligence-5.png")}
            alt=""
          />
          <h5 className="text-lg sm:text-sm pt-3 m-4 text-blue-700 font-semibold">
            {" "}
            3D ART EXPERT{" "}
          </h5>
        </div>
      </div>
    </div>
  );
}
