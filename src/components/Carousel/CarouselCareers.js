import React from "react";
import ReactPlayer from "react-player";

export default function CarouselCareers() {
  return (
    <div className="container-fluid videoPlay" style={{ position: "relative" }}>
      {/* <img src={require('../../img/static-frame.jpg')} alt="" /> */}
      <div>
        {/* <div className="absolute" style={{ filter: "blur(20px)" }}>
          <ReactPlayer
            url="https://www.riotgames.com/darkroom/original/8a4aa4f7fcd70601d93e5ff0d7f12b0d:1b4eea445bc042f5be0de9824451ffee/nnp-for-rgcom-v3.mp4"
            width={"100%"}
            height={"80%"}
            pip={true}
            playing={true}
            muted={true}
            loop={true}
          />
        </div> */}
        <div>
          <ReactPlayer
            url="https://www.riotgames.com/darkroom/original/8a4aa4f7fcd70601d93e5ff0d7f12b0d:1b4eea445bc042f5be0de9824451ffee/nnp-for-rgcom-v3.mp4"
            width={"100%"}
            height={"100%"}
            pip={true}
            playing={true}
            muted={true}
            loop={true}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              margin: "auto",
              zIndex: "10",
            }}
            className="top-4 md:top-48 sm:top-36 lg:top-64"
          >
            <div className="flex flex-col justify-center align-middle text-center items-center">
              <h1 className="text-2xl lg:text-7xl md:text-5xl sm:text-3xl font-extrabold basis-1/2 my-6 sm:my-1 text-white">
                UNLEASH PLAY
              </h1>
              <button className="rounded-xl sm:my-2 bg-red-600 text-white md:h-20 md:w-60 sm:h-14 sm:w-40 w-40 h-10">
                {" "}
                Work With Us{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
