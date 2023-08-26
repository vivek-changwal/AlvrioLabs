
import Head from 'next/head'
import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import Training from '../../assets/images/services/training/Gaming.gif'
import Banner from '../component/Services/Banner'
import Header from '../component/Services/Header'

const trainingAndMentorship = () => {
  return (
    <div>
      <Head>
        <title>Training And Mentorship</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Training And Mentorship'} />
      <ServiceHeader title={'Training And Mentorship'} />
      <Header title={""} heading={"Empowering Growth Through Mentorship"} contents={"At Alvrio Labs, we provide comprehensive training and mentorship programs to empower individuals and teams in the dynamic fields of technology and innovation. Our experienced mentors offer personalized guidance, hands-on learning, and industry insights, fostering professional growth and skill development. Through workshops, one-on-one sessions, and practical projects, participants gain expertise in cutting-edge technologies, software development, data science, and more. Whether for aspiring developers, data scientists, or tech enthusiasts, our training and mentorship services create a supportive and collaborative environment, enabling individuals to excel in their careers and make a significant impact in the ever-evolving world of technology."} Image={Training} />
      <Banner />
      <FaqComponent page={9} />
      <Footer />
    </div >
  )
}

export default trainingAndMentorship