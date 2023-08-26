import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import ImageContainer from "./ImageContainer";
import Wwdleftzigzag from "../../assets/images/WhatWeDo/5bc6654f5881ab7d5055.svg";
import Computer from "../../assets/images/WhatWeDo/5ed049a544f6b1554391.svg";
import Wwdthreeline from "../../assets/images/WhatWeDo/6f3c01aca0886720dfc5.svg";
import Wwwdnumber from "../../assets/images/WhatWeDo/7e35f3ecf4b598148ade.svg";
import Girllaptop from "../../assets/images/WhatWeDo/8f3e7b2fe7c97ca6abf5.svg";
import Wwdpyramid from "../../assets/images/WhatWeDo/42cd703af76ae5a260b8.svg";
import Wwdsquare from "../../assets/images/WhatWeDo/99f1a2af061af04cc75e.svg";
import Cloud from "../../assets/images/WhatWeDo/5667784a014233a43638.svg";
import Add3 from "../../assets/images/WhatWeDo/b1154e1b507b468c04f4.svg";
import WwdRightzigzag from "../../assets/images/WhatWeDo/dcde5f35437fcfa7f4b5.svg";
import Tablet from "../../assets/images/WhatWeDo/f11ed044cf05b5b4b19e.svg";
import File from "../../assets/images/WhatWeDo/f1035b4fa87a60f5366c.svg";
import Wwdcross from "../../assets/images/WhatWeDo/svg_cross.svg";
import Search from "../../assets/images/WhatWeDo/f86cf41852dfdbb9d768.svg";
const Title = (props) => {
  return <h3 className="text-lg font-semibold mb-3.5">{props.title}</h3>;
};

const Content = (props) => {
  return <p className="text-lg">{props.content}</p>;
};
const WhatWeDo = () => {
  return (
    <section id="whatWeDo">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="col-span-6 relative images-what">
          <ImageContainer
            classes={"w-32 absolute girl-laptop "}
            src={Girllaptop}
            itemProp='image'
            alt={"Alvrio what we do girl-laptop"}
          />
          <ImageContainer
            classes={"w-12 absolute wwd-three-line animate__animated animate__shakeY animate__repeat-2 "}
            src={Wwdthreeline}
            itemProp='image'
            alt={"Alvrio what we do line"}
          />
          <ImageContainer classes={"w-24 absolute file "} src={File} />
          <ImageContainer
            classes={"w-12 absolute wwd-left-zig-zag hidden md:block animate__animated animate__shakeX animate__repeat-2"}
            src={Wwdleftzigzag}
            itemProp='image'
            alt={"Alvrio what we do zig zag"}
          />
          <ImageContainer
            classes={"w-60 absolute computer hidden md:block "}
            src={Computer}
            itemProp='image'
            alt={"Alvrio what we do computer"}
          />
          <ImageContainer
            classes={"w-12 absolute wwd-right-zig-zag  animate__animated animate__shakeX animate__repeat-2 "}
            src={WwdRightzigzag}
            itemProp='image'
            alt={"Alvrio what we do zig zag"}
          />
          <ImageContainer
            classes={"absolute w-16 wwd-cloud  hidden md:block animate__animated animate__slideInDown animate__repeat-2"}
            src={Cloud}
            itemProp='image'
            alt={"Alvrio what we do cloud"}
          />
          <ImageContainer
            classes={"absolute w-60 tablet hidden md:block"}
            src={Tablet}
            itemProp='image'
            alt={"Alvrio what we do tablet"}
          />
          <ImageContainer
            classes={"w-16 absolute wwd-square animate__animated animate__heartBeat animate__repeat-2"}
            src={Wwdsquare}
            itemProp='image'
            alt={"Alvrio what we do square"}
          />
          <ImageContainer
            classes={" w-36 absolute wwd-number hidden lg:block "}
            src={Wwwdnumber}
            itemProp='image'
            alt={"Alvrio what we do number"}
          />
          <ImageContainer
            classes={"w-8 absolute wwd-pyramid animate__animated animate__heartBeat animate__repeat-2 hidden sm:block"}
            src={Wwdpyramid}
            itemProp='image'
            alt={"Alvrio what we do pyramid"}
          />
          <ImageContainer
            classes={"w-10 absolute wwd-cross animate__animated animate__shakeX animate__repeat-2 hidden sm:block"}
            src={Wwdcross}
            itemProp='image'
            alt={"Alvrio what we do cross"}
          />
          <ImageContainer
            classes={"w-6 absolute wwd-add-3 hidden md:block animate__animated animate__rotateIn animate__repeat-2"}
            src={Add3}
            itemProp='image'
            alt={"Alvrio what we do add"}
          />
          <ImageContainer
            classes={
              "w-56 absolute wwd-search animate__animated animate__shakeY animate__repeat-2  hidden md:block"
            }
            itemProp='image'
            src={Search}
            alt={"Alvrio what we do search"}
          />
        </div>
        <div className="col-span-6 text-what">
          <Heading title="What we do" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto ">
            <div>
              <ImageContainer
                itemProp='image'
                src="/speedometer.png"
                alt={"Alvrio speedometer"}
                classes={"py-4 w-6"} />
              <Title title="HIGH-PERFORMANCE BACKEND" />
              <Content content="Our backends serve thousands of RPS" />
            </div>
            <div>
              <ImageContainer
                itemProp='image'
                alt={"Alvrio phone"}
                src="/smartphone.png" classes={"py-4 w-6"} />
              <Title title="MODERN FRONTEND" />
              <Content content="Native mobile application and web sites" />
            </div>
            <div>
              <ImageContainer
                itemProp='image'
                src="/gears.png"
                alt={"Alvrio gear"}
                classes={"py-4 w-6"} />
              <Title title="SYSTEM ARCHITECTURE, DEVOPS, QA..." />
              <Content content="...and all other necessary stuff you don't have to take care about" />
            </div>
            <div>
              <Button
                classes={
                  "lg:relative lg:top-32 md:relative md:top-28 hidden sm:block"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
