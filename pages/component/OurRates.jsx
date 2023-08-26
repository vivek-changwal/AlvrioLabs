import React from "react";
import ImageContainer from "./ImageContainer";
import Heading from "./Heading";
import Left from "../../assets/images/ProblemSection/left-curve.svg";
import OurRatesCircleLeft from "../../assets/images/OurRates/OurRates-CircleLeft.svg";
import OurRatesControl from "../../assets/images/OurRates/OurRates-Control.svg";
import OurRatesPaper from "../../assets/images/OurRates/OurRates-paper.svg";
import OurRatesPerson from "../../assets/images/OurRates/OurRates-Person.svg";
import OurRatesPipe from "../../assets/images/OurRates/OurRates-Pipe.svg";
import OurRatesRight from "../../assets/images/OurRates/OurRates-Right.svg";
import OurRatesSquare from "../../assets/images/OurRates/OurRates-Square.svg";
import OurRatesTestTube from "../../assets/images/OurRates/OurRates-testtube.svg";
import OurRatesTriangle from "../../assets/images/OurRates/OurRates-triangle.svg";
import OurRatesTriangleDark from "../../assets/images/OurRates/OurRates-triangleDark.svg";
import OurRatesZigzag from "../../assets/images/OurRates/OurRates-ZigZag.svg";
import OurRatesZigzagTop from "../../assets/images/OurRates/OurRates-ZigzagTop.svg";
import OurRatesPlus from "../../assets/images/OurRates/Ourrates-Plus.svg";
import Button from "./Button";

const Content = (props) => {
  return <p className="text-lg list-disc mt-4">{props.content}</p>;
};
const OurRates = () => {
  return (
    <section id="rates">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="col-span-5 relative images-rates">
          <ImageContainer
            classes={"w-10 absolute our-rates-triangle  hidden sm:block animate__animated animate__heartBeat animate__repeat-2"}
            src={OurRatesTriangle}
            itemProp='image'
            alt={"Alvrio our rates triangle"}
          />
          <ImageContainer
            classes={"w-11 absolute our-rates-zigzag-top  hidden sm:block animate__animated animate__shakeX animate__repeat-2"}
            src={OurRatesZigzagTop}
            itemProp='image'
            alt={"Alvrio our rates zig zag"}
          />
          <ImageContainer
            classes={"w-10 absolute our-rates-right hidden sm:block"}
            src={OurRatesRight}
            itemProp='image'
            alt={"Alvrio our rates right"}
          />
          <ImageContainer
            classes={"w-6 absolute our-rates-plus  hidden sm:block animate__animated animate__rotateIn animate__repeat-2"}
            src={OurRatesPlus}
            itemProp='image'
            alt={"Alvrio our rates plus"}
          />
          <ImageContainer
            classes={"w-6 absolute our-rates-pipe hidden sm:block"}
            src={OurRatesPipe}
            alt={"Alvrio our rates pipe"}
            itemProp='image'
          />
          <ImageContainer
            classes={
              "w-80 absolute our-rates-person animate__animated animate__shakeY animate__repeat-2"
            }
            itemProp='image'
            src={OurRatesPerson}
            alt={"Alvrio our rates person"}
          />
          <ImageContainer
            classes={"w-10 absolute our-rates-circle-left hidden sm:block"}
            src={OurRatesCircleLeft}
            itemProp='image'
            alt={"Alvrio our rates circle left"}
          />
          <ImageContainer
            classes={"w-32 absolute our-rates-test-tube hidden sm:block"}
            src={OurRatesTestTube}
            itemProp='image'
            alt={"Alvrio our rates tube"}
          />
          <ImageContainer
            classes={"w-6 absolute our-rates-paper"}
            src={OurRatesPaper}
            itemProp='image'
            alt={"Alvrio our rates paper"}
          />
          <ImageContainer
            classes={"w-32 absolute our-rates-control "}
            src={OurRatesControl}
            itemProp='image'
            alt={"Alvrio our rates control"}
          />
          <ImageContainer
            classes={"w-6 absolute our-rates-plus-1  hidden sm:block animate__animated animate__rotateIn animate__repeat-2"}
            src={OurRatesPlus}
            itemProp='image'
            alt={"Alvrio our rates plus"}
          />
          <ImageContainer
            classes={"w-8 absolute our-rates-square  hidden sm:block animate__animated animate__heartBeat animate__repeat-2"}
            src={OurRatesSquare}
            itemProp='image'
            alt={"Alvrio our rates square"}
          />
          <ImageContainer
            classes={"w-6 absolute our-rates-triangle-dark  hidden sm:block animate__animated animate__heartBeat animate__repeat-2"}
            src={OurRatesTriangleDark}
            itemProp='image'
            alt={"Alvrio our rates triangle"}
          />
          <ImageContainer
            classes={"w-12 absolute our-rates-zig-zag  hidden sm:block animate__animated animate__shakeX animate__repeat-2"}
            src={OurRatesZigzag}
            itemProp='image'
            alt={"Alvrio our rates zig zag"}
          />
        </div>
        <div className="col-span-7 text-rates">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto ">
            <div>
              <Heading title="Our " />
              <Heading title="Availability" />
              <div className="mt-16">
                <Button />
              </div>
            </div>
            <div>
              <ImageContainer
                itemProp='image'
                classes={"hidden md:block lg:relative lg:left-14 w-14"}
                src={Left}
                alt={"client-image"}
              />
            </div>
            <div className="mb-3">
              <ul className="list-disc lg:relative lg:right-24 md:relative md:right-32 ">
                <li>
                  <Content content="Team leader" classes={"list-disc"} />
                </li>
                <li>
                  <Content
                    content="Frontend Engineer"
                    classes={"list-disc mt-4"}
                  />
                </li>
                <li>
                  <Content
                    content="Backend Engineer"
                    classes={"list-disc mt-4"}
                  />
                </li>
                <li>
                  <Content
                    content="DevOps Engineer"
                    classes={"list-disc mt-4"}
                  />
                </li>
                <li>
                  <Content
                    content="Quality Assurance"
                    classes={"list-disc mt-4"}
                  />
                </li>
                <li>
                  <Content
                    content="UI/UX Designer"
                    classes={"list-disc mt-4"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRates;