import React from "react";
import "./CarouselDetail.css";

export default function CarouselDetail() {
  return (
    <div className="detail">
      <img
        className=""
        src={require("../../img/DetailCareer/corki.jpg")}
        alt=""
      />
      <div className="">
        <p className="bg-red-500 text-lg text-white w-44 "> ESPORT </p>
        <h1 className="text-5xl font-extrabold text-black">
          Esports Product Manager, Game Changers
        </h1>
        <p>BERLIN, GERMANY JOB ID: REQ-0003923</p>
      </div>
    </div>
  );
}
