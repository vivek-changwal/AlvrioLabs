import React from "react";
import Heading from "./Heading";
import ImageContainer from "./ImageContainer";
import WhatWeDo from "./WhatWeDo";
import Engineering from "../../assets/images/HeroSection/engineering.svg";
import Development from "../../assets/images/HeroSection/development.svg";
import ProductEngineering from "../../assets/images/HeroSection/product_engineering.svg";
import Services from "./Services";
const Title = (props) => {
  return <h3 className="text-lg font-semibold mb-3.5">{props.title}</h3>;
};

const Content = (props) => {
  return <p className="text-lg">{props.content}</p>;
};

const AboutSection = () => {
  return (
    <div className="border-b-2 border-gray-color">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8 mx-auto lg:py-16">
        <div className="flex items-center">
          <Heading title="Key features" />
        </div>
        <div>
          <ImageContainer
            src={Engineering}
            itemProp='image'
            alt={"Expert team collaborating on product design and development"} />
          <Title title="DEDICATED TEAMS" />
          <Content content="The notion of a dedicated team compries a customer and Alvrio labs company, that acts as an intermediry to find personnel for the customer's project." />
        </div>
        <div>
          <ImageContainer
            src={ProductEngineering}
            itemProp='image'
            alt={"API Product Engineering Services - Alvrio Labs: Empowering Seamless Integration and Scalable Solutions"} />
          <Title title="PRODUCT ENGINEERING" />
          <Content content="To create a successful product it is necessary to combine profound technical experience and understanding of advanced business strategies." />
        </div>
        <div>
          <ImageContainer
            src={Development}
            itemProp='image'
            alt={"Empowering Seamless Integration and Scalable Solutions"} />
          <Title title="DEVELOPMENT" />
          <Content content="With Alvrio Labs you can get full cycle services to build custom software for a broad range of verticals and functional areas." />
        </div>
      </div>
      <Services />
      <WhatWeDo />
    </div>
  );
};

export default AboutSection;
