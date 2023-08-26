
// import Head from 'next/head'
// import Image from 'next/image'
// import React, { useState } from 'react';
// import ImageContainer from '../ImageContainer';
// import Pyramid from "../../../assets/images/Faq/8fef084ff56c4d60c7a2.svg";
// import angular from '../../../assets/images/services/angular.svg'
// import java from '../../../assets/images/services/java_lang.svg'
// import node from '../../../assets/images/services/node_js.svg'
// import go from '../../../assets/images/services/go.svg'
// import php from '../../../assets/images/services/php.svg'
// import html from '../../../assets/images/services/html-logo.svg'
// import css from '../../../assets/images/services/css-logo.svg'
// import js from '../../../assets/images/services/javascript-lg.svg'
// import python from '../../../assets/images/services/python_1.svg'
// import reactlogo from '../../../assets/images/services/react-logo-icon.svg'
// import vuejs from '../../../assets/images/services/vuejs-logo.svg'
// import Banner from '../../component/Services/Banner'
// import aws from '../../../assets/images/services/devops/aws.svg'
// import azure from '../../../assets/images/services/devops/azure.svg'
// import google from '../../../assets/images/services/devops/google.svg'
// import kotlin from '../../../assets/images/services/mobile/kotlin-1.svg'
// import fluter from '../../../assets/images/services/mobile/flutter.svg'
// import reactnative from '../../../assets/images/services/mobile/react-native-1.svg'
// import mysql from '../../../assets/images/services/dataScience/mysql.svg'
// import postgres from '../../../assets/images/services/dataScience/postgre_sql.svg'
// import oracle from '../../../assets/images/services/dataScience/oracle.svg'
// import nifi from '../../../assets/images/services/dataScience/nifi-logo.svg'
// import mssql from '../../../assets/images/services/dataScience/mssql.svg'
// import cassandra from '../../../assets/images/services/dataScience/cassandra.svg'
// import hbase from '../../../assets/images/services/dataScience/hbase-logo.svg'
// import hive from '../../../assets/images/services/dataScience/hive-logo.svg'
// import mongodb from '../../../assets/images/services/dataScience/mongodb-logo.svg'
// import meteor from '../../../assets/images/services/dataScience/meteor.svg'
// import ember from '../../../assets/images/services/dataScience/ember.svg'
// import nextjs from '../../../assets/images/services/dataScience/nextlogo.svg'

// const techStack = [
//   {
//     name: 'Frontend Programming Languages',
//     heading: 'Frontend development is a crucial aspect of developing user-friendly applications. At Alvrio, we choose curated front-end programming languages for ensuring the best performance.',
//     title1: "Language",
//     title2: "Framework",
//     image: [
//       {
//         id: 1,
//         image: html
//       },
//       {
//         id: 2,
//         image: css
//       },
//       {
//         id: 3,
//         image: js
//       },
//     ],
//     framework: [

//       {
//         id: 1,
//         image: vuejs
//       },
//       {
//         id: 2,
//         image: angular
//       }, {
//         id: 3,
//         image: reactlogo
//       },
//       {
//         id: 4,
//         image: nextjs
//       },
//       {
//         id: 5,
//         image: ember
//       },
//       {
//         id: 6,
//         image: meteor
//       },
//     ]
//   },
//   {
//     name: 'Backend Programming Languages',
//     heading: 'The behind-the-scenes part of a software application that handles data storage, processing, and business logic, enabling functionality and communication with the frontend components and external systems.',
//     title1: "Language",
//     title2: "",
//     image: [
//       {
//         id: 1,
//         image: node
//       },
//       {
//         id: 2,
//         image: python
//       }, {
//         id: 3,
//         image: java
//       },
//       {
//         id: 4,
//         image: php
//       },
//       {
//         id: 5,
//         image: go
//       }
//     ],
//     framework: [
//     ]
//   },

//   {
//     name: 'Database Systems',
//     heading: 'Our expert team crafts captivating and feature-rich mobile applications using technologies like React Native, Flutter, and native platforms, delivering delightful user experiences across iOS and Android devices.',
//     title1: "SQL",
//     title2: "NoSQL",
//     image: [
//       {
//         id: 1,
//         image: postgres
//       },
//       {
//         id: 2,
//         image: mysql
//       }, {
//         id: 3,
//         image: oracle
//       }, {
//         id: 4,
//         image: mssql
//       }
//     ],
//     framework: [
//       {
//         id: 1,
//         image: cassandra
//       },
//       {
//         id: 2,
//         image: hbase
//       },
//       {
//         id: 3,
//         image: hive
//       },
//       {
//         id: 4,
//         image: mongodb
//       },
//       {
//         id: 5,
//         image: nifi
//       },
//     ]
//   },
//   {
//     name: 'Devops ',
//     heading: 'We employ industry-leading DevOps practices, tools, and technologies like Jenkins, Docker, etc as Code to streamline software delivery, automate processes, and ensure scalable and reliable infrastructure management.',
//     title1: "Language",
//     title2: "",
//     image: [
//       {
//         id: 1,
//         image: aws
//       },
//       {
//         id: 2,
//         image: azure
//       }, {
//         id: 3,
//         image: google
//       },
//     ],
//     framework: [
//     ]
//   },
// ];
// const Tech = () => {
//   const [selectedTech, setSelectedTech] = useState('');

//   const handleTechClick = (tech) => {
//     setSelectedTech(tech);
//   };

//   return (
//     <div className='bg-white border-b-2 border-gray-color'>
//       <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//         <div className='text-center mb-6'>
//           <h1 className="text-center text-5xl justify-center mx-10 tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center mb-4 mt-8">Tech Stack We Use
//           </h1>
//           <p className='text-lg p-4'>Here is the tech stack used by our team while offering web app development services:
//           </p>
//         </div>
//         <div className="flex">
//           <div className="w-1/4 bg-white">
//             {techStack.map((tech) => (
//               <h3
//                 key={tech.name}
//                 className={`p-4 text-xl cursor-pointer ${selectedTech === tech ? ' text-primary-color' : ''
//                   }`}
//                 onClick={() => handleTechClick(tech)}
//               >
//                 {tech.name}
//                 <br />
//                 <br />
//                 <hr />
//               </h3>

//             ))}
//           </div>
//           <div className="w-3/4 px-4">
//             <div>
//               <div className='mt-6'>
//                 <p className='text-lg'>{selectedTech.heading}</p>
//                 <h2 className="text-lg font-bold mt-4">{selectedTech.title1}</h2>
//                 <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10 mx-auto '>
//                   {selectedTech.image.map((value) => (
//                     <ImageContainer src={value.image} classes={"w-20 h-20"} />
//                   ))}
//                 </div>
//                 <h2 className="text-lg font-bold mt-4">{selectedTech.title2}</h2>
//                 <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10 mx-auto '>
//                   {selectedTech.framework.map((value) => (
//                     <ImageContainer src={value.image} classes={"w-20 h-20"} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




// export default Tech;


import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import ImageContainer from '../ImageContainer';
import Pyramid from "../../../assets/images/Faq/8fef084ff56c4d60c7a2.svg";
import angular from '../../../assets/images/services/angular.svg'
import java from '../../../assets/images/services/java_lang.svg'
import node from '../../../assets/images/services/node_js.svg'
import ruby from '../../../assets/images/services/ruby.svg'
import go from '../../../assets/images/services/go.svg'
import php from '../../../assets/images/services/php.svg'
import html from '../../../assets/images/services/html-logo.svg'
import css from '../../../assets/images/services/css-logo.svg'
import js from '../../../assets/images/services/javascript-lg.svg'
import python from '../../../assets/images/services/python_1.svg'
import reactlogo from '../../../assets/images/services/react-logo-icon.svg'
import vuejs from '../../../assets/images/services/vuejs-logo.svg'
import Banner from '../../component/Services/Banner'
import aws from '../../../assets/images/services/devops/aws.svg'
import azure from '../../../assets/images/services/devops/azure.svg'
import google from '../../../assets/images/services/devops/google.svg'
import kotlin from '../../../assets/images/services/mobile/kotlin-1.svg'
import fluter from '../../../assets/images/services/mobile/flutter.svg'
import reactnative from '../../../assets/images/services/mobile/react-native-1.svg'
import mysql from '../../../assets/images/services/dataScience/mysql.svg'
import postgres from '../../../assets/images/services/dataScience/postgre_sql.svg'
import oracle from '../../../assets/images/services/dataScience/oracle.svg'
import nifi from '../../../assets/images/services/dataScience/nifi-logo.svg'
import mssql from '../../../assets/images/services/dataScience/mssql.svg'
import cassandra from '../../../assets/images/services/dataScience/cassandra.svg'
import hbase from '../../../assets/images/services/dataScience/hbase-logo.svg'
import hive from '../../../assets/images/services/dataScience/hive-logo.svg'
import mongodb from '../../../assets/images/services/dataScience/mongodb-logo.svg'
import meteor from '../../../assets/images/services/dataScience/meteor.svg'
import ember from '../../../assets/images/services/dataScience/ember.svg'
import nextjs from '../../../assets/images/services/dataScience/nextlogo.svg'
import appcode from '../../../assets/images/services/mobile/appcode-1.svg'
import ionic from '../../../assets/images/services/mobile/icons8-ionic.svg'
import android from '../../../assets/images/services/mobile/android-studio-logo.svg'



import terraform from '../../../assets/images/services/devops/terraform.svg'
import cfengine from '../../../assets/images/services/devops/cfengine.svg'
import puppet from '../../../assets/images/services/devops/puppet.svg'
import ansible from '../../../assets/images/services/devops/ansible.svg'
import chef from '../../../assets/images/services/devops/chef.svg'
import locust from '../../../assets/images/services/devops/locust.svg'
import apachejmeter from '../../../assets/images/services/devops/apache-jmeter.svg'

import mesos from '../../../assets/images/services/devops/mesos.svg'
import kubernetes from '../../../assets/images/services/devops/kubernetes.svg'
import openshift from '../../../assets/images/services/devops/openshift-.svg'
import cicd from '../../../assets/images/services/devops/ci-cd-logo.svg'



import shift from '../../../assets/images/services/mobile/Swift_(programming_language)-Logo.wine (1).svg'

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
    heading: 'The behind-the-scenes part of a software application that handles data storage, processing, and business logic, enabling functionality and communication with the frontend components and external systems.',
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
    name: 'Mobile development',
    heading: 'Our expert team crafts captivating and feature-rich mobile applications using technologies like React Native, Flutter, and native platforms, delivering delightful user experiences across iOS and Android devices.',
    title1: "Android",
    title2: "IOS",

    image: [
      {
        id: 1,
        image: fluter
      },
      {
        id: 2,
        image: reactnative
      }, {
        id: 3,
        image: ionic
      }, {
        id: 4,
        image: android
      }
    ],
    framework: [
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
    title2: "Tools And Tech",
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
      },
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
];
const Tech = () => {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);
  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };
  return (
    <div>
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

    </div>
  )
}

export default Tech