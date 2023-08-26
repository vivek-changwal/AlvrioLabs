import React from 'react'
import Heading from './Heading'
import ImageContainer from './ImageContainer'
import MIOImg from "../../assets/images/ClientsSection/mio.svg"
import SuperImg from "../../assets/images/ClientsSection/super.jpeg"
import INQImg from "../../assets/images/ClientsSection/INQ.png"
import RiteServeImg from "../../assets/images/ClientsSection/riteserve.png"
import EBImg from "../../assets/images/ClientsSection/engineer-babu.png"
import VelmenniImg from "../../assets/images/ClientsSection/velmenni.png"
import FlowlyfImg from "../../assets/images/ClientsSection/flowlyf.png"
import VinayakImg from "../../assets/images/ClientsSection/vinayak.webp"
import LakshyaImg from "../../assets/images/ClientsSection/lakshya-academy.svg"
import TejoraImg from "../../assets/images/ClientsSection/tejora.png"
import PharmacyImg from "../../assets/images/ClientsSection/gurukul-pharmacy.svg"
import BorewellImg from "../../assets/images/ClientsSection/borewell.svg"
import ClientRocket from "../../assets/images/FavoriteClients/Client-Rocket.svg"
import ClientArrow from "../../assets/images/FavoriteClients/Client-Arrow.svg"
import ClientZigzag from "../../assets/images/FavoriteClients/Client-zigzag.svg"
import ClientZigzagTop from "../../assets/images/FavoriteClients/Client-Zigzag-Top.svg"
import Clienttriangle from "../../assets/images/FavoriteClients/Client-triangle.svg"
import ClientsemiCircle from "../../assets/images/FavoriteClients/Client-semiCircle.svg"
import ClientrightPipe from "../../assets/images/FavoriteClients/Client-rightPipe.svg"
import ClientPlus from "../../assets/images/FavoriteClients/Client-Plus.svg"
import ClientLogin from "../../assets/images/FavoriteClients/Client-Login.svg"
import ClientleftPipe from "../../assets/images/FavoriteClients/Client-leftPipe.svg"
import ClientLaptop from "../../assets/images/FavoriteClients/Client-Laptop.svg"
import ClientKing from "../../assets/images/FavoriteClients/Client-King.svg"
import ClientGlasses from "../../assets/images/FavoriteClients/Client-Glasses.svg"
import Clientcone from "../../assets/images/FavoriteClients/Client-cone.svg"
import ClientCircle from "../../assets/images/FavoriteClients/Client-Circle.svg"
import ClientSemitriangle from "../../assets/images/FavoriteClients/Client-Semitriangle.svg"
import ClientBase from "../../assets/images/FavoriteClients/Client-Base.svg"

const Clients = () => {
  return (
    <>
      <div className="border-b-2 border-gray-color" id='client'>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="col-span-6 relative images-client">
            <ImageContainer
              classes={"w-52 client-laptop absolute"}
              itemProp='image'
              src={ClientLaptop}
              alt={"Alvrio client laptop"}
            />
            <ImageContainer
              classes={"w-9 absolute client-triangle hidden md:block animate__animated animate__heartBeat animate__repeat-2 "}
              itemProp='image'
              src={Clienttriangle}
              alt={"Alvrio client triangle "}
            />
            <ImageContainer
              classes={"w-11 client-left-pipe absolute"}
              itemProp='image'
              src={ClientleftPipe}
              alt={"Alvrio client left pipe"}
            />
            <ImageContainer
              classes={"w-6 absolute client-plus animate__animated animate__rotateIn animate__repeat-2"}
              itemProp='image'
              src={ClientPlus}
              alt={"Alvrio client plus"}
            />
            <ImageContainer
              classes={"w-72 client-login absolute hidden sm:block"}
              itemProp='image'
              src={ClientLogin}
              alt={"Alvrio client login"}
            />
            <ImageContainer
              classes={"w-32 client-glasses absolute hidden lg:block animate__animated animate__shakeX animate__repeat-2"}
              itemProp='image'
              src={ClientGlasses}
              alt={"Alvrio client glasses"}
            />
            <ImageContainer
              classes={"w-6 absolute client-plus-1 hidden sm:block animate__animated animate__rotateIn animate__repeat-2"}
              itemProp='image'
              src={ClientPlus}
              alt={"Alvrio client plus"}
            />
            <ImageContainer
              classes={"w-12 absolute client-cone hidden sm:block animate__animated animate__heartBeat animate__repeat-2 "}
              itemProp='image'
              src={Clientcone}
              alt={"Alvrio client cone"}
            />
            <ImageContainer
              classes={"w-14 absolute client-arrow"}
              itemProp='image'
              src={ClientArrow}
              alt={"Alvrio client arrow"}
            />
            <ImageContainer
              classes={"w-12 absolute client-right-pipe hidden sm:block "}
              itemProp='image'
              src={ClientrightPipe}
              alt={"Alvrio client right pipe "}
            />
            <ImageContainer
              classes={"w-40 absolute client-circle"}
              itemProp='image'
              src={ClientCircle}
              alt={"Alvrio client circle"}
            />
            <ImageContainer
              classes={"w-6 absolute client-semi-circle animate__animated animate__shakeX animate__repeat-2"}
              itemProp='image'
              src={ClientsemiCircle}
              alt={"Alvrio client semi circle"}
            />
            <ImageContainer
              classes={"w-12 absolute client-zig-zag"}
              itemProp='image'
              src={ClientZigzag}
              alt={"Alvrio client zig zag"}
            />
            <ImageContainer
              classes={"w-6 absolute client-semi-triangle animate__animated animate__heartBeat animate__repeat-2  "}
              itemProp='image'
              src={ClientSemitriangle}
              alt={"Alvrio client semi triangle"}
            />
            <ImageContainer
              classes={
                "w-20 absolute client-rocket animate__animated animate__shakeY animate__repeat-2 hidden sm:block"
              }
              itemProp='image'
              src={ClientRocket}
              alt={"Alvrio client rocket"}
            />
            <ImageContainer
              classes={"w-40 absolute client-base hidden sm:block"}
              itemProp='image'
              src={ClientBase}
              alt={"Alvrio client base"}
            />
            <ImageContainer
              classes={"w-36 absolute client-king"}
              itemProp='image'
              src={ClientKing}
              alt={"Alvrio client king"}
            />
            <ImageContainer
              classes={"w-12 absolute client-zig-zag-top"}
              itemProp='image'
              src={ClientZigzagTop}
              alt={"Alvrio client zig zag"}
            />
          </div>
          <div className="col-span-6 text-client">
            <Heading title="Favorite clients" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 mx-auto">
              <div className="h-28 p-4 border-2  border-gray-200 rounded-lg flex justify-center items-center">
                <ImageContainer classes={"w-24 object-cover"}
                  itemProp='image'
                  src={INQImg} alt={"INQ"} />
              </div>
              <div className="h-28 p-4 border-2  border-gray-200 rounded-lg flex justify-center items-center">
                <ImageContainer classes={"w-24 object-cover"}
                  itemProp='image'
                  src={MIOImg} alt={"MIO"} />
              </div>
              <div className="h-28 p-4 border-2  border-gray-200 rounded-lg flex justify-center items-center">
                <ImageContainer
                  classes={"w-24 object-cover"}
                  itemProp='image'
                  src={TejoraImg}
                  alt={"RiteServe"}
                />
              </div>
              <div className="h-28 p-4 border-2  border-gray-200 rounded-lg flex justify-center items-center">
                <ImageContainer classes={"w-24 object-cover"}
                  itemProp='image'
                  src={VelmenniImg} alt={"Enigineer Babu"} />
              </div>
              <div className="h-28 p-4 border-2  border-gray-200 rounded-lg flex justify-center items-center">
                <ImageContainer classes={"w-24 object-cover"}
                  itemProp='image'
                  src={RiteServeImg} alt={"Tejora"} />
              </div>
              <div className="h-28 p-4 border-2  border-gray-200 rounded-lg flex justify-center items-center">
                <ImageContainer classes={"w-24 object-cover"}
                  itemProp='image'
                  src={EBImg} alt={"Flowlyf"} />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 mx-auto">
              <div className="border-2 p-1 border-gray-200  rounded-lg flex items-center justify-center">
                <ImageContainer
                  classes={"w-24 object-cover"}
                  itemProp='image'
                  src={SuperImg}
                  alt={"Super"}
                />
              </div>
              <div className="border-2 p-1 border-gray-200 rounded-lg flex items-center justify-center">
                <ImageContainer
                  classes={"w-24 object-cover"}
                  itemProp='image'
                  src={FlowlyfImg}
                  alt={"Flowlyf"}
                />
              </div>
              <div className="border-2 p-1 border-gray-200 rounded-lg flex items-center justify-center">
                <ImageContainer
                  classes={"w-24 object-cover"}
                  itemProp='image'
                  src={VinayakImg}
                  alt={"Vinayak steel and furniture"}
                />
              </div>
              <div className="border-2 p-1 border-gray-200 rounded-lg flex items-center justify-center">
                <ImageContainer
                  classes={"w-24 object-cover"}
                  itemProp='image'
                  src={LakshyaImg}
                  alt={"Lakshya academy"}
                />
              </div>
              <div className="border-2 p-1 border-gray-200 rounded-lg flex items-center justify-center">
                <ImageContainer
                  itemProp='image'
                  classes={"w-24 object-cover"}
                  src={PharmacyImg}
                  alt={"Gurukul pharmacy"}
                />
              </div>
              <div className="border-2  border-gray-200 rounded-lg flex items-center justify-center">
                <ImageContainer
                  itemProp='image'
                  classes={"w-24 object-cover rounded-lg "}
                  src={BorewellImg}
                  alt={"MahaLaxmi"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;