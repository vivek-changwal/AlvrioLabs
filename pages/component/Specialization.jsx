import React from "react";
import Heading from "./Heading";
import Banking from '../../assets/images/domain/banking.svg';
import Ecommerce from '../../assets/images/domain/ecommerce.svg';
import Education from '../../assets/images/domain/education.png';
import EnergySystem from '../../assets/images/domain/energy-system.png';
import Exchange from '../../assets/images/domain/exchange.png';
import Finance from '../../assets/images/domain/finance.png';
import Health from '../../assets/images/domain/health.png';
import Hospitality from '../../assets/images/domain/hospitality.png';
import Estate from '../../assets/images/domain/house.png';
import manufacturing from '../../assets/images/domain/manufacturing.png';
import logistics from '../../assets/images/domain/logistics.png';
import Verification from '../../assets/images/domain/verification.png';
import Image from "next/image";

const specialization = [{
  id: 1,
  image: Finance,
  heading: "Finance",
},
{
  id: 2,
  image: Hospitality,
  heading: "Hospitality",
}, {
  id: 3,
  image: EnergySystem,
  heading: "Energy System",
}, {
  id: 4,
  image: Education,
  heading: "Education",
}, {
  id: 5,
  image: Banking,
  heading: "Banking",
}, {
  id: 6,
  image: Verification,
  heading: "KYC Verification ",
}, {
  id: 7,
  image: Health,
  heading: "Health",
}, {
  id: 8,
  image: Exchange,
  heading: "Currency Exchange",
}, {
  id: 9,
  image: Ecommerce,
  heading: "E-Commerce",
},
{
  id: 10,
  image: Estate,
  heading: "Real Estate"
},
{
  id: 11,
  image: logistics,
  heading: "logistics"
},
{
  id: 12,
  image: manufacturing,
  heading: "manufacturing"
}
]
const Specialization = () => {
  return (
    <section id="work">
      <div className="border-b-2 border-gray-color">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="col-span-4">
            <Heading title="Domain" />
            <Heading title="we work" />
          </div>
          <div className="col-span-8 ml-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1  lg:grid-cols-3 gap-8  mx-auto " >
              {
                specialization.map((value) => (
                  <div className="">
                    <Image
                      src={value.image}
                      alt={value.heading}
                      width={70}
                      height={70}
                    />
                    <p className="text-lg mt-2 font-semibold text-secondary-color"> {value.heading} </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;