import Image from 'next/image'
import React from 'react'
import ImageContainer from '../ImageContainer'
import OurRatesTriangle from "../../../assets/images/Banner/banner.webp";
import Button from '../Button';
import ServiceRequestButton from './ServiceRequestUs';

const Banner = () => {
  return (
    <div>
      <section class="relative py-24 px-4">
        <div class="z-20 relative text-white container text-center mx-auto">
          <h1 class="mb-5 text-5xl sm:items-center">Kickstart Your Dream Project With Us</h1>
          <p class="leading-normal mb-5 text-lg list-disc mt-4">We have worked with some of the best innovative ideas and brands in the
            world across industries.
          </p>
          <ServiceRequestButton classes={
              "sm:block text-center"
            } />
        </div>
        <div class="absolute inset-0 h-auto z-1">
          <Image src={OurRatesTriangle} width={1000} height={1000} alt="" class="h-full w-full object-fit-cover" />
        </div>
      </section>
    </div>
  )
}

export default Banner