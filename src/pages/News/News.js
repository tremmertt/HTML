import React from "react";
import CarouselNews from "../../components/Carousel/CarouselNews";
import LastestNews from "../../components/News/LastestNews";

export default function News() {
  return (
    <div className="container-fluid xl:w-full xl:h-full ">
      <CarouselNews />
      <LastestNews />
    </div>
  );
}
