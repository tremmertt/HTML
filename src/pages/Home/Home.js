import React from "react";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import Clients from "../../components/Clients/Clients";
import Intro from "../../components/Introduction/Intro";
import Join from "../../components/Join/Join";

export default function Home() {
  return (
    <div className="container-fluid">
      <Carousel />
      <Intro />
      <Banner />
      <Clients />
      <Join />
    </div>
  );
}
