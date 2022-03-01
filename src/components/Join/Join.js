import React from "react";
import "./Join.css";

export default function Join() {
  return (
    <div className="join container-fluid py-16 mx-auto">
      <div className="grid justify-items-stretch">
        <h1 className="text-3xl md:text-6xl sm:text-4xl mr-6 text-blue-400 font-mono font-extrabold">
          {" "}
          GET IN TOUCH{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8"
          style={{ width: "300px", height: "10px" }}
        ></div>
      </div>
      <div className="grid lg:grid-cols-12 md:grid-cols-2 my-10 ">
        <div className="lg:col-span-6 md:col-span-2 sm:col-span-2 border-r-2 border-gray-500 ml-6 mt-4">
          <p className="text-lg font-sans font-light flex justify-start ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="outline outline-offset-4 outline-4 outline-blue-500 rounded-3xl my-10 p-3 font-extrabold text-xl text-blue-600 tracking-widest">
            {" "}
            CONTACT US{" "}
          </button>
        </div>

        <div className="lg:col-span-6 md:col-span-2 sm:col-span-2 ml-6 mt-4">
          <p className="text-lg font-sans font-light flex justify-start ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="outline outline-offset-4 outline-4 outline-blue-500 rounded-3xl my-10 p-3 font-extrabold text-xl text-blue-600 tracking-widest">
            {" "}
            JOIN US{" "}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
