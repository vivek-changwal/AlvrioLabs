import React from "react";
import Heading from "./Heading";
import ImageContainer from "./ImageContainer";
import MultiDev from "../../assets/images/TeamSection/100-plus.svg";
import PradeepImg from "../../assets/images/TeamSection/pradeep.webp";
import PankajImg from "../../assets/images/TeamSection/pankaj.webp";
const Title = (props) => {
  return <h3 className="text-lg font-semibold mb-3.5">{props.title}</h3>;
};
const OurTeam = () => {
  return (
    <div id="team" className="border-b-2 border-gray-color">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8 mx-auto lg:py-16">
        <div className="items-center	">
          <Heading title="Our Team" />
        </div>
        <div>
          <ImageContainer
            itemProp='image'
            classes={"h-24 w-24 text-white bg-primary-color rounded-full mb-4"}
            src={PradeepImg}
            alt={"Pradeep Image"}
          />
          <Title title="Pradeep" />
          <h4 className="mb-2"> Founder </h4>
          <h4 className="mb-2"> 10+ years in IT </h4>
          <h4> Enterpreneur and CEO </h4>
        </div>
        <div>
          <ImageContainer
            itemProp='image'
            classes={"h-24 w-24 text-white bg-primary-color rounded-full mb-4"}
            src={PankajImg}
            alt={"Pankaj Image"}
          />
          <Title title="Pankaj" />
          <h4 className="mb-2"> BizDev </h4>
          <h4 className="mb-2"> 8+ years in IT </h4>
          <h4> Business Development </h4>
        </div>
        <div>
          <ImageContainer
            itemProp='image'
            classes={"h-24 w-24 text-white rounded-full mb-4"}
            src={MultiDev}
            alt={"MultiDev Image"}
          />
          <Title title="AND MORE THAN 50 DEVELOPERS" />
          <h4> located all over the world </h4>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
