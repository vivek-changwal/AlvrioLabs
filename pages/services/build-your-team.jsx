
import Head from 'next/head'
import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import Team from '../../assets/images/services/team/team.gif'
import Banner from '../component/Services/Banner'
import Header from '../component/Services/Header'
const BuildYourTeam = () => {
  const services = [
    {
      "id": "1",
      "content": "We have access to a vast talent pool of IT experts, spanning various domains and technologies, ensuring you get the right fit for your projects.",
      "title": "Vast Talent Pool"
    },
    {
      "id": "2",
      "content": "Our team - building process is flexible and adaptable, allowing us to create customized solutions that align perfectly with your business goals.",
      "title": "Customized Solutions"
    },
    {
      "id": "3",
      "title": "Expertise Across Technologies",
      "content": "Whether you need web developers, data scientists, UI / UX designers, or cybersecurity specialists, we've got you covered."
    },
    {
      "id": "4",
      "content": "We can swiftly scale your team up or down, depending on project demands, enabling you to stay agile in a dynamic market.",
      "title": "Scalable Teams"
    },
    {
      "id": "5",
      "content": "Our rigorous screening and evaluation process ensure that only the most qualified and experienced candidates make it to your team.",
      "title": "Rigorous Screening "
    },
    {
      "id": "6",
      "content": "We ensure a smooth integration of our team with your existing workforce, fostering collaboration and efficiency.",
      "title": "Seamless Integration"
    },
  ]
  return (
    <div>
      <Head>
        <title>Build Your Team</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Build Your Team'} />
      <ServiceHeader title={'Build Your Team'} />
      <Header title={""} heading={"Empowered Experts. Transformative Solutions."} contents={"At Alvrio Labs, our exceptional team comprises skilled professionals passionate about technology and innovation. Our team includes experienced software engineers, data scientists, UI/UX designers, digital marketers, and project managers. Collaboratively, we work on cutting-edge projects, delivering top-notch solutions that exceed client expectations. With diverse expertise and a commitment to excellence, we foster a collaborative and supportive environment that nurtures creativity and encourages continuous learning. Our team's dedication to staying at the forefront of industry trends empowers us to tackle complex challenges with agility and deliver high-impact results. Together, we drive Alvrio Labs' mission to provide innovative, reliable, and transformative solutions for our clients."} Image={Team} />
      <div className="bg-white border-b-2 border-gray-color">
        <div className='px-4 py-8 mx-auto'>
          <h1 className="text-center text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center mb-16 mt-8">Our Services</h1>
          <div className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto container ">
            <div className="container ">
              <div className="grid gap-6  sm:grid-cols-2 lg:grid-cols-3">
                {
                  services.map((service, key) => (
                    <div key={service.id} className="group  rounded-2xl border-2 border-green p-4 bg-white transition duration-500">
                      <h2 className='text-xl font-semibold mb-3.5'>{service.title}</h2>
                      <p className="text-lg mb-3.5">{service.content}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <FaqComponent page={6} />
      <Footer />
    </div >
  )
}

export default BuildYourTeam