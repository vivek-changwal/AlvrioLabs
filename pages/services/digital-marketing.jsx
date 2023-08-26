import Head from 'next/head'
import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import ImageContainer from '../component/ImageContainer'
import Image from 'next/image'
import Digital from '../../assets/images/services/digital/digital.gif'
import Banner from '../component/Services/Banner'
import compute from '../../assets/images/services/digital/Google_Compute_Engine-Logo.wine.svg'
import grammarly from '../../assets/images/services/digital/grammarly-1.svg'
import ads from '../../assets/images/services/digital/google-ads-2.svg'
import adwords from '../../assets/images/services/digital/Google-AdWords-New.svg'
import analytics from '../../assets/images/services/digital/google-analytics-4.svg'
import canva from '../../assets/images/services/digital/Canva.svg'
import Consulting from '../../assets/images/services/digital/reshot-icon-digital-marketing-C4BN5DZYUF.svg'
import professional from '../../assets/images/services/digital/reshot-icon-social-campaign-XT5NFPEJ48.svg'
import Header from '../component/Services/Header'
import WorkSection from '../component/Work'
import ServiceWork from '../component/Services/ServiceWork'

const techStack = [
  {
    name: 'Paid Marketing',
    heading: 'Paid Marketing tech setck involves utilizing online advertising platforms like Google Ads and social media ads to reach target audiences, optimizing ad campaigns with relevant keywords, compelling ad copy, and precise targeting for maximum ROI.',
    image: [
      {
        id: 1,
        image: analytics
      },
      {
        id: 2,
        image: adwords
      }, {
        id: 3,
        image: canva
      },
    ]
  },
  {
    name: 'Organic SEO',
    heading: 'Organic SEO tech setck refers to implementing on-page and technical SEO strategies that focus on natural, relevant content, proper site structure, keywords, meta tags, and mobile responsiveness to improve search engine rankings and user experience.',
    image: [
      {
        id: 1,
        image: compute
      },
      {
        id: 2,
        image: grammarly
      },
      {
        id: 3,
        image: ads
      },
    ]
  },
];
const services = [
  {
    "id": "1",
    "content": "Paid marketing, also known as online advertising or paid media, is a digital marketing strategy that involves paying for ad placements on various online platforms to reach a specific target audience and promote products, services, or content. Unlike organic marketing, which relies on non-paid methods to attract traffic, paid marketing relies on advertising budgets to drive visibility and generate immediate results.",
    "svg": Consulting,
    "title": "Paid Marketing"
  },
  {
    "id": "2",
    "content": "Organic SEO (Search Engine Optimization) is a digital marketing strategy focused on improving a website's visibility in search engine results pages (SERPs) through non-paid or organic methods. It involves optimizing various elements of a website to rank higher in search engines like Google, Bing, or Yahoo, with the ultimate goal of driving more organic (unpaid) traffic to the site.",
    "svg": professional,
    "title": "Organic SEO"
  },
]
const DevopsDevelopment = () => {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);
  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div>
      <Head>
        <title>Digital Marketing</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Digital Marketing'} />
      <ServiceHeader title={'Digital Marketing'} />
      <Header title={""} heading={"Effective Digital Marketing Solutions"} contents={"We build your brand name brick by brick through a strategic marketing plan. We help you realize your vision you have for your brand in the digital  realm. As  per  your  business  requirements,  we  define  your project goals, establish a strategy & timeframe, and determine the KPIs (key  performance  indicators).  Our  experts  prepare  regular  reports  & updates during the implementation cycle so that you can keep track of the project progress. Our Digital Marketing approach ensures long term gain through organic success and other inbound marketing techniques."} Image={Digital} />
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
      <ServiceWork heading={"Stages of Digital Marketing "} title1={"Goal Determination"} content1={"Conduct research to develop an understanding of your users."}  title2={"Implementation"} content2={"Conduct research to develop an understanding of your users."} title3={"Conversion And Expansion"} content3={"Generate a range of crazy, creative ideas."} title4={"Target Audience"} content4={"Build real, tactile representations for a range of your ideas."} title5={"Targeting Strategy"} content5={"Conduct research to develop an understanding of your users."} title6={"Reporting and Analytics"}content6={"Conduct research to develop an understanding of your users."} />
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
                  <h2 className="text-lg font-bold mt-4">Tools</h2>
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
      <FaqComponent page={5} />
      <Footer />
    </div >
  )
}

export default DevopsDevelopment