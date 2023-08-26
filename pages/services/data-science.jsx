import Head from 'next/head'
import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import ImageContainer from '../component/ImageContainer'
import DataScience from '../../assets/images/services/dataScience/datasci.gif'
import ruby from '../../assets/images/services/ruby.svg'
import node from '../../assets/images/services/node_js.svg'
import python from '../../assets/images/services/python_1.svg'
import Banner from '../component/Services/Banner'
import aws from '../../assets/images/services/devops/aws.svg'
import azure from '../../assets/images/services/devops/azure.svg'
import google from '../../assets/images/services/devops/google.svg'
import kinesis from '../../assets/images/services/dataScience/amazon-kinesis.svg'
import apache from '../../assets/images/services/dataScience/apache-storm-logo.svg'
import mysql from '../../assets/images/services/dataScience/mysql.svg'
import postges from '../../assets/images/services/dataScience/postgre_sql.svg'
import rabbitmq from '../../assets/images/services/dataScience/rabbitmq-hor.svg'
import WorkSection from '../component/Work'
import ServiceWork from '../component/Services/ServiceWork'
import java from '../../assets/images/services/java_lang.svg'
import go from '../../assets/images/services/go.svg'
import php from '../../assets/images/services/php.svg'

import postgres from '../../assets/images/services/dataScience/postgre_sql.svg'
import oracle from '../../assets/images/services/dataScience/oracle.svg'
import nifi from '../../assets/images/services/dataScience/nifi-logo.svg'
import mssql from '../../assets/images/services/dataScience/mssql.svg'
import cassandra from '../../assets/images/services/dataScience/cassandra.svg'
import hbase from '../../assets/images/services/dataScience/hbase-logo.svg'
import hive from '../../assets/images/services/dataScience/hive-logo.svg'
import mongodb from '../../assets/images/services/dataScience/mongodb-logo.svg'

import Header from '../component/Services/Header'
const techStack = [
  {
    name: 'Cloud Service',
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
  {
    name: 'Programming Languages',
    heading: 'Programming Languages is a crucial aspect of developing user-friendly applications. ',
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
  {
    name: 'Data Manipulation and Analysis',
    heading: 'TTools like Pandas, NumPy, and SciPy in Python provide efficient data processing and analysis capabilities, enabling quick and effective data manipulation for data science tasks.',
    image: [
      {
        id: 1,
        image: kinesis
      },
      {
        id: 1,
        image: apache
      },
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
      },
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
    ],
  },

];
const dataScience = () => {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);
  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div>
      <Head>
        <title>Data Science</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Data Science'} />
      <ServiceHeader title={'Data Science'} />
      <Header title={""} heading={"Data Science Solutions for Insights"} contents={"We  work  closely  with  business  stakeholders  to understand  various  goals  and  how  data  can  be leveraged  to  achieve  them.  We  design  data modeling  processes,  create  algorithms  and predictive models to digest the data available and churn out required insights. We also do MLOps for continuous  delivery  and  automation  of  data pipelines.  We  use  standard  and  hybrid  learning techniques  to  train  the  models  and  deploy  them into production with traceability and versioning"} Image={DataScience} />
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
      <FaqComponent page={7} />
      <Footer />
    </div>
  )
}

export default dataScience