import React from "react";
import Hero from "./Hero";
import News from "./News";
import Tempus from "./Tempus";
import Maecenas from "./Maecenas";
import Consectetur from "./Consectetur";
import Dignissim from "./Dignissim";
import Faucibus from "./Faucibus";
import Diu from "./Diu";
import Karta from "./Karta";
import CarouselFadeExample from "./CarouselFadeExample";
import Kalendar from "./Kalendar";

const Home = () => {
  return (
    <>
      <CarouselFadeExample/>
      {/* <Hero /> */}
      <News />
      {/* <Tempus /> */}
      {/* <Maecenas /> */}
      <Consectetur />
      {/* <Dignissim /> */}
      {/* <Faucibus /> */}
      {/* <Diu /> */}
      <Kalendar/>
      <Karta/>

    </>
  );
};

export default Home;
