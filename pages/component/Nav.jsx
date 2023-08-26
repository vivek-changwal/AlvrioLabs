import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { useState } from 'react';
import ImageContainer from "./ImageContainer";
import AlvrioLogo from '../../public/alvrio-logo.jpeg'
const MenuItem = (props) => {
  const { label, link } = props;
  return (
    <li>
      <a
        href={link}
        className="text-lg font-normal md:hover:text-secondary-color block py-2 pr-4 pl-3 text-whiterounded md:bg-transparent md:p-0"
        aria-current="page"
      >
        {label}
      </a>
    </li>
  );
};

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="border-b-2 border-gray-color">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto  container">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center" href="/">
            <ImageContainer src={AlvrioLogo}
              alt={'Alvrio Labs'}
              classes={"w-20 h-20"} itemProp='image'
            />
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`justify-self-center pb-3 mt-8 w-full md:block md:w-auto md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <MenuItem label="Home" link="/" />
              <MenuItem label="Services" link="#services"></MenuItem>
              <MenuItem label="How we work" link="#work" />
              <MenuItem label="Team" link="/#team" />
              <MenuItem label="Clients" link="/#client" />
              <MenuItem label="Blogs" link="blogs" />
              <MenuItem label="Contact" link="#contact" />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
