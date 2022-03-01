import React from "react";
import Slider from "react-slick";

export default function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="container-fluid py-16">
      <div className="grid justify-items-stretch">
        <h1 className="text-3xl md:text-6xl sm:text-4xl mr-6 text-blue-400 font-mono font-extrabold">
          {" "}
          SOME OF OUR CLIENTS{" "}
        </h1>
        <div
          className="bg-blue-400 justify-self-center rounded-lg mt-8"
          style={{ width: "300px", height: "10px" }}
        ></div>
      </div>

      <div className="mt-20">
        <Slider
          {...settings}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <div className="mx-5">
            <img src={require("../../img/logo/ABOSO.png")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Activision.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Bandainamco.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Codemasters.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../img/logo/EA-1.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Firemonkeys.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/frontier-logo-1.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Gloops.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/GSE-Systems.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../img/logo/HUTCH.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Insomniac-games.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/iracing-logo-1.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Klab-Games.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Kwalee.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Natural-motion.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Piper-work.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/pixyda.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Playground.jpg")} alt="" />
          </div>
          <div>
            <img
              src={require("../../img/logo/RESPAWN-ENTERTAINMENT.jpg")}
              alt=""
            />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Saber-Interactive.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/SEGA-1.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Simbin.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/SMS.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/SONY-LOGO-1.png")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Sony.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/THQ-Nordic.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img
              src={require("../../img/logo/Three-fields-entertainment.jpg")}
              alt=""
            />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Treyarch.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Turn-10-1.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../../img/logo/Ubisoft-1.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Wargaming-1.jpg")} alt="" />
          </div>
          <div className="mx-5">
            <img
              src={require("../../img/logo/Xbox-games-studios.jpg")}
              alt=""
            />
          </div>
          <div className="mx-5">
            <img src={require("../../img/logo/Zynga-1.jpg")} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
