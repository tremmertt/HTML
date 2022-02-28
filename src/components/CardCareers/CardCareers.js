import React from "react";

export default function CardCareers() {
  return (
    <div>
      <div>
        <div className="mx-24 mt-14 flex justify-center font-sans text-center text-xl md:text-2xl sm:text-3xl text-black">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
            ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.{" "}
          </p>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3">
          {/*Card 1*/}
          <div
            className="rounded overflow-hidden shadow-lg w-auto "
            style={{ cursor: "pointer" }}
          >
            <img
              className="h-60 "
              src={require("../../img/Careers/lobby-statue-small.jpg")}
              alt="lobby-statue"
            />
            <div className="px-6 py-4 text-left  bg-blue-400">
              <div className="font-bold text-white text-xl mb-2">
                Lorem ipsum dolor
              </div>
              <p className="text-white text-base"> /Learn more </p>
            </div>
          </div>
          {/*Card 2*/}
          <div
            className="rounded overflow-hidden shadow-lg"
            style={{ cursor: "pointer" }}
          >
            <img
              className="h-60"
              src={require("../../img/Careers/5-tips-for-a-successful-remote-interview.png")}
              alt="lobby-statue"
            />
            <div className="px-6 py-4 text-left  bg-blue-400">
              <div className="font-bold text-white text-xl mb-2">
                Lorem ipsum dolor
              </div>
              <p className="text-white text-base">/Learn more</p>
            </div>
          </div>
          {/*Card 3*/}
          <div
            className="rounded overflow-hidden shadow-lg"
            style={{ cursor: "pointer" }}
          >
            <img
              className="h-60"
              src={require("../../img/Careers/AdobeStock.jpeg")}
              alt=""
            />
            <div className="px-6 py-4 text-left  bg-blue-400">
              <div className="font-bold text-white text-xl mb-2">
                Lorem ipsum dolor
              </div>
              <p className="text-white text-base">/Learn more</p>
            </div>
          </div>

          {/*Card 4*/}
          <div
            className="rounded overflow-hidden shadow-lg "
            style={{ cursor: "pointer" }}
          >
            <img
              className="h-60"
              src={require("../../img/Careers/social-impact.jpg")}
              alt=""
            />
            <div className="px-6 py-4 text-left  bg-blue-400">
              <div className="font-bold text-white text-xl mb-2">
                Lorem ipsum dolor
              </div>
              <p className="text-white text-base">/Learn more</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="relative flex justify-center mb-10 hover:underline-offset-3"
              style={{ position: "relative", cursor: "pointer" }}
            >
              <div className="w-auto">
                <img
                  src={require("../../img/Careers/riot-games-tech-summit-2017-272.jpg")}
                  alt=""
                />
              </div>
              <div
                className="text-start text-white sm:mx-auto"
                style={{
                  position: "absolute",
                  left: "36%",
                  margin: "auto",
                  bottom: "0",
                  zIndex: "10",
                }}
              >
                <h3 className="font-mono text-xl sm:text-md font-thin hover:font-extrabold hover:text-3xl hover:underline ">
                  {" "}
                  University Programs{" "}
                </h3>
                <button className="outline outline-offset-1 mt-5 outline-white rounded-lg w-32 m-3 p-2">
                  {" "}
                  / Learn More{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
