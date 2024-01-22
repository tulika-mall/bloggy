import React, { useState, useEffect } from "react";
import app from "../assests/app.jpg";
import long1 from "../assests/long1.jpg";
import long2 from "../assests/long2.jpg";
import wide1 from "../assests/wide1.jpg";
import wide2 from "../assests/wide2.jpg";
import over from "../assests/over.jpg";
import axios from "axios";
import { Link } from 'react-router-dom';
import { DotLoader } from 'react-spinners'
import key from "../api";

const Hero = () => {
  return (
    <>
      {/* This is your hero section so */}
      <div className="flex items-center justify-center mt-44 min-h-[31rem] ">
        <div className="max-w-6xl grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="lg:pl-8  md:px-16 mt-4">
            <p className=" text-4xl md:text-6xl font-extrabold mb-8 text-center lg:text-start ">
              Our New <span className="text-violet-400">Android App</span> is
              Live Now!
            </p>
            <p className="text-center sm:text-start">
              We understand that life is on the move, and so is your reading.
              Our app is meticulously designed to provide you with a seamless
              and enjoyable reading experience right on your mobile device.
            </p>
            <button
              type="button"
              className="mt-8 mx-auto lg:mx-0 flex rounded-lg text-white bg-violet-400 hover:bg-violet-800 font-medium px-4 py-2"
            >
              Download Now
            </button>
          </div>
          <div className="hidden md:block">
            <img src={app} alt="app" className="pl-8 w-92 h-96 mx-auto "></img>
          </div>
        </div>
      </div>
    </>
  );
};

const FeaturedBlogs = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchCards = async () => {
    setCards([]);
    setLoading(true)
    try {
      const res = await axios.get(`${key}api/blogs/featured/`);
      setCards(res.data);
      console.log(res.data);
      setLoading(false)
    } catch (err) {
      console.error(err);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="">
      <div className="grid place-items-center text-center px-4 md:px-8 lg:px-16 xl:px-32">
        <p className="mt-8 sm:mt-24 text-3xl md:text-4xl font-extrabold mb-4">
          Latest Trending Blogs
        </p>
        <p className="inline-block max-w-3xl px-2 sm:px-0 md:px-6 lg:px-12 xl:px-24 mb-8 text-sm md:text-base lg:text-md">
          Explore All Our Engaging and Informative Blog Posts, Unveiling a
          Treasure Trove of Insights, Tips, and Stories Await Your Discovery.
        </p>
        <button
          type="button"
          className="border mb-4 px-5 py-3 border-gray-400 rounded-lg text-black bg-white hover:bg-gray-100 font-medium text-sm md:text-base lg:text-lg"
        >
          <li>
          <Link to={"/all"}>
          Explore all Blogs
          </Link>
        </li>
        </button>
      </div>

        {loading ? (
 <div className="flex items-center justify-center  w-full mt-16">
 <DotLoader color="rgba(118, 68, 188, 1)" />
 </div>
        ) : ( 
          <>
      <div className="grid mt-8 gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-0 lg:px-4">

          
       
        {cards.map((item) => (
          <Link
          to={"/blogs/"+item.slug }
          >
          <div className="max-w-md  mx-auto mb-8">
            <div className="p-4 md:p-6 rounded-xl border border-gray-200 overflow-hidden">
              <img
                className="w-full h-48 md:h-72 object-cover rounded-t-lg"
                src={item.image}
                alt="Blog Image"
              />

              <div className="px-4 md:px-6 py-4">
                <div className="font-bold text-lg md:text-xl mb-2">
                  {item.title}
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {item.info.substring(0, 100) + "...."}
                </p>
              </div>

              <div className="flex items-center justify-between px-4 md:px-6 py-2">
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 rounded-full object-cover mr-2"
                    src={item.image}
                    alt="Blog Image"
                  />
                  <div className="text-xs md:text-sm text-gray-400">
                    {item.read_time} mins read
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
        </>
        )}
    </div>
  );
};

const Ad = () => {
  return (
    <>
      <div className="grid place-items-center text-center px-4 md:px-8 lg:px-16 xl:px-32">
        <p className="mt-8 sm:mt-24 text-3xl md:text-4xl font-extrabold mb-4">
          Crafting Code, Creating Value
        </p>
        <p className=" inline-block max-w-4xl px-2 sm:px-0 md:px-6 lg:px-12 xl:px-24 mb-8 text-sm md:text-base lg:text-md">
          In a fast-paced digital world, innovation is key. Our web application
          development services are driven by cutting-edge technology and
          industry best practices
        </p>
      </div>

      <div class="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
        <div class="col-span-6 sm:col-span-4 text-center">
          <svg
            class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
          </svg>
          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Responsive
            </h3>
          </div>
        </div>
        <div class="col-span-6 sm:col-span-4 text-center">
          <svg
            class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"></path>
            <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"></path>
            <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
          </svg>
          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              UI/UX
            </h3>
          </div>
        </div>
        <div class="col-span-6 col-start-4 sm:col-span-4 text-center">
          <svg
            class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"></path>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
          </svg>
          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Lifetime Support
            </h3>
          </div>
        </div>
      </div>
      <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img
            className=" border rounded-xl "
            src={wide1}
            alt="Image Description"
          ></img>
        </div>
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img
            className=" border rounded-xl w-full h-96  "
            src={long1}
            alt="Image Description"
          ></img>
        </div>
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img
            className=" border rounded-xl  "
            src={long2}
            alt="Image Description"
          ></img>
        </div>
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img
            className=" border rounded-xl "
            src={wide2}
            alt="Image Description"
          ></img>
        </div>
      </div>
      <hr className=" w-48 h-1  mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 "></hr>

      {/* Feature Card Start */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16">
            {/* Grid */}
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                  Your Ideas, MY Code: Creating Web Magic Together.
                </h2>
                {/* Tab Navs */}
                <nav
                  className="grid gap-4 mt-5 md:mt-10"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Artificial Intillegence
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Deploy Powerful Deep and Machine Learning Algorithms
                          To Generate Organic Leads.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                        />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Powerful Administration
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Empowering You To Effortlessly Manage Content, Users,
                          And Settings.
                        </span>
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Seacrh Engine Optimization
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Our websites Are Built With a Strong SEO Foundation,
                          Ensuring Your Web App Ranks #1 Organically.
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
                {/* End Tab Navs */}
              </div>
              {/* End Col */}
              <div className="lg:col-span-6">
                <div className="relative">
                  {/* Tab Content */}
                  <div>
                    <div
                      id="tabs-with-card-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-1"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src={over}
                        alt="Image Description"
                      />
                    </div>
                    <div
                      id="tabs-with-card-2"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-2"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src={over}
                        alt="Image Description"
                      />
                    </div>
                    <div
                      id="tabs-with-card-3"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-3"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src={over}
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  {/* End Tab Content */}
                  {/* SVG Element */}
                  <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                    <svg
                      className="w-16 h-auto text-orange-500"
                      width={121}
                      height={135}
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            {/* Background Color */}
            <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]" />
            </div>
            {/* End Background Color */}
          </div>
        </div>

      <div className="flex justify-center">
        <div className="grid px-16 lg:px-4  grid-cols-1 xl:grid-cols-2 ">
          <div>
            <div class="font-light  sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Testing and Quality Assurance{" "}
              </h2>
              <p className="mb-4 text-black">
                <span className="font-bold">User Satisfaction:</span> Quality
                assurance ensures that your web application functions
                seamlessly, providing an exceptional user experience. Satisfied
                users are more likely to engage and convert.
              </p>
              <p className="mb-4  text-black">
                <span className="font-bold">Bug-Free Operation:</span> Our
                rigorous testing processes identify and eliminate bugs,
                glitches, and errors, ensuring your website or web app operates
                flawlessly across all platforms and devices.
              </p>
              <p className="mb-4  text-black">
                <span className="font-bold">Performance: </span> We optimize
                your web application for speed and performance, delivering
                lightning-fast loading times and smooth functionality, which
                directly impacts user retention.
              </p>
              <p className="mb-4  text-black">
                <span className="font-bold">Scalability & Security:</span>{" "}
                Quality assurance extends beyond the initial launch. We ensure
                that your web solution remains scalable, adapting to your
                growing needs without compromising quality. Our quality
                assurance protocols include robust security testing to safeguard
                against potential threats and vulnerabilities.
              </p>
            </div>
          </div>

          <div>
            <div className="grid px-4 mt-16 grid-cols-2 gap-4">
              <div>
                <img
                  className="border rounded-xl w-full  "
                  src={long1}
                  alt="Image Description"
                ></img>
              </div>
              <div>
                <img
                  className="mt-4  border rounded-xl w-full "
                  src={long2}
                  alt="Image Description"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class=" w-48 h-1  mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 "></hr>

      <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div className="max-w-xl text-center mx-auto">
          <div className="mb-5">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Sign up to our newsletter
            </h2>
          </div>
          <h1 className="text-gray-600">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </h1>
          <form>
            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full">
                <label htmlFor="hero-input" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter your email"
                />
              </div>
              <a
                className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white  bg-violet-400 hover:bg-violet-800"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </form>
          <p className="mt-1 text-gray-500 ml-2 text-start text-sm">
            We care about the protection of your data.{" "}
            <span className="font-medium">Read our Privacy Policy.</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export { Hero, FeaturedBlogs, Ad };
