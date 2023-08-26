import Head from 'next/head'
import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import ImageContainer from '../component/ImageContainer'
import Workflow from '../../assets/images/services/api/API.gif'
import angular from '../../assets/images/services/angular.svg'
import ruby from '../../assets/images/services/ruby.svg'
import java from '../../assets/images/services/java_lang.svg'
import node from '../../assets/images/services/node_js.svg'
import python from '../../assets/images/services/python_1.svg'
import reactlogo from '../../assets/images/services/react-logo-icon.svg'
import vuejs from '../../assets/images/services/vuejs-logo.svg'
import Banner from '../component/Services/Banner'
import aws from '../../assets/images/services/devops/aws.svg'
import azure from '../../assets/images/services/devops/azure.svg'
import google from '../../assets/images/services/devops/google.svg'
import kinesis from '../../assets/images/services/dataScience/amazon-kinesis.svg'
import apache from '../../assets/images/services/dataScience/apache-storm-logo.svg'
import mysql from '../../assets/images/services/dataScience/mysql.svg'
import keras from '../../assets/images/services/workflow/keras-svgrepo-com.svg'
import zabbix from '../../assets/images/services/workflow/zabbix.svg'
import powerbi from '../../assets/images/services/workflow/power-bi.svg'
import openshift from '../../assets/images/services/workflow/openshift-logo.svg'
import Line from '../../assets/images/HeroSection/line.svg';
import RightArrow from '../../assets/images/HeroSection/arrow-right-50 (1).svg';
import postgres from '../../assets/images/services/dataScience/postgre_sql.svg'
import oracle from '../../assets/images/services/dataScience/oracle.svg'
import nifi from '../../assets/images/services/dataScience/nifi-logo.svg'
import mssql from '../../assets/images/services/dataScience/mssql.svg'
import cassandra from '../../assets/images/services/dataScience/cassandra.svg'
import hbase from '../../assets/images/services/dataScience/hbase-logo.svg'
import hive from '../../assets/images/services/dataScience/hive-logo.svg'
import mongodb from '../../assets/images/services/dataScience/mongodb-logo.svg'

import ServiceWork from '../component/Services/ServiceWork'

import Header from '../component/Services/Header'
import Heading from '../component/Heading'

const Title = (props) => {
  return <p className="text-lg font-semibold text-secondary-color">{props.content}</p>
}


const techStack = [
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
      },
      {
        id: 5,
        image: cassandra
      },
      {
        id: 6,
        image: hbase
      },
      {
        id: 7,
        image: hive
      },
      {
        id: 8,
        image: mongodb
      },
      {
        id: 9,
        image: nifi
      },
    ],
  },
  {
    name: 'Workflow Automation Platforms',
    heading: 'Tools like Zapier, Microsoft Power Automate, or Automate.io that enable businesses to automate repetitive tasks and integrate various web applications without custom code, streamlining workflows efficiently.',
    image: [
      {
        id: 1,
        image: keras
      },
      {
        id: 2,
        image: powerbi
      },
      {
        id: 3,
        image: openshift
      },
      {
        id: 4,
        image: zabbix
      },
    ]
  },
  {
    name: 'Programming Language',
    heading: 'Programming Languages is a crucial aspect of developing user-friendly applications.',
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
        image: vuejs
      },
      {
        id: 6,
        image: angular
      }, {
        id: 7,
        image: reactlogo
      },

    ]
  },

  {
    name: 'Data Manipulation and Analysis',
    heading: 'TTools like Pandas, NumPy, and SciPy in Python provide efficient data processing and analysis capabilities, enabling quick and effective data manipulation for data science tasks.',
    image: [
      {
        id: 1,
        image: kinesis
      },
      {
        id: 2,
        image: apache
      },
    ]
  },
  {
    name: 'Devops',
    heading: 'We employ industry-leading DevOps practices, tools, and technologies like Jenkins, Docker, etc as Code to streamline software delivery, automate processes, and ensure scalable and reliable infrastructure management.',
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
    ]
  },
];
const WorkflowAutomation = () => {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);
  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div>
      <Head>
        <title>Workflow Automation</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Workflow Automation'} />
      <ServiceHeader title={'Workflow Automation'} />
      <Header title={""} heading={"Streamlined Workflow with Automation"} contents={"Our  team  makes  work  more  meaningful,  productive,  and efficient  by automating  your  business  processes.  Alvrio  Labs  enables  your organization to manage and optimize your business processes - all with clicks and no code. Now liberate your employees from spending time on repetitive tasks so they can instead focus on high-value, mission-critical work. We use standard practices to integrate and automate workflows for various cloud-based and internal tools"} Image={Workflow} />
      <ServiceWork heading={"Workflow Automation"} title1={"Identify Workflows"} content1={"Conduct research to develop an understanding of your users."}  title2={"Map Processes"} content2={"Conduct research to develop an understanding of your users."} title3={"Choose Automation Tools"} content3={"Generate a range of crazy, creative ideas."} title4={"Design Automation"} content4={"Build real, tactile representations for a range of your ideas."} title5={"Integration"} content5={"Conduct research to develop an understanding of your users."} title6={"Testing"}content6={"Conduct research to develop an understanding of your users."} />
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
      <Banner />
      <FaqComponent page={8} />
      <Footer />
    </div >
  )
}

export default WorkflowAutomation