import React from "react";
import Heading from "./Heading";
import ImageContainer from "./ImageContainer";
import Line from '../../assets/images/HeroSection/line.svg';
import Round from '../../assets/images/HeroSection/round.svg';
import RightArrow from '../../assets/images/HeroSection/arrow-right-50 (1).svg';
import LeftArrow from '../../assets/images/HeroSection/arrow-left-46.svg';

const Title = (props) => {
  return <p className="text-lg font-semibold text-secondary-color">{props.content}</p>
}
const Content = (props) => {
  return <p className="text-lg">{props.content}</p>;
};

const WorkSection = () => {
  return (
    <section id="work">
      <div className="border-b-2 border-gray-color">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="col-span-3">
            <Heading title="How we Work" />
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
                classes={"round hidden md:block"}
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
                  classes={"arrow-3 hidden md:block"}
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
                <Title content="Empathize" classes={"list-disc mb-3 bg-primary-color"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2">
                  <span className="text-white">1</span>
                </button>
                <Content content="Conduct research to develop an understanding of your users." classes={"list-disc "} />
              </div>
              <div className="">
                <Title content="Define" classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2">
                  <span className="text-white">2</span>
                </button>
                <Content content="Combine all your research and observe where your users' problems exist." classes={"list-disc "} />
              </div>
              <div className="">
                <Title content="Ideate" classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2">
                  <span className="text-white">3</span>
                </button>
                <Content content="Generate a range of crazy, creative ideas." classes={"list-disc "} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1  lg:grid-cols-3 gap-8  mx-auto mt-6 " >
              <div className="order-3 md:order-1">
                <Title content="Implement" classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2 ">
                  <span className="text-white ">6</span>
                </button>
                <Content content="Put the vision into effect." classes={"list-disc "} />
              </div>
              <div className="order-2 md:order-2">
                <Title content="Test" classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2 ">
                  <span className="text-white">5</span>
                </button>
                <Content content="Return to your users for feedback" classes={"list-disc "} />
              </div>
              <div className="order-1 md:order-3">
                <Title content="Prototype" classes={"list-disc mb-3"} />
                <button
                  className="p-0 w-10 h-10 bg-primary-color rounded-full mb-2 mt-2">
                  <span className="text-white">4</span>
                </button>
                <Content content="Build real, tactile representations for a range of your ideas." classes={"list-disc "} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
