import Head from 'next/head'
import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import FaqComponent from '../component/Services/FAQ'
import ServiceHeader from '../component/Services/ServiceHeader'
import ImageContainer from '../component/ImageContainer'
import Image from 'next/image'
import Server from '../../assets/images/services/devops/Server.gif'
import Banner from '../component/Services/Banner'
import terraform from '../../assets/images/services/devops/terraform.svg'
import cfengine from '../../assets/images/services/devops/cfengine.svg'
import prometheus from '../../assets/images/services/devops/prometheus.svg'
import owasp from '../../assets/images/services/devops/owasp.svg'
import aws from '../../assets/images/services/devops/aws.svg'
import azure from '../../assets/images/services/devops/azure.svg'
import google from '../../assets/images/services/devops/google.svg'
import puppet from '../../assets/images/services/devops/puppet.svg'
import ansible from '../../assets/images/services/devops/ansible.svg'
import chef from '../../assets/images/services/devops/chef.svg'
import relic from '../../assets/images/services/devops/relic.svg'
import grafana from '../../assets/images/services/devops/grafana.svg'
import locust from '../../assets/images/services/devops/locust.svg'
import apachejmeter from '../../assets/images/services/devops/apache-jmeter.svg'
import powerShell from '../../assets/images/services/devops/power-shell.svg'
import luaLang from '../../assets/images/services/devops/lua-lang.svg'
import Consulting from '../../assets/images/services/devops/devops-consulting-services.svg'
import professional from '../../assets/images/services/devops/devops-professional-services.svg'


import gitlab from '../../assets/images/services/devops/gitlab.svg'
import mesos from '../../assets/images/services/devops/mesos.svg'
import docker from '../../assets/images/services/devops/docker.svg'
import kubernetes from '../../assets/images/services/devops/kubernetes.svg'
import openshift from '../../assets/images/services/devops/openshift-.svg'
import awsdeveloper from '../../assets/images/services/devops/aws-developer-tools.svg'
import cicd from '../../assets/images/services/devops/ci-cd-logo.svg'

import Header from '../component/Services/Header'
const techStack = [
  {
    name: 'Cloud Platform',
    heading: 'Harnessing Java/Kotlin and Android SDK, we build feature-rich and user-friendly Android applications that provide seamless functionality, excellent performance, and optimal compatibility across a wide range of devices.    ',
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
      {
        id: 4,
        image: awsdeveloper
      }
    ]
  },
  {
    name: 'Log Management',
    heading: 'The Leveraging Swift and the latest iOS frameworks, we create stunning and intuitive iOS applications that engage users, deliver seamless performance, and leverage the full potential of Apple ecosystem.',
    image: [
      {
        id: 1,
        image: prometheus
      },
      {
        id: 2,
        image: owasp
      },
      {
        id: 3,
        image: relic
      },
      {
        id: 4,
        image: grafana
      },
      {
        id: 5,
        image: docker
      },
      {
        id: 6,
        image: gitlab
      }
    ]
  },
  {
    name: 'Configuration Management',
    heading: 'Our expert team crafts captivating and feature-rich mobile applications using technologies like React Native, Flutter, and native platforms, delivering delightful user experiences across iOS and Android devices.',
    image: [
      {
        id: 1,
        image: puppet
      },
      {
        id: 2,
        image: ansible
      }, {
        id: 3,
        image: chef
      },
      {
        id: 4,
        image: terraform
      },
      {
        id: 5,
        image: cfengine
      }
    ]
  },
  {
    id: 4,
    "name": "Performance & Security",
    "heading": "",
    image: [
      {
        id: 1,
        image: locust
      },
      {
        id: 2,
        image: apachejmeter
      },
      {
        id: 3,
        image: kubernetes
      },
      {
        id: 4,
        image: mesos
      },
      {
        id: 5,
        image: openshift
      },
      {
        id: 6,
        image: cicd
      }
    ]
  },
  {
    id: 5,
    "name": "Scripting languages",
    "heading": "",
    image: [
      {
        id: 1,
        image: powerShell
      },
      {
        id: 2,
        image: luaLang
      }
    ]
  }
];
const services = [
  {
    "id": "1",
    "content": "To kickstart your transition, our DevOps consultants conduct a comprehensive analysis of your requirements and help you visualize the results. Our consultants guide you through the entire DevOps process through the perfect blend of best practices and state-of-the-art tools, thus achieving increased frequency and reliability of software releases for your organization.",
    "svg": Consulting,
    "title": "DevOps Consulting Services"
  },
  {
    "id": "2",
    "content": "To succeed in a competitive market, top-notch deployment quality and operations efficiency are critical. Our DevOps professional services can help you get there. Our experts, based on their experience of successfully implementing DevOps practices, are uniquely qualified to help you automate and standardize processes for infrastructure deployment.",
    "svg": professional,
    "title": "DevOps Professional Services"
  },
  {
    "id": "3",
    "title": "DevSecOps Services",
    "svg": professional,
    "content": "Integrating security into your development process is critical to avoid risk of threats and vulnerabilities. Our DevSecOps consulting and implementation services offer continuous monitoring, assessment, and analysis, identify any loophole in the development process at the earliest and remediate them on priority."
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
        <title>Devops</title>
      </Head>
      <Nav />
      <BreadCrumb title={'Devops'} />
      <ServiceHeader title={'Devops'} />
      <Header title={""} heading={"DevOps Services and Solutions"} contents={"Alvrio Labs offers comprehensive DevOps services to empower organizations with efficient software delivery and infrastructure management. Our expert team specializes in implementing industry best practices, tools, and technologies to optimize processes, enable continuous integration and deployment, and ensure robust and scalable infrastructure. We focus on automation, configuration management, containerization, and cloud technologies to streamline workflows, enhance productivity, and accelerate time-to-market. With our DevOps services, clients benefit from improved collaboration, reduced time and effort for software delivery, increased stability and reliability, and the ability to scale their applications seamlessly. Partner with Alvrio Labs for end-to-end DevOps solutions that drive innovation and operational excellence in your organization."} Image={Server} />
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
              <h2 className="text-2xl w-3/4 font-bold p-4">Why Choose Alvrio Labs as Your
                DevOps Services Company?
              </h2>
              <p className='mt-3.5 w-3/4 text-lg p-4'>
                Clients choose us because of our ability to improve business agility, increase efficiency, and reduce costs with:
              </p>
            </div>
            <div className="w-1/2 p-4">
              <div className='flex'>
                <div className=' mx-2 grid col-span-2'>
                  <p className='number'>
                    1
                  </p>
                  <p className='text-lg mb-2.5 '>
                    Best Security Integration
                  </p>
                </div>
                <div className='mx-2 grid col-span-2'>
                  <p className='number'>
                    2
                  </p>
                  <p className='text-lg mb-2.5 '>
                    Complex Delivery
                    Experience
                  </p>
                </div>
              </div>
              <div className='flex'>
                <div className='mx-2 grid col-span-2'>
                  <p className='number'>
                    3
                  </p>
                  <p className='text-lg mb-2.5'>
                    Skilled DevOps Engineers

                  </p>
                </div>
                <div className='mx-2 grid col-span-2'>
                  <p className='number'>
                    4
                  </p>
                  <p className='text-lg mb-2.5 '>
                    Dedicated DevOps Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <FaqComponent page={4} />
      <Footer />
    </div>
  )
}

export default DevopsDevelopment