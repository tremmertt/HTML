import React from "react";
import CardCareers from "../../components/CardCareers/CardCareers";

import CarouselCareers from "../../components/Carousel/CarouselCareers";
import TableCareer from "../../components/TableCareer/TableCareer";

export default function Careers() {
  return (
    <div className="container-fluid xl:w-full xl:h-full ">
      <CarouselCareers />
      <CardCareers />
      <TableCareer />
    </div>
  );
}
