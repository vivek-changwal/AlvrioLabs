import Head from 'next/head'
import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import ImageContainer from '../component/ImageContainer'
import Image from 'next/image'
import Product from '../../assets/images/services/product/Product-iteration.gif'
import angular from '../../assets/images/services/angular.svg'
import java from '../../assets/images/services/java_lang.svg'
import ruby from '../../assets/images/services/ruby.svg'
import node from '../../assets/images/services/node_js.svg'
import go from '../../assets/images/services/go.svg'
import php from '../../assets/images/services/php.svg'
import html from '../../assets/images/services/html-logo.svg'
import css from '../../assets/images/services/css-logo.svg'
import js from '../../assets/images/services/javascript-lg.svg'
import python from '../../assets/images/services/python_1.svg'
import reactlogo from '../../assets/images/services/react-logo-icon.svg'
import vuejs from '../../assets/images/services/vuejs-logo.svg'
import Banner from '../component/Services/Banner'
import aws from '../../assets/images/services/devops/aws.svg'
import azure from '../../assets/images/services/devops/azure.svg'
import google from '../../assets/images/services/devops/google.svg'
import kotlin from '../../assets/images/services/mobile/kotlin-1.svg'
import fluter from '../../assets/images/services/mobile/flutter.svg'
import reactnative from '../../assets/images/services/mobile/react-native-1.svg'

import customApplicationDevelopment from '../../assets/images/services/product/customapplicationdevelopment.svg'
import Portaldevelopment from '../../assets/images/services/product/Portaldevelopment.svg'
import ECommerce from '../../assets/images/services/product/e-commerce-development.svg'
import Websitedevelopment from '../../assets/images/services/product/web-application-support-and-maintenance.svg'
import OpenSource from '../../assets/images/services/product/open-source-web-development-and-revamp.svg'
import Saas from '../../assets/images/services/product/saas-products.svg'
import Development from '../../assets/images/services/product/website-development-and-maintenance.svg'
import WorkSection from '../component/Work'
import Header from '../component/Services/Header'
import ServiceWork from '../component/Services/ServiceWork'


import mysql from '../../assets/images/services/dataScience/mysql.svg'
import postgres from '../../assets/images/services/dataScience/postgre_sql.svg'
import oracle from '../../assets/images/services/dataScience/oracle.svg'
import nifi from '../../assets/images/services/dataScience/nifi-logo.svg'
import mssql from '../../assets/images/services/dataScience/mssql.svg'
import cassandra from '../../assets/images/services/dataScience/cassandra.svg'
import hbase from '../../assets/images/services/dataScience/hbase-logo.svg'
import hive from '../../assets/images/services/dataScience/hive-logo.svg'
import mongodb from '../../assets/images/services/dataScience/mongodb-logo.svg'
import meteor from '../../assets/images/services/dataScience/meteor.svg'
import ember from '../../assets/images/services/dataScience/ember.svg'
import nextjs from '../../assets/images/services/dataScience/nextlogo.svg'

const techStack = [
  {
    name: 'Frontend Programming Languages',
    heading: 'Frontend development is a crucial aspect of developing user-friendly applications. At Alvrio, we choose curated front-end programming languages for ensuring the best performance.',
    title1: "Language",
    title2: "Framework",
    image: [
      {
        id: 1,
        image: html
      },
      {
        id: 2,
        image: css
      },
      {
        id: 3,
        image: js
      },
    ],
    framework: [

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
    name: 'Backend Programming Languages',
    heading: '.',
    title1: "Language",
    title2: "",
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
    ],
    framework: [
    ]
  },

  {
    name: 'Database Systems',
    heading: 'Our expert team crafts captivating and feature-rich mobile applications using technologies like React Native, Flutter, and native platforms, delivering delightful user experiences across iOS and Android devices.',
    title1: "SQL",
    title2: "NoSQL",
    image: [
      {
        id: 1,
        image: postgres
      },
      {
        id: 2,
        image: mysql
      }, {
        id: 3,
        image: oracle
      }, {
        id: 4,
        image: mssql
      }
    ],
    framework: [
      {
        id: 1,
        image: cassandra
      },
      {
        id: 2,
        image: hbase
      },
      {
        id: 3,
        image: hive
      },
      {
        id: 4,
        image: mongodb
      },
      {
        id: 5,
        image: nifi
      },
    ]
  },
  {
    name: 'Devops ',
    heading: 'We employ industry-leading DevOps practices, tools, and technologies like Jenkins, Docker, etc as Code to streamline software delivery, automate processes, and ensure scalable and reliable infrastructure management.',
    title1: "Language",
    title2: "",
    image: [
      {
        id: 1,
        image: aws
      },
      {
        id: 2,
        image: azure
      }, {
        id: 3,
        image: google
      },
    ],
    framework: [
    ]
  },
];
const industry = [
  {
    id: 1,
    "title": "Health",
    "content": "As a web app development company, we offer top-notch medical and pharmaceutical app development services to enterprises across the world. Our expertise in the custom web application development field enables us to deliver comprehensive healthcare software development services such as Practice Management Systems (PMS) and Electronic Health Records (EHR) systems, telemedicine platforms, billing, insurance verification software tools, etc., capable of meeting your custom business requirements. ",
  },
  {
    id: 2,
    "title": "E-Commerce",
    "content": "As one of the superior web development companies, we are dedicated to improving the efficiency and streamlining the processes of retail and eCommerce organizations through the implementation of robust eCommerce app development services. The services offered at Appinventiv includes Customer Relationship Management (CRM) platforms, Content Management Systems (CMS), Enterprise Resource Planning (ERP) platforms, online store development, and website development. ",
  },
  {
    id: 3,
    "title": "Education",
    "content": "Being one of the best web application development companies, we strive to optimize e-Learning processes and increase their efficiency. Our custom-designed web platforms allow teachers to effectively plan and grade the educational process while providing students with the opportunity to learn, train, enhance their skills, and pass examinations. The main goal of offering robust education app development services is to ensure that all users are able to benefit from the best possible e-Learning experience.",
  },
  {
    id: 4,
    "title": 'Fintech',
    "content": "Our web application developers are dedicated to providing fintech companies with a competitive edge by developing value-driven web solutions. Our financial software development services include trading platforms, banking software, and credit & loan management systems, all of which are designed to help businesses reach their goals. "
  },
  {
    id: 5,
    "title": "Manufacturing",
    "content": "Manufacturing companies who turn to us for assistance can benefit from our web apps development services. Our services can help them with inventory management, equipment maintenance, and data analysis for operational efficiency. As a web development company, our solutions are designed to provide the highest quality of service and to ensure that our customers are able to make the most of their operations."
  },
  {
    id: 6,
    "title": "On Demand",
    "content": "Our team of dedicated professionals is capable of combining your business ideas with up-to-date and modern technologies to transform your on-demand web and app development processes. We are committed to providing the highest quality of on-demand app development services, and our staff is equipped with the necessary skills and expertise to ensure that your business goals are achieved. ",
  }
]
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
    "title": "E-Commerce development",
    "svg": ECommerce,
    "content": "As a website app development company, we offer end-to-end eCommerce solutions with payment gateway integration, plug-in high-end modules, round-the-clock maintenance, and appealing UX for a delightful experience to the end users."
  },
  {
    "id": "4",
    "content": "We create websites with easy navigation, robust information architecture, visual cues for users, and action-oriented design. Our services include domain name registration, Content development and management system, navigation design, programming, User interface designing and much more. As a dedicated website application development company, our websites work wonderfully, regardless of the screen size or resolution.",
    "svg": Websitedevelopment,
    "title": "Website development and maintenance"
  },
  {
    "id": "5",
    "content": "We help SaaS Startups and enterprises to build better software products and innovate at scale. With several SaaS development accelerators, reusable frameworks and components, we reduce the time-to-market. We provide UX designing and engineering, API blueprint and engineering, distributed architecture, Data analytics, Machine Learning, Cloud-native practices, and Automated testing. ",
    "svg": Saas,
    "title": "SaaS products "
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
const productDevelopment = () => {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);
  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div>
      <Head>
        <title>Web development</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Web Development'} />
      <ServiceHeader title={'Web Development'} />
      <Header heading={"Build next-gen web applications"} contents={"We turn your business idea into technical reality by putting custom skill  sets in place. Our proficient product managers with insightful perception and  experience  can  bridge  the  gap  between  business  vision  and technical understanding. Our customized approach helps you create web applications,  mobile  applications,  chatbots,  and  custom  portals.  Our services ensure iterative development using advanced technologies for faster time-to-market, robustness, and scalability"} Image={Product} />
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
      </div>
      <ServiceWork heading={"Development Stages "} title1={"Idea & Requirement"} content1={"Conduct research to develop an understanding of your users."}  title2={"Planning"} content2={"Conduct research to develop an understanding of your users."} title3={"Designing"} content3={"Generate a range of crazy, creative ideas."} title4={"Development"} content4={"Build real, tactile representations for a range of your ideas."} title5={"Testing"} content5={"Conduct research to develop an understanding of your users."} title6={"Demo"}content6={"Conduct research to develop an understanding of your users."} />
      <div className='bg-white border-b-2 border-gray-color'>
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
                <h3
                  key={tech.name}
                  className={`p-4 text-xl cursor-pointer ${selectedTech === tech ? ' text-primary-color' : ''
                    }`}
                  onClick={() => handleTechClick(tech)}
                >
                  {tech.name}
                  <br />
                  <br />
                  <hr />
                </h3>

              ))}
            </div>
            <div className="w-3/4 px-4">
              <div>
                <div className='mt-6'>
                  <p className='text-lg'>{selectedTech.heading}</p>
                  <h2 className="text-lg font-bold mt-4">{selectedTech.title1}</h2>
                  <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10 mx-auto '>
                    {selectedTech.image.map((value) => (
                      <ImageContainer src={value.image} classes={"w-20 h-20"} />
                    ))}
                  </div>
                  <h2 className="text-lg font-bold mt-4">{selectedTech.title2}</h2>
                  <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10 mx-auto '>
                    {selectedTech.framework.map((value) => (
                      <ImageContainer src={value.image} classes={"w-20 h-20"} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b-2 border-gray-color">
        <div className='text-center mb-6'>
          <h1 className="text-center text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center mb-8 mt-8">Industries We Serve</h1>
          <p className='text-lg text-center'>
            Our web application development services vary across but are not limited to:
          </p>
        </div>
        <div className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto container ">
          <div className="container ">
            <div className="grid gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
              {
                industry.map((service, key) => (
                  <div key={service.id} className="group  rounded-2xl border-2 border-green p-4 bg-white transition duration-500">
                    <h2 className='text-lg font-semibold mb-3.5'>{service.title}</h2>
                    <p className="text-lg mb-3.5">{service.content}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <FaqComponent page={1} />
      <Footer />
    </div>
  )
}

export default productDevelopment