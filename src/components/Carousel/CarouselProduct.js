import React, { useRef, useState } from "react";
import Slider from "react-slick";
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
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      { breakpoint: 350, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 3 } },
      { breakpoint: 800, settings: { slidesToShow: 4 } },
      { breakpoint: 1800, settings: { slidesToShow: 5 } },
    ],

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
          className="text-6xl  my-10 font-semibold slide-custom"
          style={{ width: "60%" }}
          key={index}
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
    return (
      <div className="grid grid-cols-3 sm:grid-cols-1">
        <div className=" flex justify-center items-center col-span-3 md:col-span-1 sm:col-span-1  p-10">
          <div> {currentSlide.name}</div>
          <div className="border-solid border-black  w-20 h-20 mr-5 ">
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
        <div className="col-span-3 md:col-span-2 sm:col-span-3 flex justify-center py-10">
          <div
            className="p-6  bg-red-500"
            style={{ width: "70%", height: "400px" }}
          >
            <div> {currentSlide.name}</div>
          </div>
        </div>
      </div>
    );
  }
  function handleChangeVideo() {
    const currentSlide = slides[slideIndex];
    return (
      <div
        className="p-6 px-auto  bg-red-500"
        style={{ width: "", height: "400px" }}
      >
        <div> {currentSlide.name}</div>
      </div>
    );
  }
  function handleClick(slide) {
    const index = slides.findIndex((i) => i.id === slide.id);
    console.log(slider, index);
    // slider go to curent index
    slider.current.slickGoTo(index);

    // set state for slide index which slide is chosen
    setSlideIndex(index);
  }
  console.log("omdex", slideIndex);

  return (
    <div>
      <div
        className="relative w-screen p-0 m-0"
        style={{
          backgroundImage: `url(${"/img/background/agents-background.jpg"})`,
          backgroundSize: "cover",
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
          className="text-white w-screen"
          style={{
            position: "absolute",
            paddingLeft: "15%",
            left: "0%",
            top: "0",
            bottom: "0",
            zIndex: "5",
          }}
        >
          <Slider ref={slider} {...settings} className="">
            {getSlides()}
          </Slider>
        </div>
      </div>

      {handleChangeSkill()}
    </div>
  );
}
