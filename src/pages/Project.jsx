import React from "react";
import { FaGithub, FaLink } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
import blog from "../assets/blog.png";
import gocart from "../assets/gocart.png";
import { FaYoutube } from "react-icons/fa6";
import razorpay from '../assets/razorpay.png';
import student from '../assets/student.png';
import resume from '../assets/resume.png';
import blogapplication from '../assets/blogapplication.png';
import tweer from '../assets/tweet.png';
import email from '../assets/email.png';
import todo from '../assets/todo.png';
import weather from'../assets/weather.png';
export default function Project() {
  return (
    <>
      <div className="w-full">
        {/* major project  */}
        <div className="w-full">
          <h1 className="text-xl font-semibold border-b-2 pb-1 w-fit mb-5">
            Projects
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* project 2 */}
            <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div>
                <div className="w-full h-40">
                  <img
                    src={razorpay}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div>
                <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                    Razorpay Payment Integration
                  </h1>
                  <p className="text-neutral-400">
                  This project demonstrates how to integrate Razorpay payment gateway with a Django application. It includes setting up payment processing for a fictional "Buy Me a Coffee" scenario, where users can donate 500 INR.

                  </p>
                  <p className="text-neutral-400">
                  Django | Razorpay Integration | HTML | CSS | Bootstrap
                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://github.com/Sanketarali/Razorpay_Payment_Integration"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaGithub  className="text-text-light pr-1" size={16} />{" "}
                      Code
                    </NavLink>
                    
                  </div>
                </div>
              </div>
            </div>

            








            <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div>
                <div className="w-full h-40">
                  <img
                    src={student}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div>
                <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                  Student management system
                  </h1>
                  <p className="text-neutral-400">
                  A Django web app for efficient student record management, streamlining CRUD operations to simplify adding, updating, and removing data.
                  </p>
                  <p className="text-neutral-400">

                  Django | Python | Django Forms | HTML/CSS | CRUD Operations | Django Models
                   
                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://github.com/Sanketarali/Student-Management-system"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaGithub  className="text-text-light pr-1" size={16} />{" "}
                      Code
                    </NavLink>
                    
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div>
                <div className="w-full h-40">
                  <img
                    src={tweer}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div>
                <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                  Tweet Application
                  </h1>
                  <p className="text-neutral-400">
                  A simple Django web application that allows users to create, view, edit, and delete tweets. This application includes user registration and authentication features, enabling users to manage their tweets with images.


                  </p>
                  <p className="text-neutral-400">
                  Django | HTML | CSS | Bootstrap | SQLite | Django Models | Django Forms | CRUD Operations







                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://github.com/Sanketarali/Tweet-Application"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaGithub  className="text-text-light pr-1" size={16} />{" "}
                      Code
                    </NavLink>
                    
                  </div>
                </div>
                
              </div>
            </div>
            <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div>
                <div className="w-full h-40">
                  <img
                    src={email}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div>
                <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                  Poll Application

                  </h1>
                  <p className="text-neutral-400">
                  A simple web application built using Django that allows users to create polls, vote on them, and view the results. The application is designed to help users engage with multiple-choice questions and see the results.


                  </p>
                  <p className="text-neutral-400">
                  Django | Pyhon | HTML/CSS | Django Forms | Routing and URL Handling
                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://github.com/Sanketarali/Poll-Application"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaGithub  className="text-text-light pr-1" size={16} />{" "}
                      Code
                    </NavLink>
                    
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* project 1 */}
            <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div>
                <div className="w-full h-40">
                  <img
                    src={weather}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div>
                <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                  Weather App
                  </h1>
                  <p className="text-neutral-400">
                  This Django application fetches real-time weather data using the OpenWeatherMap API based on user input for city names.


                  </p>
                  <p className="text-neutral-400">
                  
                  </p>
                  <p className="text-neutral-400">
                  Django | HTML/CSS | Requests | OpenWeatherMap API | Python | HTTP Methods
                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://github.com/Sanketarali/Django-Weather-App"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaLink className="text-text-light pr-1" size={16} />{" "}
                      code
                    </NavLink>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div>
                <div className="w-full h-40">
                  <img
                    src={todo}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div>
                <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                  Todo application

                  </h1>
                  <p className="text-neutral-400">
                  This is a simple To-Do application built using Django, allowing users to manage their daily tasks effectively.


                  </p>
                  <p className="text-neutral-400">
                  
                  </p>
                  <p className="text-neutral-400">
                  Django | Python | Bootstrap | HTML/CSS | Django Forms | CRUD Operations | Messages Framework







                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://github.com/Sanketarali/Django-Todo-application"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaLink className="text-text-light pr-1" size={16} />{" "}
                      code
                    </NavLink>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div>
                <div className="w-full h-40">
                  <img
                    src={blogapplication}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div>
                <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                  Blog Application

                  </h1>
                  <p className="text-neutral-400">
                  This is a simple blog application built using the Django framework. It provides basic functionality for user authentication, post creation, and post management.


                  </p>
                  <p className="text-neutral-400">
                  
                  </p>
                  <p className="text-neutral-400">
                    Django | Python | HTML/CSS | SQLite | HTTP | Authentication System |
                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://github.com/Sanketarali/Blog-Application"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaLink className="text-text-light pr-1" size={16} />{" "}
                      code
                    </NavLink>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div>
                <div className="w-full h-40">
                  <img
                    src={resume}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div>
                <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                  Resume Builder

                  </h1>
                  <p className="text-neutral-400">
                  This Django web app enables users to upload resumes, manage candidate details, and perform CRUD operations for profile information.







                  </p>
                  <p className="text-neutral-400">
                  
                  </p>
                  <p className="text-neutral-400">
                  Django | HTML | CSS | Bootstrap | SQLite | File Upload | CRUD Operations

                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://github.com/Sanketarali/Resume-Uploader-Using-Django"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaLink className="text-text-light pr-1" size={16} />{" "}
                      code
                    </NavLink>
                  </div>
                </div>
                
              </div>
            </div>




        


            
            {/* <div className="rounded-md bg-neutral-900 shadow-sm hover:shadow-md">
              <div> */}
                {/* <div className="w-full h-40">
                  <img
                    src={gocart}
                    alt=""
                    className="rounded-t-md  w-full h-full"
                  />
                </div> */}
                {/* <div className="text-[12px] px-4 py-2 space-y-2 flex flex-col">
                  <h1 className="font-semibold lg:font-medium text-[18px]">
                    Gocart | Online shopping site
                  </h1>
                  <p className="text-neutral-400">
                    It is a full-stack e-commerce site. where you can filter products acc. to price and category, add items to a cart, and check order history and payment with Braintree.
                  </p>
                  <p className="text-neutral-400">
                  
                  </p>
                  <p className="text-neutral-400">
                    React | Tailwind CSS | Node.js | Express |
                    MongoDB | antd
                  </p>
                  <div className="flex space-x-4 py-1">
                    <NavLink
                      to="https://gocart.cyclic.app/"
                      className="flex items-center bg-neutral-100 rounded-md text-black hover:text-white hover:bg-neutral-800 w-fit py-1 text-[12px] px-3"
                    >
                      <FaLink className="text-text-light pr-1" size={16} />{" "}
                      Live
                    </NavLink>
                  </div>
                </div> */}

                
                
              {/* </div>
            </div> */}
          </div>
        </div>

        

        {/* mini project  */}
        {/* <div className="w-full my-5">
          <h1 className="text-xl font-semibold border-b-2 pb-1 w-fit mb-5">
            More projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <NavLink
              to="https://github.com/prabhat63s/notebook_application"
              target="_/blank"
              className="flex items-center justify-around rounded-md p-4 bg-neutral-800 shadow-sm hover:shadow-md"
            >
              <div className="w-[20%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 700 500"
                >
                  {" "}
                  <path fill="#ffffff" d="M96 352V96c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V293.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V256h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H320V144c0-8.8-7.2-16-16-16H272zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88H296z" />{" "}
                </svg>
              </div>
              <div className="w-[80%]">
                <h1 className="text-[14px]">NoteBook App </h1>
                <p className="text-neutral-400 text-[12px] pt-1">
                  React Js, Tailwind CSS, Localstorage
                </p>
              </div>
              <MdOutlineArrowRightAlt size={24} />
            </NavLink>
            <NavLink
              to="https://github.com/prabhat63s/display-user-info "
              target="_/blank"
              className="flex items-center justify-around rounded-md p-4 bg-neutral-800 shadow-sm hover:shadow-md"
            >
              <div className="w-[20%]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500">
                  <path
                    fill="#ffffff"
                    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                  />
                </svg>
              </div>
              <div className="w-[80%]">
                <h1 className="text-[14px]">User's display info. </h1>
                <p className="text-neutral-400 text-[12px] pt-1">
                  React Js, Tailwind CSS, Localstorage{" "}
                </p>
              </div>
              <MdOutlineArrowRightAlt size={24} />
            </NavLink>
            <NavLink
              to="https://github.com/prabhat63s/weather"
              target="_/blank"
              className="flex items-center justify-around rounded-md p-4 bg-neutral-800 shadow-sm hover:shadow-md"
            >
              <div className="w-[20%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25px"
                  viewBox="0 0 700 500"
                >
                  {" "}
                  <path fill="#ffffff" d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />{" "}
                </svg>
              </div>
              <div className="w-[80%]">
                <h1 className="text-[14px]">Weather App</h1>
                <p className="text-neutral-400 text-[12px] pt-1">
                  React Js, Tailwind CSS, Localstorage, WeatherAPI
                </p>
              </div>
              <MdOutlineArrowRightAlt size={24} />
            </NavLink>
          </div>
        </div> */}
      </div>
      
    </>
  );
}
