import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import Heading from '../Heading'
import ImageContainer from '../ImageContainer'
import Contact from "../../../assets/images/Contact/Contact us-amico.svg"
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ServiceContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const toastifySuccess = () => {
    toast('Email sent! We will respond you back quickly ', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: 'notifyToast',
      className: "Toastify__toast"
    });
  };
  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        'service_m2maltw',
        'template_tn72o39',
        templateParams,
        'LI0ty4M31vwiYVdgK',
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button
        onClick={openDialog}
        className="text-white bg-secondary-color hover:bg-primary-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 "
      >
        Request a Proposal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <button
              onClick={closeDialog}
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="col-span-6 relative images-client">
              <ImageContainer
                classes={"img-fluid hidden sm:block"}
                src={Contact}
                itemProp='image'
                alt={"Contact Us - Reach Out to Alvrio Labs"}
              />
            </div>
            <div className="col-span-6">
              <Heading title="Contact Us" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 mt-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="text">
                    Name
                  </label>
                  <input type="text"
                    placeholder="Enter your name" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'is-invalid' : ''}`} {...register('name', {
                      required: { value: true, message: 'Please enter your name' },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })} required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="text">
                    Email
                  </label>
                  <input type="text"
                    placeholder="Enter your Email" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'is-invalid' : ''}`} {...register('email', {
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

                    })} required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="text">
                    Message
                  </label>
                  <textarea placeholder="Enter your message" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'is-invalid' : ''}`} {...register('message', {
                    required: true
                  })} rows="6" required></textarea>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <button
                    type="submit"
                    className="text-white bg-secondary-color hover:bg-primary-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5   "
                  >SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceContactUs;