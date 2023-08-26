import Head from 'next/head'
import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import ImageContainer from '../component/ImageContainer'
import Image from 'next/image'
import API from '../../assets/images/services/api/API.gif'

import meteor from '../../assets/images/services/dataScience/meteor.svg'
import ember from '../../assets/images/services/dataScience/ember.svg'
import nextjs from '../../assets/images/services/dataScience/nextlogo.svg'

import angular from '../../assets/images/services/angular.svg'
import java from '../../assets/images/services/java_lang.svg'
import node from '../../assets/images/services/node_js.svg'
import ruby from '../../assets/images/services/ruby.svg'
import go from '../../assets/images/services/go.svg'
import php from '../../assets/images/services/php.svg'
import python from '../../assets/images/services/python_1.svg'
import reactlogo from '../../assets/images/services/react-logo-icon.svg'
import vuejs from '../../assets/images/services/vuejs-logo.svg'
import Banner from '../component/Services/Banner'
import Header from '../component/Services/Header'
import customApplicationDevelopment from '../../assets/images/services/product/customapplicationdevelopment.svg'
import Portaldevelopment from '../../assets/images/services/product/Portaldevelopment.svg'
import Websitedevelopment from '../../assets/images/services/product/web-application-support-and-maintenance.svg'
import OpenSource from '../../assets/images/services/product/open-source-web-development-and-revamp.svg'
import Development from '../../assets/images/services/product/website-development-and-maintenance.svg'
import testing from '../../assets/images/services/mobile/test-icon.svg'
import ServiceWork from '../component/Services/ServiceWork'
const techStack = [
  {
    name: 'Frontend',
    heading: 'Frontend development is a crucial aspect of developing user-friendly applications. At Appinventiv, we choose curated front-end programming languages for ensuring the best performance.',
    title: "framework",

    image: [
      {
        id: 1,
        image: vuejs
      },
      {
        id: 2,
        image: angular
      }, {
        id: 3,
        image: reactlogo
      },
      {
        id: 4,
        image: nextjs
      },
      {
        id: 5,
        image: ember
      },
      {
        id: 6,
        image: meteor
      },
    ]
  },
  {
    name: 'Backend',
    heading: 'The behind-the-scenes part of a software application that handles data storage, processing, and business logic, enabling functionality and communication with the frontend components and external systems.',
    title: "language",
    image: [
      {
        id: 1,
        image: ruby
      },
      {
        id: 2,
        image: node
      },
      {
        id: 3,
        image: python
      }, {
        id: 4,
        image: java
      },
      {
        id: 5,
        image: php
      },
      {
        id: 6,
        image: go
      }
    ]
  },
];
const services = [
  {
    "id": "1",
    "content": "Whether you need to build a custom web app from scratch, migrate your legacy backend, or streamline existing front-end functionality, as a dedicated web apps development company, we can accomplish that in an efficient and cost-effective manner. We offer business intelligence solutions, application migration to cloud, collaboration and portal development, document management solutions, secure intranets, extranets, and portal setup, and offer maintenance, support, and up-gradation.",
    "svg": customApplicationDevelopment,
    "title": "Custom application development"
  },
  {
    "id": "2",
    "content": "As one of the most sought-after web apps development companies, we also create web portals as well as enterprise portals, capable of adhering to your custom business requirements. Our web portals offer the best of performance, cost-efficiency and growth potential. Our enterprise-level deployments use productive intranets, extranets and engagement workplaces. We combine our portals with expansive collaborative capabilities, access to aggregated information, self-service workflows and enterprise social functionality.",
    "svg": Portaldevelopment,
    "title": "Portal development"
  },
  {
    "id": "3",
    "title": "Software Testing",
    "svg": testing,
    "content": "Our  mobile development process is structured to keep security and performance at the center. We make sure your application is glitch free and hack proof by applying a mix of manual and AI-driven automated mode of testing.    "
  },
  {
    "id": "4",
    "content": "We create websites with easy navigation, robust information architecture, visual cues for users, and action-oriented design. Our services include domain name registration, Content development and management system, navigation design, programming, User interface designing and much more. As a dedicated website application development company, our websites work wonderfully, regardless of the screen size or resolution.",
    "svg": Websitedevelopment,
    "title": "Website development and maintenance"
  },
  {
    "id": "6",
    "content": "Open source development is a concept that allows you to develop or revamp your website with the same source code. The only difference being the source codes are visible on the web page of the website. With our open source website revamp and development, you can alter the source code for your website from its native design to reach unattainable roll-out times and limited budgets.",
    "svg": OpenSource,
    "title": "Open source web development and revamp"
  },
  {
    "id": "7",
    "content": "We partner up with you in maintaining web applications either developed by us or by third-party vendors. Whether it’s fixing bugs or adding new functionality, our experienced engineers can handle it all with aplomb. We also document and provide support for all your future needs. ",
    "svg": Development,
    "title": "Web application support and maintenance"
  },
]
const ApiDevelopment = () => {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);
  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div>
      <Head>
        <title>Api Development</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Api Development'} />
      <ServiceHeader title={'Api Development'} />
      < Header title={""} heading={"Expert API Development Services"} contents={"At Alvrio Labs, we specialize in API development services that enable seamless integration and enhanced functionality for software systems. Our expert team works closely with clients to design, develop, and deploy robust APIs that cater to their specific business needs. We follow industry best practices and standards to ensure scalability, security, and performance optimization. Our services encompass the entire API development lifecycle, including strategy and consulting, design, development, testing, documentation, and support. With our API development expertise, clients can unlock the potential of their software products, achieve interoperability, accelerate time-to-market, and provide a superior user experience. Partner with Alvrio Labs for cutting-edge API development solutions that drive business growth and innovation."} Image={API} />
      <div className="bg-white border-b-2 border-gray-color">
        <div className='px-4 py-8 mx-auto'>
          <h1 className="text-center text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center mb-16 mt-8">Our Services</h1>
          <div className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto container ">
            <div className="container ">
              {
                services.map((value) => (
                  <div class="grid mb-6 grid-flow-col grid-rows-1 gap-4">
                    <div class="... row-span-3 mx-4">
                      <Image src={value.svg} height={50} width={50} />
                    </div>
                    <div class="... col-span-2">
                      <h2 className='text-xl font-semibold mb-3.5'>{value.title}</h2>
                      <p className='text-lg'>{value.content}
                      </p></div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div><div className='bg-white border-b-2 border-gray-color'>
        <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className='text-center mb-6'>
            <h1 className="text-center text-5xl justify-center mx-10 tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center mb-4 mt-8">Tech Stack We Use
            </h1>
            <p className='text-lg p-4'>Here is the tech stack used by our team while offering web app development services:
            </p>
          </div>
          <div className="flex">
            <div className="w-1/4 bg-white">
              {techStack.map((tech) => (
                <h1
                  key={tech.name}
                  className={`p-4 text-xl cursor-pointer ${selectedTech === tech ? ' text-primary-color' : ''
                    }`}
                  onClick={() => handleTechClick(tech)}
                >
                  {tech.name}
                  <br />
                  <br />
                  <hr />
                </h1>

              ))}
            </div>
            <div className="w-3/4 px-4">
              <div>
                <div className='mt-6'>
                  <p className='text-lg'>{selectedTech.heading}</p>
                  <h2 className="text-lg font-bold mt-4">{selectedTech.title}</h2>
                  <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10 mx-auto '>
                    {selectedTech.image.map((value) => (
                      <ImageContainer src={value.image} classes={"w-20 h-20"} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <FaqComponent page={3} />
      <Footer />
    </div >
  )
}

export default ApiDevelopment