/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./LastestNews.css";

export default function LastestNews() {
  function getPictures() {
    const rows = [];
    const images = [
      "/img/News/new1.png",
      "/img/News/new2.png",
      "/img/News/new3.png",
      "/img/News/new4.jpg",
      "/img/News/new5.png",
      "/img/News/new6.png",
      "/img/News/new7.jpg",
      "/img/News/new8.png",
    ];
    for (const image of images) {
      const name = image.split("/")[image.split("/").length - 1];
      console.log("image", image);
      rows.push(
        <div className="text-left p-5">
          <div
            key={name}
            className="col-span-1 shadow-xl rounded"
            style={{
              width: "350px",
              height: "180px",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <p className="mt-2">
            FEB 23, 2022 <a href="#">Go to</a>
          </p>
          <h1 className="text-2xl">Pi test 2</h1>
        </div>
      );
    }
    return rows;
  }

  return (
    <div className="container-fluid py-16 mx-auto sm:justify-start">
      <div className="grid justify-items-stretch">
        <h1 className="text-3xl md:text-6xl sm:text-4xl text-blue-400 font-mono font-extrabold">
          {" "}
          LATEST NEWS{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8"
          style={{ width: "300px", height: "10px" }}
        ></div>
      </div>

      <div className="px-24 m-10 grid grid-cols-3 sm:grid-cols-1">
        <div
          className="pictureNews rounded-lg shadow-2xl md:col-span-2 sm:col-span-1 flex justify-items-center sm:justify-items-start"
          style={{ width: "300px" }}
        >
          <img src={require("../../img/News/new1.png")} alt="" />
        </div>
        <div className="col-span-3 sm:col-span-2 text-left ml-3 leading-loose">
          <h1 className="text-xl"> FEB 23, 2022</h1>
          <p className="text-lg"> pitest 5 </p>
          <p className="text-sm"> pitest 5</p>
        </div>
        <div className="col-span-3 sm:col-span-1 grid lg:grid-cols-3 sm:grid-cols-1 mt-10">
          {getPictures()}
        </div>
      </div>
    </div>
  );
}
