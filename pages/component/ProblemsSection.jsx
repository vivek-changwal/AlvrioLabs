import React from "react";
import Heading from "./Heading";
import ImageContainer from "./ImageContainer";
import Mood from "../../assets/images/ProblemSection/mood-smile.svg";
import RightArrow from "../../assets/images/ProblemSection/rightarrow.svg";

const Title = (props) => {
  return <h3 className="text-lg font-semibold mb-3.5">{props.title}</h3>;
};
const Content = (props) => {
  return <p className="text-lg">{props.content}</p>;
};
const ProblemsSection = () => {
  return (
    <>
      <div className="border-b-2 border-gray-color">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="col-span-3">
            <Heading title="Problems " />
            <Heading title="we are" />
            <Heading title="solving" />
          </div>
          <div className="col-span-9 ml-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-7 mx-auto">
              <div className="grid col-span-1 gap-2 mb-6">
                <div>
                  <Title title="HEAVY HIRING" />
                  <Content content="There are many specialists on the market with different competencies and experience. How do you know which of them will pull off the project? We know who you cant take on the project and who you can't." />
                </div>
              </div>
              <div className="grid grid-flow-col xl:gap-6 lg:gap-6 md:gap-1">
                <div className=" col-span-2 mt-14 ...">
                  <ImageContainer
                    itemProp='image'
                    classes={"w-16 hidden md:block"}
                    src={RightArrow}
                    alt={"Alvrio right arrow"}
                  />
                </div>
                <div className="col-span-5">
                  <div>
                    <ImageContainer
                      itemProp='image'
                      classes={"pb-4 w-1/12"}
                      src={Mood}
                      alt={"Alvrio mood"}
                    />
                    <Content content="We will help you not to make a mistake in the very beginning." />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-7 mx-auto">
              <div className="grid mb-6 col-span-1 gap-2">
                <div>
                  <Title title="UNQUALFIED MANAGEMENT" />
                  <Content content="It's not enough just to hire developers, they need to be managed all the time. This, too, requires both expertise and time." />
                </div>
              </div>
              <div className="grid grid-flow-col xl:gap-6 lg:gap-6 md:gap-1">
                <div className=" col-span-2 mt-14 ...">
                  <ImageContainer
                    itemProp='image'
                    classes={"w-16 hidden md:block"}
                    src={RightArrow}
                    alt={"Alvrio right arrow"}
                  />
                </div>
                <div className="col-span-5">
                  <div>
                    <ImageContainer
                      itemProp='image'
                      classes={"pb-4 w-1/12"}
                      alt={"Alvrio mood "}
                      src={Mood} />
                    <Content content="We will help you not to make a mistake in the very beginning." />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-7 mx-auto">
              <div className="grid mb-6 col-span-1 gap-2">
                <div>
                  <Title title="DEVELOPMENT RISK" />
                  <Content content="Many companies have a long development cycle. After a few months of development, you suddenly can find out about having problems, that waste your time and money." />
                </div>
              </div>
              <div className="grid grid-flow-col xl:gap-6 lg:gap-6 md:gap-1">
                <div className=" col-span-2 mt-14 ...">
                  <ImageContainer
                    itemProp='image'
                    classes={"w-16 hidden md:block"}
                    src={RightArrow}
                    alt={"Alvrio right arrow"}
                  />
                </div>
                <div className="col-span-5">
                  <div>
                    <ImageContainer
                      itemProp='image'
                      classes={"pb-4 w-1/12"}
                      src={Mood}
                      alt={"Alvrio mood"}
                    />
                    <Content content="We will help you not to make a mistake in the very beginning." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ProblemsSection;
