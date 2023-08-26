import React from 'react'
import Heading from "./Heading";
import ImageContainer from "./ImageContainer";
import Add from "../../assets/images/Faq/2a4543e0da52f9f2ad60.svg";
import RightZigzag from "../../assets/images/Faq/5bc6654f5881ab7d5055.svg";
import Pyramid from "../../assets/images/Faq/8fef084ff56c4d60c7a2.svg";
import Line from "../../assets/images/Faq/09f76826cb1cd59e40ad.svg";
import Smallball from "../../assets/images/Faq/94f28bc2d6ef21e0a280 (1).svg";
import Bigball from "../../assets/images/Faq/94f28bc2d6ef21e0a280.svg";
import Cross from "../../assets/images/Faq/97bf44fd0861e0a68873.svg";
import Rectangle from "../../assets/images/Faq/782a0b57f19777681c82.svg";
import Sequence from "../../assets/images/Faq/869d93386923599b3053.svg";
import Well from "../../assets/images/Faq/a6d634b050a94f75809c.svg";
import Bulb from "../../assets/images/Faq/ace95bac962b1d4ff393.svg";
import Pie from "../../assets/images/Faq/c44ca56e328b1a7d5e57.svg";
import Calender from "../../assets/images/Faq/d2595e96eadac8a5b45d.svg";
import LeftZigzag from "../../assets/images/Faq/dcde5f35437fcfa7f4b5.svg";
import Face from "../../assets/images/Faq/face.jpeg";
import Drum from "../../assets/images/Faq/e7131f8e615050694b44.svg";
import Girl from "../../assets/images/Faq/girl.svg";
const Faq = () => {
  return (
    <div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="col-span-6 relative images-team">
          <ImageContainer
            classes={"w-10 absolute our-left-zigzag animate__animated animate__shakeX animate__repeat-2"}
            src={LeftZigzag}
            itemProp='image'
            alt={"Alvrio our team zigzag"}
          />
          <ImageContainer
            classes={"w-10 absolute rectange animate__animated animate__shakeY animate__repeat-2"}
            src={Rectangle}
            itemProp='image'
            alt={"Alvrio our team rectangle"}
          />
          <ImageContainer
            classes={"w-8/12 absolute sequence"}
            src={Sequence}
            itemProp='image'
            alt={"Alvrio our team sequence"}
          />
          <ImageContainer
            classes={"w-6 absolute add animate__animated animate__rotateIn animate__repeat-2"}
            src={Add}
            itemProp='image'
            alt={"Alvrio our team add"}
          />
          <ImageContainer
            classes={"w-14 absolute well"}
            src={Well}
            itemProp='image'
            alt={"Alvrio our team well"}
          />
          <ImageContainer
            classes={
              "w-16 absolute girl animate__animated animate__shakeY animate__repeat-2"
            }
            itemProp='image'
            src={Girl}
            alt={"Alvrio our team girl"}
          />
          <ImageContainer
            classes={
              "w-24 absolute drum animate__animated animate__shakeY animate__repeat-2"
            }
            itemProp='image'
            src={Drum}
            alt={"Alvrio our team drum"}
          />
          <ImageContainer
            classes={"w-28 absolute pie"}
            src={Pie}
            itemProp='image'
            alt={"Alvrio our team pie"}
          />
          <ImageContainer
            classes={"w-14 absolute team-cross animate__animated animate__shakeX animate__repeat-2"}
            src={Cross}
            itemProp='image'
            alt={"Alvrio our team cross"}
          />
          <ImageContainer
            classes={"absolute pyramid w-14 animate__animated animate__heartBeat animate__repeat-2"}
            src={Pyramid}
            itemProp='image'
            alt={"Alvrio our team pyramid"}
          />
          <ImageContainer
            classes={"absolute three-line w-14 animate__animated animate__shakeY animate__repeat-2"}
            src={Line}
            itemProp='image'
            alt={"Alvrio our team line"}
          />
          <ImageContainer
            classes={"absolute bulb w-36 hidden sm:block"}
            src={Bulb}
            itemProp='image'
            alt={"Alvrio our team bulb"}
          />
          <ImageContainer
            classes={"absolute calender w-32 hidden md:block"}
            src={Calender}
            itemProp='image'
            alt={"Alvrio our team calendar"}
          />
          <ImageContainer
            classes={"w-10 relative rights-zig-zag hidden md:block animate__animated animate__shakeX animate__repeat-2"}
            src={RightZigzag}
            itemProp='image'
            alt={"Alvrio our team zig zag"}
          />
          <ImageContainer
            classes={"absolute small-ball w-8 teamcross animate__animated animate__shakeY animate__repeat-2"}
            src={Smallball}
            itemProp='image'
            alt={"Alvrio our team "}
          />
          <ImageContainer
            classes={"w-6 absolute add2 animate__animated animate__rotateIn animate__repeat-2"}
            src={Add}
            itemProp='image'
            alt={"Alvrio our team "}
          />
        </div>
        <div className="col-span-6 text-team">
          <Heading title="FAQ" />
          <hr className="mb-4 mt-4" />
          <h4 className="mb-4 mt-4 font-semibold  ">
            WHO WILL DO ALL THE WORK ?{" "}
          </h4>
          <hr className="mb-4 mt-4" />
          <h4 className="mb-4 mt-4 font-semibold ">
            HOW DO YOU CONTROL THEM ?
          </h4>
          <hr className="mb-4 mt-4" />
          <h4 className="mb-4 mt-4 font-semibold ">
            HOW MANY PEOPLE WILL WORK ON MY PROJECT ?
          </h4>
          <hr className="mb-4 mt-4" />
          <h4 className="mb-4 mt-4 font-semibold ">
            I WANT TO PAY BY SUBSCRIPTION ?
          </h4>
          <hr className="mb-4 mt-4" />
        </div>
      </div>
    </div>
  )
}

export default Faq