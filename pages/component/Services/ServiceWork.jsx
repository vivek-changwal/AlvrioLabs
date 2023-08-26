import React from "react";
import Heading from "../Heading";
import ImageContainer from "../ImageContainer";
import Line from '../../../assets/images/HeroSection/line.svg';
import Round from '../../../assets/images/HeroSection/round.svg';
import RightArrow from '../../../assets/images/HeroSection/arrow-right-50 (1).svg';
import LeftArrow from '../../../assets/images/HeroSection/arrow-left-46.svg';

const Title = (props) => {
  return <p className="text-lg font-semibold text-secondary-color">{props.content}</p>
}
const Content = (props) => {
  return <p className="text-lg">{props.content}</p>;
};

const ServiceWork = (props) => {
  return (
    <section id="work">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="col-span-3 mt-24 ">
            <Heading title={props.heading} />
          </div>
          <div className="col-span-9 ml-4 relative">
            <div className="line">
              <ImageContainer
                itemProp='image'

                alt={"Alvrio line "}
                src={Line}
                classes={"line hidden md:block"}
              />
            </div>
            <div className="line-2">
              <ImageContainer
                itemProp='image'
                src={Line}
                alt={"Alvrio line "}
                classes={"line-2 hidden md:block"}
              />
            </div>
            <div className="round">
              <ImageContainer
                itemProp='image'
                alt={"Alvrio round "}
                src={Round}
                classes={"serviceround hidden md:block"}
              />
              <div className="arrow">
                <ImageContainer
                  itemProp='image'
                  src={RightArrow}
                  alt={"Alvrio right arrow"}
                  classes={"arrow hidden md:block"}
                />
              </div>
              <div className="arrow-2">
                <ImageContainer
                  itemProp='image'
                  src={RightArrow}
                  classes={"arrow-2 hidden md:block"}
                  alt={"Alvrio right arrow"}
                />
              </div>
              <div className="arrow-3">
                <ImageContainer
                  itemProp='image'
                  src={RightArrow}
                  alt={"Alvrio right arrow"}
                  classes={"servicearrow-4 hidden md:block"}
                />
              </div>
              <div className="arrow-4 arrows">
                <ImageContainer
                  itemProp='image'
                  src={LeftArrow}
                  alt={"Alvrio left arrow"}
                  classes={"arrow-4 arrows hidden md:block"}
                />
              </div>
              <div className="arrow-5 arrows">
                <ImageContainer
                  itemProp='image'
                  src={LeftArrow}
                  alt={"Alvrio left arrow"}
                  classes={"arrow-5 arrows hidden md:block"}
                />
              </div>
              <div className="arrow-6 arrows">
                <ImageContainer
                  itemProp='image'
                  src={LeftArrow}
                  alt={"Alvrio left arrow"}
                  classes={"arrow-6 arrows hidden md:block"}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1  lg:grid-cols-3 gap-8  mx-auto " >
              <div className="">
                <Title content={props.title1} classes={"list-disc mb-3 bg-primary-color"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2">
                  <span className="text-white">1</span>
                </button>
                <Content content={props.content1} classes={"list-disc "}  />
              </div>
              <div className="">
                <Title content={props.title2} classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2">
                  <span className="text-white">2</span>
                </button>
                <Content content={props.content2} classes={"list-disc "}  />
              </div>
              <div className="">
                <Title content={props.title3} classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2">
                  <span className="text-white">3</span>
                </button>
                <Content content={props.content3} classes={"list-disc "}  />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1  lg:grid-cols-3 gap-8  mx-auto mt-6 " >
              <div className="order-3 md:order-1">
                <Title content={props.title6} classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2 ">
                  <span className="text-white ">6</span>
                </button>
                <Content content={props.content6} classes={"list-disc "}  />
              </div>
              <div className="order-2 md:order-2">
                <Title content={props.title5} classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2 ">
                  <span className="text-white">5</span>
                </button>
                <Content content={props.content5} classes={"list-disc "}  />
              </div>
              <div className="order-1 md:order-3">
                <Title content={props.title4} classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2">
                  <span className="text-white">4</span>
                </button>
                <Content content={props.content4} classes={"list-disc "}  />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ServiceWork;
