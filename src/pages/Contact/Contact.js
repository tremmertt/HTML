import React from "react";
import CarouselContact from "../../components/Carousel/CarouselContact";
import MapContact from "../../components/MapContact/MapContact";

export default function Contact() {
  return (
    <div className="container-fluid xl:w-full xl:h-full ">
      <CarouselContact />
      <MapContact />
    </div>
  );
}
