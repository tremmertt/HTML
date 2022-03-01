import React from "react";
import "./CarouselDetail.css";

export default function CarouselDetail() {
  return (
    <div className="detail relative ">
      <img
        className="absolute right-3 bottom-0 z-0"
        src={require("../../img/DetailCareer/corki.jpg")}
        alt=""
      />
      <div
        className="flex justify-center items-center flex-col "
        style={{ height: "400px" }}
      >
        <p className="bg-red-500 text-lg text-white w-44 "> ESPORT </p>
        <h1 className="text-6xl font-extrabold text-black pt-12 ">
          (Senior) Software Engineer - Frontend - Teamfight Tactics
        </h1>
        <p className="py-1 pt-12">BERLIN, GERMANY JOB ID: REQ-0003923</p>
        <p className="py-1">BERLIN, GERMANY JOB ID: REQ-0003923</p>
      </div>
    </div>
  );
}
