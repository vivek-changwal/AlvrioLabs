import Head from 'next/head'
import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import ImageContainer from '../component/ImageContainer'
import Image from 'next/image'
import Mobile from '../../assets/images/services/mobile/mobile.gif'
import Banner from '../component/Services/Banner'
import ionic from '../../assets/images/services/mobile/icons8-ionic.svg'
import kotlin from '../../assets/images/services/mobile/kotlin-1.svg'
import android from '../../assets/images/services/mobile/android-studio-logo.svg'
import appcode from '../../assets/images/services/mobile/appcode-1.svg'
import fluter from '../../assets/images/services/mobile/flutter.svg'
import reactnative from '../../assets/images/services/mobile/react-native-1.svg'
import Java from '../../assets/images/services/mobile/Java_(programming_language)-Logo.wine.svg'
import shift from '../../assets/images/services/mobile/Swift_(programming_language)-Logo.wine (1).svg'
import Consulting from '../../assets/images/services/mobile/Flutter-App-Ideation-Consulting.svg'
import uiux from '../../assets/images/services/mobile/design-edit.svg'
import testing from '../../assets/images/services/mobile/test-icon.svg'
import development from '../../assets/images/services/mobile/Flutter-App-Development.svg'
import WorkSection from '../component/Work'
import Header from '../component/Services/Header'
import ServiceWork from '../component/Services/ServiceWork'
const techStack = [
  {
    name: 'Android',
    heading: 'Harnessing Java/Kotlin and Android SDK, we build feature-rich and user-friendly Android applications that provide seamless functionality, excellent performance, and optimal compatibility across a wide range of devices.    ',
    image: [
      {
        id: 1,
        image: android
      },
      {
        id: 1,
        image: kotlin
      }, {
        id: 1,
        image: Java
      },
    ]
  },
  {
    name: 'IOS',
    heading: 'The Leveraging Swift and the latest iOS frameworks, we create stunning and intuitive iOS applications that engage users, deliver seamless performance, and leverage the full potential of Apple ecosystem.',
    image: [
      {
        id: 1,
        image: shift
      },
      {
        id: 1,
        image: appcode
      },
    ]
  },
  {
    name: 'Hybrid',
    heading: 'Our expert team crafts captivating and feature-rich mobile applications using technologies like React Native, Flutter, and native platforms, delivering delightful user experiences across iOS and Android devices.',
    image: [
      {
        id: 1,
        image: fluter
      },
      {
        id: 1,
        image: reactnative
      }, {
        id: 1,
        image: ionic
      },
    ]
  },
];
const services = [
  {
    "id": "1",
    "content": "Android or IOS applications, depending on the characteristics, are more suited for a particular type of business. Our team of iOS app developers help businesses decide whether android or iOS is a good fit for them and which tech stack best suits their needs.",
    "svg": Consulting,
    "title": "Mobile App Development Consultation"
  },
  {
    "id": "2",
    "content": "Andriod and iOS applications are known for their memorable and immersive designs. We align your brand with what your users expect from the Android and Apple ecosystem. Our team of Android or iOS app designers specialize in creating experiences that last.",
    "svg": uiux,
    "title": "UI/UX Design"
  },
  {
    "id": "3",
    "title": "IOS Software Testing",
    "svg": testing,
    "content": "Our iPhone mobile development process is structured to keep security and performance at the center. We make sure your application is glitch free and hack proof by applying a mix of manual and AI-driven automated mode of testing.    "
  },
  {
    "id": "4",
    "content": "Our android mobile development process is engineered to be security and performance-first. We ensure that your android mobile application development is glitch-free and has zero lags. We perform a combination of manual and automated testing processes to ensure a future-ready android software development.    ",
    "svg": testing,
    "title": "Android Software Testing"
  },
  {
    "id": "5",
    "content": "We are an android apps development company that specializes in seamless integration and deployment. Irrespective of which platform you want to be on, our expert android development services can help you get there. For a complete overview on Android development, check out this mobile application development guide.    ",
    "svg": development,
    "title": "Multi-platform Deployment"
  },
]
const mobileDevelopment = () => {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div>
      <Head>
        <title>Mobile development</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Mobile Development'} />
      <ServiceHeader title={'Mobile Development'} />
      < Header heading={"Build next-gen Mobile applications"} contents={"Fuel  your  business  with  flexible  and  custom  mobile  applications developed by us. We ideologize and create apps that can help your business to vouch for higher ROI from the market. Our experts have  an  in-detail  idea  about  what  it  takes  to  build  an  ideal  mobile application tailoring to your business needs. Right from ideating your application requirements to strategizing them, we convert them into significant  plans  and  end  up  with  market  dominance.  We  can  help  you  create  digitally  transformative,  high-performing,  and  featured-packed cross-platform apps for Android and iOS devices."} Image={Mobile} />
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
      <ServiceWork heading={"Stages of Mobile development "} title1={"Research"} content1={"Conduct research to develop an understanding of your users."}  title2={"Wireframe"} content2={"Conduct research to develop an understanding of your users."} title3={"Prototype"} content3={"Generate a range of crazy, creative ideas."} title4={"Development"} content4={"Build real, tactile representations for a range of your ideas."} title5={"Testing"} content5={"Conduct research to develop an understanding of your users."} title6={"Deploy"}content6={"Conduct research to develop an understanding of your users."} />
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
                  <h2 className="text-lg font-bold mt-4">Languages</h2>
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
      <div className='bg-white border-b-2 border-gray-color'>
        <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="flex">
            <div className="w-1/2 bg-white">
              <h2 className="text-2xl w-3/4 font-bold p-4">Use Cases That Go Beyond
                a Massive User Reach
              </h2>
              <p className='mt-3.5 w-3/4 text-lg p-4'>
                Our custom mobile app development services are
                engineered to provide you a magnitude of Android and Ios
                benefits.
              </p>
            </div>
            <div className="w-1/2 p-4">
              <div className='flex'>
                <div className=' mx-2 grid col-span-2'>
                  <p className='number'>
                    1
                  </p>
                  <p className='text-lg mb-2.5 '>
                    Greater sources of revenue
                  </p>
                </div>
                <div className='mx-2 grid col-span-2'>
                  <p className='number'>
                    2
                  </p>
                  <p className='text-lg mb-2.5 '>
                    Multi-platform exposure
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='mx-2 grid col-span-2'>
                  <p className='number'>
                    3
                  </p>
                  <p className='text-lg mb-2.5'>
                    Greater scope
                    of innovation
                  </p>
                </div>
                <div className='mx-2 grid col-span-2'>
                  <p className='number'>
                    4
                  </p>
                  <p className='text-lg mb-2.5 '>
                    Easy integrations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <FaqComponent page={2} />
      <Footer />
    </div>
  )
}

export default mobileDevelopment