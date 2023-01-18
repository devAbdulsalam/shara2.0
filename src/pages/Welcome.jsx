import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../context/AuthContext"
import Logo from "../assets/logo.png";
import TestiImage3 from "../assets/Inbox cleanup-rafiki.svg";
import TestiImage1 from "../assets/Inbox cleanup-pana.svg";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import Aos from "aos"
import "aos/dist/aos.css"

const Welcome = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(user)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='z-[998]'>
      {/* Destop View Hero*/}
      <section className="h-[600px] pt-8  md:h-screen relative">
        <div className=" relative z-10 pt-10 bg-transparent mx-auto h-full flex flex-col text-white text-center">
          <div className='max-w-xl mx-auto mt-20 pt-10'>
            <h3 className="text-lg p-px px-3 rounded-md border border-white">Introducing Shara</h3>
          </div>
          <div className='mx-auto p-2'>
            <h2 className="text-4xl font-bold py-6">We link the waste industry with Technology</h2>
            <p className="text-lg md:font-semibold w-full md:w-8/12 lg:w-6/12 mx-auto">Shara  Management is a waste management business that links the industry with technology. Embedded in a native system, we connect customers and recyclers together to eliminate contamination of recycling possibilities while developing new ways to use and reuse materials in our ecosystem</p>
          </div>
          <div className='mt-8 pt-4'>
            <button className="p-2 px-6 bg-gray-100 hover:bg-gray-400 text-gray-500 rounded-md font-semibold">SIGN UP</button>
          </div>
        </div>
        <div className="hero-bg-gradient absolute top-0 left-0 right-0 bottom-0 over-flow-hidden h-full w-full">
          <img
            src="https://global-uploads.webflow.com/62ab0d6ce96d28cc9c7dfea8/62ab0d6ce96d285b127e0063_wave-bottom.svg"
            className="wave-buttom absolute left-0  right-0 -bottom-px z-10 w-full"
            alt="wave"
          ></img>
          <div className="bg-elements absolute top-0 left-0 right-0 bottom-0 flex justify-center align-center h-full mx-auto">
            <div className="dots absolute right-auto top-[38%] md:top-[34%] lg:top-[25%] w-[226px] lg:w-[297px] h-[71px] md:h-[81px] lg:h-[118px] left-[3%] md:bottom-[-10%] lg:bottom-auto"></div>
            <img
              src="https://global-uploads.webflow.com/62ab0d6ce96d28cc9c7dfea8/62ab0d6ce96d2803b07e005b_circle-white.svg"
              alt="circle-white"
              className="circle-small w-[15vw] absolute left-auto top-[17%] md:top-[20%] lg:top-[12%] md:right-[4%] md:w-[10vw]  bottom-auto  right-[7%] lg:w-[8vw]"
            />
            <img src="https://global-uploads.webflow.com/62ab0d6ce96d28cc9c7dfea8/62ab0d6ce96d2803b07e005b_circle-white.svg"
              alt="circle-white"
              className="circle-big max-w-[480px] absolute left-auto top-auto bottom-[-38%] right-[15%] md:right-[24%] md:bottom-[-22%] md:w-[32vw] lg:bottom-[-28%]"
            />
          </div>
        </div>
      </section>
      {/* MObile View Hero*/}
      <section className="mySwiper p-3 md:h-[700px] md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper p-3 grid max-w-screen-xl px-5 mx-3 lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:pt-28"
        >
          <SwiperSlide className="">
            <div className="lg:mt-0 lg:col-span-5 lg:flex flex justify-center md:mt-5 py-8">
              <img src={Logo} className="w-64" alt="hero" />
            </div>
            <div className="mr-auto place-self-center lg:col-span-7 md:text-left text-center mt-10">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#228e01] xl:text-6xl dark:text-[#228e01]">
                A Clean, Healthy and Wealthy City for All
              </h1>
              <p className="max-w-2xl mb-6 mt-1 font-light text-gray-700 lg:mb-8 text-sm dark:text-gray-600">
                Together we can make waste removal easy and effortless, for a
                cleaner and better planet.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
              <img src={TestiImage3} alt="hero" />
            </div>
            <div className="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#228e01] xl:text-6xl dark:text-[#228e01]">
                A Clean, Healthy and Wealthy City for All
              </h1>
              <p className="max-w-2xl mb-6 mt-1 font-light text-gray-700 lg:mb-8 text-sm dark:text-gray-600">
                Remember to recycle, reuse and reduce waste in your community.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="lg:mt-0 lg:col-span-5 lg:flex">
              <img src={TestiImage1} alt="hero" />
            </div>
            <div className="mr-auto place-self-center lg:col-span-7 md:text-left text-center">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#228e01] xl:text-6xl dark:text-[#228e01]">
                A Clean, Healthy and Wealthy City for All
              </h1>
              <p className="max-w-2xl mb-6 mt-1 font-light text-gray-700 lg:mb-8 text-sm dark:text-gray-600">
                Together we can make waste removal easy and effortless, for a
                cleaner and better planet.
              </p>
              {user ?
                <div className="space-y-4 sm:flex md:justify-start justify-center sm:space-y-0 sm:space-x-4 py-1">
                  <p className='text-xl text-green-500'>Welcome back {user?.name}</p>
                </div>
                :
                ""
              }
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Destop View*/}

      <section className='flex justify-center md:hidden p-4'>
        <Link
          to="/login"
          className="button bg-white px-10 py-2 rounded-lg text-[#228e01] text-xl font-semibold"
        >
          GET STARTED
        </Link>
      </section>
      <section className="pattern bg-repeat p-5 md:p-10">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:w-9/12 mx-auto">
          <div className="p-8 " data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <div
              className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                className="bi bi-card-list" viewBox="0 0 16 16">
                <path
                  d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path
                  d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>
            </div>
            <h2 className="uppercase mt-6 text-center text-indigo-500 font-medium mb-3">
              Transparency
            </h2>
            <p className="font-light text-sm text-gray-500 mb-3">
              We get insulted by others, lose trust for those others. We get back
              stabbed by friends. It becomes harder for us to give others a hand.
            </p>
            <a className="text-indigo-500 flex items-center hover:text-indigo-600" href="/">
              More about us icon
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="p-8" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <div
              className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl mx-auto">
              <svg fill="none" stroke="currentColor" width="32" height="32" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4">
                </path>
              </svg>
            </div>
            <h2 className="uppercase mt-6 text-center text-green-500 font-medium mb-3">
              Great Commission
            </h2>
            <p className="font-light text-sm text-gray-500 mb-3">
              We get insulted by others, lose trust for those others. We get back
              stabbed by friends. It becomes harder for us to give others a hand.
            </p>
            <a className="text-green-500 flex items-center hover:text-green-600" href="/">
              More about us icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="p-8" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <div
              className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl mx-auto">
              <svg fill="none" stroke="currentColor" width="32" height="32" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="uppercase mt-6 text-center text-red-500 font-medium mb-3">
              Built in Insights
            </h2>
            <p className="font-light text-sm text-gray-500 mb-3">
              We get insulted by others, lose trust for those others. We get back
              stabbed by friends. It becomes harder for us to give others a hand.
            </p>
            <a className="text-red-500 flex items-center hover:text-red-600" href="/">
              More about us icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className='md:p-10'>
        <div className='py-5 text-center'>
          <h1 className='text-4xl font-semibold p-2'>Our Advantages</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className='py-10 grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 space-x-4 text-center md:w-10/12 mx-auto'>
            <div className='p-2 w-full '>
              <button className=" feature-1 rounded-full text-center text-white text-2xl font-semibold">
                <p className='p-4 px-6'>1</p>
              </button>
              <h2 className='text-xl font-bold my-2'>Sort waste from Households</h2>
              <div className='mt-2'>
                <p className='leadinig text-justify'>We have established a scalable, environmentally compliant and profitable system for collecting, recycling and processing recyclable materials. We employ 20% of our 485 employees from lower income communities who are eager to earn an education that will allow them to support their families with dignity.</p>
              </div>
            </div>
            <div className='p-2 w-full'>
              <button className=" feature-2 rounded-full text-center text-white text-2xl font-semibold">
                <p className='p-4 px-6'>2</p>
              </button>
              <h2 className='text-xl font-bold my-2'>User friendly.</h2>
              <div className='mt-2'>
                <p className='leadinig text-justify'>Popular Products: MSW/Municipal Solid Waste/Recycling Services/Medical Waste Disposal /Industrial waste disposal, Dangerous radioactive waste disposal.</p>
              </div>
            </div>
            <div className='p-2 w-full'>
              <button className="feature-3 text-center rounded-full text-white text-2xl font-semibold">
                <p className='p-4 px-6'>3</p>
              </button>
              <h2 className='text-xl font-bold my-2'>A complete waste management solution</h2>
              <div className='mt-2'>
                <p className='leadinig text-justify'>Shara is a complete waste management solution for every type of establishment. It integrates different options and similar activities as transport, collection, donation and disposal/recycling in one application.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='hidden md:block relative bg-gray-50'>
        <div className='relative z-10 bg-transparent p-10 text-center text-white'>
          <div className='p-10'>
            <h1 data-aos="zoom-in" className='text-3xl font-bold p-2'>Improve waste collection efficiency and reduce costs</h1>
            <p data-aos="zoom-in" className='text-lg md:font-semibold'>Get rid of your trash piles, junk and manage them the smart way.</p>
          </div>
          <div className='p-10'>
            <button
              data-aos="zoom-in"
              onClick={() => navigate("/login")}
              className="bg-white hover:bg-gray-100 px-10 py-3 rounded-lg text-gray-700 hover:text-gray-800 text-xl font-bold"
            >
              GET STARTED
            </button>
          </div>
        </div>
        <div className="hero-bg-gradient absolute top-0 left-0 right-0 bottom-0 over-flow-hidden h-full w-full">
          <img
            src="https://global-uploads.webflow.com/62ab0d6ce96d28cc9c7dfea8/62ab0d6ce96d2872757e0060_wave-bottom-haze.svg"
            className="wave-buttom absolute left-0  right-0 -bottom-px z-10 w-full"
            alt="wave"
          ></img>
          <div className="bg-elements absolute top-0 left-0 right-0 bottom-0 flex justify-center align-center h-full mx-auto">
            <div className="dots absolute right-auto top-[38%] md:top-[34%] lg:top-[25%] w-[226px] lg:w-[297px] h-[71px] md:h-[81px] lg:h-[118px] left-[3%] md:bottom-[-10%] lg:bottom-auto"></div>
            <img
              src="https://global-uploads.webflow.com/62ab0d6ce96d28cc9c7dfea8/62ab0d6ce96d2803b07e005b_circle-white.svg"
              alt="circle-white"
              className="circle-small w-[15vw] absolute left-auto top-[17%] md:top-[20%] lg:top-[12%] md:right-[4%] md:w-[10vw]  bottom-auto  right-[-7%] lg:w-[8vw]"
            />
            <img src="https://global-uploads.webflow.com/62ab0d6ce96d28cc9c7dfea8/62ab0d6ce96d2803b07e005b_circle-white.svg"
              alt="circle-white"
              className="circle-big max-w-[480px] md:w-[32vw] absolute left-auto top-auto right-[-15%] md:right-[14%] md:bottom-[-22%] lg:bottom-[-48%]"
            />
          </div>
        </div>
      </section>
      <section className='hidden md:block bg-gray-50'>
        <div className='flex place-items-center w-10/12 mx-auto relative py-10'>
          <div className="sticky top-[20%] w-4/12 self-start h-full text-center py-6 flex flex-col">
            <h1 className='text-lg text-center font-semibold p-1'>Testimonials</h1>
            <p className='text-4xl text-gray-700 md:font-bold md:w-10/12 mx-auto text-start'>What people are saying about SHARA</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-7/12 mx-auto gap-4">
            <div data-aos="fade-up" className='border-t-4 shadow-sm bg-white border-[#11aeaf] rounded-md'>
              <p className='p-3'>We developed a new and improved garbage sorting system with WASTE MANAGEMENT SOLUTION, which employs optical recognition technology to distinguish various waste types. The first step was to design products that would be included in the system such as trash cans, containers, bags etc. We then helped our partners in developing software algorithms for image recognition and followed up on site installations of our automations.</p>
              <hr />
              <div className='flex p-2 px-4 justify-between'>
                <div className='flex'>
                  <img src="" alt="" />
                  <div>
                    <h2 className='text-lg font-semibold'>Musa james</h2>
                    <p className='text-sm'>Co founder</p>
                  </div>
                </div>
                <Rating value={5} />
              </div>
            </div>
            <div data-aos="fade-up" className='border-t-4 shadow-sm bg-white border-[#11aeaf] rounded-md'>
              <p className='p-3'>Shara has been a true game changer for our business. What used to take hours of painstaking manual labor takes minutes using shara. They have saved us TENS OF THOUSANDS in man-hours we wouldn’t otherwise be spending and enabled us to truly scale our operation, saving us a fortune!</p>
              <hr />
              <div className='flex p-2'>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h2 className='text-lg font-semibold'>Musa james</h2>
                  <p className='text-sm'>Co founder</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className='border-t-4 shadow-sm bg-white border-[#11aeaf] rounded-md'>
              <p className='p-3'>Waste management software is designed to help businesses in waste operations, reporting and business dynamics. It helps companies track necessary information such as bin level tracking, locations where waste was disposed at etc</p>
              <hr />
              <div className='flex p-2'>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h2 className='text-lg font-semibold'>Musa james</h2>
                  <p className='text-sm'>Co founder</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" className='border-t-4 shadow-sm bg-white border-[#11aeaf] rounded-md'>
              <p className='p-3'>Shara is a waste management solution that helps in managing and streamlining the entire process of collecting, handling, disposing and recycling.</p>
              <hr />
              <div className='flex p-2'>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h2 className='text-lg font-semibold'>Musa james</h2>
                  <p className='text-sm'>Co founder</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className='border-t-4 shadow-sm bg-white border-[#11aeaf] rounded-md'>
              <p className='p-3'>Shara is a waste management solution that helps us manage our waste efficiently and reduce the amount of garbage we produce..</p>
              <hr />
              <div className='flex p-2'>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h2 className='text-lg font-semibold'>Musa james</h2>
                  <p className='text-sm'>Co founder</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className='border-t-4 shadow-sm bg-white border-[#11aeaf] rounded-md'>
              <p className='p-3'>The solution created by the AI platform of Shara is able to automatically sort waste from households into containers.</p>
              <hr />
              <div className='flex p-2'>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h2 className='text-lg font-semibold'>Musa james</h2>
                  <p className='text-sm'>Co founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Welcome;
