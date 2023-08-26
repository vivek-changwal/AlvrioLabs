import React from "react";
import Button from "./Button";
import ImageContainer from "./ImageContainer";
import Cross from "../../assets/images/HeroSection/cross.svg";
import Archery from "../../assets/images/HeroSection/archery.svg";
import LineThree from "../../assets/images/HeroSection/line_three.svg";
import Rotate from "../../assets/images/HeroSection/rotate.svg";
import Cube from "../../assets/images/HeroSection/cube.svg";
import Cloud from "../../assets/images/HeroSection/cloud.svg";
import Com from "../../assets/images/HeroSection/cloud.svg";
import Like from "../../assets/images/HeroSection/like.svg";
import Box2 from "../../assets/images/HeroSection/box2.svg";
import Execution from "../../assets/images/HeroSection/execution.svg";
import Person from "../../assets/images/HeroSection/person.svg";
import Initiation from "../../assets/images/HeroSection/initiation.svg";
import All from "../../assets/images/HeroSection/all.svg";
import Triangle from "../../assets/images/HeroSection/triangle.svg";
import ZigzapUp from "../../assets/images/HeroSection/zigzag_up.svg";
import FillTriangle from "../../assets/images/HeroSection/fill_triangle.svg";
import ZigzagDown from "../../assets/images/HeroSection/zigzag_down.svg";

const HeroSection = () => {
  return (
    <section className="bg-white border-b-2 border-gray-color" id="home">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-5">
          <div>
            <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
              Trust is earned
            </h1>
            <h1 className="md:w-570 mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
              through experience
            </h1>
            <h1 className="max-w-2xl text-secondary-color mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
              let us earn yours
            </h1>
          </div>
          <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl md:w-500">
            We provide full transparency of development processes, so you can
            stay on top of your business needs
          </p>
          <Button />
        </div>
        <div
          className="hidden lg:mt-0 lg:col-span-7 lg:flex relative"
          style={{ height: "510px" }}
        >
          <ImageContainer
            classes={"w-6 absolute cross animate__animated animate__rotateIn animate__repeat-2"}
            src={Cross}
            itemProp='image'
            alt={"Alvrio cross"}
          />
          <ImageContainer
            classes={"w-32 absolute archery "}
            src={Archery}
            itemProp='image'
            alt={"Alvrio archery"}
          />
          <ImageContainer
            classes={"w-16 absolute line-three"}
            src={LineThree}
            itemProp='image'
            alt={"Alvrio line"}
          />
          <ImageContainer
            classes={"w-44 absolute rotate  "}
            src={Rotate}
            itemProp='image'
            alt={"Alvrio rotate"}
          />
          <ImageContainer
            classes={
              "w-24 absolute cube animate__animated animate__heartBeat animate__repeat-2 "
            }
            itemProp='image'
            src={Cube}
            alt={"Alvrio cube"}
          />
          <ImageContainer
            classes={"w-44 absolute cloud "}
            src={Cloud}
            itemProp='image'
            alt={"Alvrio cloud"}
          />
          <ImageContainer
            classes={"w-32 absolute com"}
            src={Com}
            itemProp='image'
            alt={"Alvrio com"}
          />
          <ImageContainer
            classes={"w-32 absolute like"}
            src={Like}
            itemProp='image'
            alt={"Alvrio like"}
          />
          <ImageContainer
            classes={"w-28 absolute box2 "}
            src={Box2}
            itemProp='image'
            alt={"Alvrio box2"}
          />
          <ImageContainer
            classes={
              "w-32 absolute execution animate__animated animate__shakeY animate__repeat-2"
            }
            itemProp='image'
            src={Execution}
            alt={"Alvrio execution"}
          />
          <ImageContainer
            classes={"w-40 absolute person "}
            src={Person}
            itemProp='image'
            alt={"Alvrio person"}
          />
          <ImageContainer
            classes={
              "w-32 absolute initiation animate__animated animate__shakeY animate__repeat-2"
            }
            src={Initiation}
            alt={"Alvrio initation "}
          />
          <ImageContainer
            classes={"w-8/12 absolute all"}
            src={All}
            itemProp='image'
            alt={"Alvrio all"}
          />
          <ImageContainer
            classes={"w-11 absolute triangle animate__animated animate__heartBeat animate__repeat-2"}
            src={Triangle}
            itemProp='image'
            alt={"Alvrio triangle"}
          />
          <ImageContainer
            classes={"w-14 absolute zigzag-up animate__animated animate__shakeX animate__repeat-2"}
            src={ZigzapUp}
            itemProp='image'
            alt={"Alvrio zigzap"}
          />
          <ImageContainer
            classes={
              "w-11 absolute fill-triangle animate__animated animate__heartBeat animate__repeat-2"
            }
            itemProp='image'
            src={FillTriangle}
            alt={"Alvrio fill"}
          />
          <ImageContainer
            classes={"w-11 absolute zigzag-down animate__animated animate__shakeX animate__repeat-2"}
            src={ZigzagDown}
            itemProp='image'
            alt={"Alvrio down"}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
