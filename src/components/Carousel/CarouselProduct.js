import React, { useRef, useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "./CarouselProduct.css";
export default function CarouselProduct() {
  const slider = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      id: 1,
      name: "BRIMSTONE",
      image: "/product/Astra_Ability_Icons_X_CosmicDividev2.png",
    },
    {
      id: 2,
      name: "PHOENIX",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 3,
      name: "SAGE",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 4,
      name: "SOVA",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 5,
      name: "VIPER",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 6,
      name: "CYPHER",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 7,
      name: "REYNA",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 8,
      name: "KILLJOY",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 9,
      name: "BREACH",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 10,
      name: "OMEN",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 11,
      name: "JETT",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 12,
      name: "RAZE",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 13,
      name: "SKYE",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 14,
      name: "YORU",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 15,
      name: "ASTRA",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
    {
      id: 16,
      name: "KAY/O",
      image: "/product/Astra_Ability_Icons_E_Nebulav2.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    variableWidth: true,

    // afterChange: (currentSlide, nextSlide) => {
    //   setUpdateCount(updateCount + 1);
    //   // this.setState((state) => ({ updateCount: state.updateCount + 1 }));
    //   console.log("before change", currentSlide, updateCount, nextSlide);
    // },
    // beforeChange: (current, next) => {
    //   setUpdateCount(setSlideIndex + 1);
    //   console.log("after change", current, setSlideIndex);

    //   // this.setState({ slideIndex: next });
    // },
  };

  function getSlides() {
    const rows = [];
    for (const index in slides) {
      const slide = slides[index];
      rows.push(
        <div
          onClick={() => handleClick(slide)}
          className="text-6xl  my-10 font-semibold"
          style={{ width: "60%" }}
        >
          <h3
            className={
              index === slideIndex ? "text-blue-400 text-left" : " text-left "
            }
          >
            {" "}
            <span
              className={
                index === slideIndex
                  ? "text-4xl  mx-3 font-extralight"
                  : "text-xl mx-3 font-extralight"
              }
            >
              {" "}
              {slide.id}{" "}
            </span>{" "}
            {slide.name}{" "}
          </h3>
        </div>
      );
    }
    return rows;
  }

  function handleChangeSkill() {
    const currentSlide = slides[slideIndex];
    console.log("slideIndex", slideIndex);
    console.log("currentSlide", currentSlide);
    return (
      <div className="grid grid-cols-4 sm:grid-cols-1 slide-custom">
        <div className=" flex justify-start col-span-2 sm:col-span-1 ml-20 mt-10 px-28">
          {currentSlide.name}
          <div className="border-solid border-black w-20 h-20 mr-5 ">
            <img
              className="bg-gray-300"
              src={require(`../../img${currentSlide.image}`)}
              alt=""
            />
          </div>
          <div className="border-solid border-black w-20 h-20 mr-5">
            <img
              className="bg-gray-300"
              src={require("../../img/product/Astra_Ability_Icons_E_Nebulav2.png")}
              alt=""
            />
          </div>
          <div className="border-solid border-black w-20 h-20 mr-5">
            <img
              className="bg-gray-300"
              src={require("../../img/product/Astra_Ability_Icons_C_GravityWellv2.png")}
              alt=""
            />
          </div>
          <div className="border-solid border-black w-20 h-20">
            <img
              className="bg-gray-300"
              src={require("../../img/product/Astra_Ability_Icons_X_CosmicDividev2.png")}
              alt=""
            />
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 flex justify-center py-10">
          {currentSlide.name}
          <div
            className="p-6 mt-8 bg-red-500 w-72 h-60"
            style={{ width: "400px", height: "400px" }}
          ></div>
        </div>
      </div>
    );
  }

  function handleClick(slide) {
    const index = slides.findIndex((i) => i.id === slide.id);
    // console.log(this.slider);
    // slider go to curent index
    slider.current.slickGoTo(index - 2);

    // set state for slide index which slide is chosen
    setSlideIndex(index);
  }
  console.log("omdex", slideIndex);

  return (
    <div
      className="relative w-screen p-0 m-0"
      style={{
        backgroundImage: `url(${"/img/background/agents-background.jpg"})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        height: "700px",
        width: "100vw",
      }}
    >
      {/* <img
        className="mt-14 w-screen sm:w-screen bg-repeat h-fit"
        src={require("../../img/agents-background.jpg")}
        alt=""
         
      /> */}
      <div
        className="text-white h-2/3 w-screen"
        style={{
          position: "absolute",
          paddingLeft: "15%",
          left: "0%",
          top: "0",
          bottom: "0",
          zIndex: "5",
        }}
      >
        <Slider
          ref={slider}
          {...settings}
          className=""
          style={{
            height: "200px",
            width: "100%",
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
        >
          {getSlides()}
        </Slider>
      </div>
      {/* <div
        className="px-52 bg-transparent  grid grid-cols-4 sm:grid-cols-2"
        style={{ zIndex: "10" }}
      >
        <h2 className="text-3xl sm:text-lg font-extrabold ml-20 sm:ml-4 font-serif text-left mt-10">
          {" "}
          KỸ NĂNG ĐẶC BIỆT{" "}
        </h2>
        <div className="sm:col-span-1 col-span-1">{handleChangeSkill()}</div>
      </div> */}
    </div>
  );
}
