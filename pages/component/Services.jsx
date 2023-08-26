import React from 'react'

const servicesList = [
  {
    "id": 1,
    "link": "services/web-development",
    "title": "Web Development",
    "content": "Alvrio Labs specializes in Agile methodologies to deliver rapid and iterative product development. Collaborate with our cross-functional teams of designers, developers, and product managers to ensure a streamlined and efficient development process.",
  },
  {
    "id": 2,
    "link": "services/mobile-development",
    "title": "Mobile Development",
    "content": "Our expert team of mobile developers specializes in building high-performance mobile applications for iOS and Android platforms. Leveraging the latest technologies and best practices, we create seamless, user-friendly, and visually appealing apps that deliver a superior mobile experience.",
  },
  {
    "id": 3,
    "title": "API Development",
    "link": "services/api-development",
    "content": "We are specializes in crafting custom API solutions tailored to your specific business needs. Our team of experienced developers will design and build robust APIs that seamlessly integrate with your existing systems, enabling secure and efficient data exchange between applications and platforms.",
  },
  {
    "id": 4,
    "title": "Devops",
    "link": "services/devops",
    "content": "Our team helps you establish robust CI/CD pipelines, enabling you to automate the building, testing, and deployment of your applications.With our expertise, we ensure fast, reliable, and error-free software releases.",
  },
  {
    "id": 5,
    "title": "Digital Marketing",
    "link": "services/digital-marketing",
    "content": "Engage and grow your audience through strategic social media marketing. We develop tailored social media strategies, create compelling content, manage social media accounts, run targeted advertising campaigns, and analyze performance to increase brand awareness and drive user engagement.",
  },
  {
    "id": 6,
    "title": "Build Your Team",
    "link": "services/build-your-team",
    "content": "We provide an innovative team outsourcing model to streamline your technical needs. We align dedicated developers with required skill set and experience, who will work as your team. Now build a skilled and cost-effective tech team with us.",
  },
  {
    "id": 7,
    "title": "Data Science",
    "link": "services/data-science",
    "content": "Leverage our expertise in data science to uncover valuable insights from your data, drive data-driven decision-making, and gain a competitive edge in your industry.Our data science solutions can help you build effective recommendation engines based on user behavior and preferences.",
  },
  {
    "id": 8,
    "link": "services/workflow-automation",
    "title": "Workflow Automation",
    "content": "We offers comprehensive workflow analysis services to assess your existing processes and identify areas for improvement. We work closely with your team to understand your unique requirements and design customized workflows that streamline operations and maximize efficiency.",
  },
  {
    "id": 9,
    "title": "Training and Mentorship",
    "link": "services/training-and-mentorship",
    "content": "Our personalized one-on-one mentorship program pairs you with experienced professionals who provide guidance, support, and industry-specific insights. Through regular meetings and open communication, our mentors help you navigate your career path, tackle challenges, and achieve your professional goals.",
  },
]
const Services = () => {
  const Content = (props) => {
    return <p className="text-lg">{props.content}</p>;
  };
  const Title = (props) => {
    return <h2 className="text-xl font-semibold mb-3.5">{props.title}</h2>;
  };
  return (
    <div id="services">
      <h1 className="text-center text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center mb-4 ">Our Services</h1>
      <p className='text-lg mt-3.5 mb-3.5 sm:items-center text-center'>
        Helping Businesses build secure and scalable Applications, Portals and Solutions
      </p>
      <div className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto container ">
        <div className="container ">
          <div className="grid gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {
              servicesList.map((service, key) => (
                <div key={service.id} className="group  rounded-2xl border-2 border-green p-4 bg-white transition duration-500">
                  <Title title={service.title} />
                  <p className="text-lg mb-3.5">{service.content}</p>
                  <a className=" text-primary-color underline" href={service.link}>Read More</a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services