import React, { useState } from "react";
import Vector from "../assets/images/Vector.png";
import mobile1 from "../assets/images/Feasto website resources 1.png";
import mobile2 from "../assets/images/Feasto website resources2.png";
import img1 from "../assets/images/Image - 1.png";
import img2 from "../assets/images/Image - 4.png";
import img3 from "../assets/images/Image - 3.png";
import img4 from "../assets/images/Image - 2.png";
import deliveryMan from "../assets/images/deliveryMan.jpg";
import restaurantAndBusiness from "../assets/images/restaurant-business.jpeg";
import groceryImg from "../assets/images/Image.png";
import retailStoreImg from "../assets/images/retailStore.jpeg";
import customergrowth from "../assets/images/customergrowth.jpeg";
import { Icon } from "@iconify/react";
import rocketLaunchOutline from "@iconify-icons/material-symbols/rocket-launch-outline-rounded";
import Card from "./Card";
import Accordion from "./Accordion";
import FeastoFeature from "./FeastoFeature";
import Carosal from "./Carosal";

const LandingPage = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      {/* <FeastoFeature/> */}
      {/* landing page */}
      <div className="flex flex-col items-center justify-center text-center py-16">
        <p className="text-red-600 md:font-medium md:text-lg mb-4 text-sm">
          Seamless Setup, Quick, Easy and No-Code
        </p>
        <img src="" alt="" />
        <h1 className="md:text-6xl  text-4xl font-black text-gray-800 md:eading-snug mb-8 p-2 md:w-2/3">
          Build Website for your Business within{" "}
          <span
            className="relative"
            style={{
              backgroundImage: `url(${Vector})`,
              backgroundPosition: "bottom left",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              whiteSpace: "nowrap",
            }}
          >
            3 Minutes
          </span>
        </h1>

        <div className="md:flex md:space-x-4 w-full p-4 justify-center">
          <div className="group relative">
            <button className="w-full bg-main-color text-white border border-main-color px-8 py-3 rounded shadow-sm font-semibold mb-4 md:mb-0 md:w-auto flex items-center justify-center transition-all duration-300 text-base">
              <div className="flex items-center transition-all duration-300 relative">
                <span className="transform transition-transform duration-300 group-hover:-translate-x-2">
                  Build your website now
                </span>
                <span className="transform transition-transform duration-300 absolute right-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
                  <Icon
                    icon="tabler:arrow-narrow-right"
                    width="24"
                    height="24"
                  />
                </span>
              </div>
            </button>
          </div>

          <button className="text-gray-800 border border-gray-300 px-6 py-3 rounded shadow-sm font-semibold w-full md:w-auto">
            Get a demo
          </button>
        </div>
      </div>

      {/* mobiles and blur part */}
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4 px-6 md:px-24 ">
        <div className="border-none">
          <img src={mobile1} alt="" />
        </div>
        <div className="blur-2xl bg-gray-600 opacity-25"></div>
        <div className="border-none">
          <img src={mobile2} alt="" />
        </div>
        <div className="blur-2xl bg-gray-600 opacity-25"></div>
      </div>

      {/* carosal part */}
      <div className="my-12">
        <Carosal />
      </div>
      {/* multiple images part */}
      <div className="flex flex-cols-2 md:flex-cols-2 px-4 md:px-20 flex-wrap">
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className=" relative h-[700px] bg-red-500">
            <img
              src={img1}
              alt=""
              className="relative right-[-70px] md:w-[243px] w-[150px]"
            />
            <div className="absolute top-[-30px] right-48 bg-white p-2 rounded-lg drop-shadow">
              <div className="flex flex-row items-center">
                <div className="mr-2 bg-red-100 rounded-lg p-1">
                  <Icon
                    icon="solar:graph-up-linear"
                    width="28"
                    height="28"
                    className="text-main-color"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs">Orders received</span>
                  <span className="font-bold text-xl text-red-500">
                    124/day
                  </span>
                </div>
              </div>
            </div>

            <img
              src={deliveryMan}
              alt=""
              className="relative md:w-[349px] w-[190px] rounded bottom-40"
              style={{ marginLeft: "auto" }}
            />
            <img
              src={customergrowth}
              alt=""
              className="relative w-[335px] h-[230px] rounded-lg"
              style={{
                top: "-20rem",
                marginLeft: "auto",
                marginRight: "16rem",
              }}
            />
            <img
              src={img4}
              alt=""
              className="relative w-[321px]   border-b-1 border-black"
              style={{
                top: "-30rem",

                // marginBottom: "auto",
                border: "1px solid black",

                marginLeft: "auto",
              }}
            />

            <div className="absolute top-[485px] left-36 bg-white p-2 rounded-lg drop-shadow">
              <div className="flex flex-row items-center">
                <div className="mr-2 bg-yellow-100 rounded-lg p-1">
                  <Icon
                    icon="solar:chart-2-linear"
                    width="28"
                    height="28"
                    className="text-yellow-600"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs">Total customers</span>
                  <span className="font-bold text-xl">10,456</span>
                </div>
              </div>
            </div>
            <div className="absolute top-[240px] right-0 bg-white p-2 rounded-lg drop-shadow">
              <div className="flex flex-row items-center">
                <div className="mr-2 bg-green-100 rounded-lg p-1">
                  <Icon
                    icon="solar:archive-check-linear"
                    width="28"
                    height="28"
                    className="text-green-600"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs">Deliveries completed</span>
                  <span className="font-bold text-xl">85/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="  mt-8 md:my-4 md:ml-12">
            <p className="text-main-color md:text-lg text-sm font-medium mb-2">
              EXPLORE FEASTO
            </p>
            <h1 className="md:text-5xl text-4xl font-black mt-2">
              How <span className="text-main-color">FEASTO</span> help your
              business grow?
            </h1>
            <div className="mt-8 px-5">
              <div className=" items-start mb-6">
                {/* <div className="flex  p-2 rounded-full mr-4">
                            <Icon icon={rocketLaunchOutline} className="w-8 h-8 mx-4 text-main-color" />
                            <h3 className="font-bold text-lg ">Launch your store in 3 mins</h3>
                        </div> */}
                <div className="flex items-center justify-start  mr-4 mb-2">
                  <Icon
                    icon={rocketLaunchOutline}
                    className="w-8 h-8 m-1 text-main-color"
                  />
                  <h3 className="font-bold text-lg ml-4">
                    Launch your store in 3 mins
                  </h3>
                </div>

                <div>
                  <p className="text-gray-600 text-md">
                    Easily launch your online store without coding and saving
                    time. Just choose a domain, add products, and start selling.
                    It’s that simple!
                  </p>
                </div>
              </div>
              <div className=" items-start mb-6">
                <div className="flex items-center justify-start  mr-4 mb-2">
                  <Icon
                    icon="tabler:message-2-bolt"
                    className="w-8 h-8 m-1 text-main-color"
                  />
                  <h3 className="font-bold text-lg  ml-4">
                    Faster response time
                  </h3>
                </div>

                <div>
                  <p className="text-gray-600 text-md">
                    Quickly respond to customer queries and orders through
                    WhatsApp, boosting customer satisfaction and loyalty.
                  </p>
                </div>
              </div>

              <div className=" items-start mb-6">
                <div className="flex items-center justify-start  mr-4 mb-2">
                  <Icon
                    icon="fluent:arrow-growth-24-filled"
                    width="24"
                    className="w-8 h-8 m-1 text-main-color"
                  />
                  <h3 className="font-bold text-lg  ml-4">
                    Increased visibility
                  </h3>
                </div>

                <div>
                  <p className="text-gray-600 text-md">
                    Expand your reach beyond physical locations with an online
                    storefront that’s accessible 24/7.
                  </p>
                </div>
              </div>

              <div className=" items-start mb-6">
                <div className="flex items-center justify-start  mr-4 mb-2">
                  <Icon
                    icon="mdi:controller-outline"
                    width="24"
                    className="w-8 h-8 m-1 text-main-color"
                  />
                  <h3 className="font-bold text-lg text-start ml-4">
                    Ultimate control over your storefront
                  </h3>
                </div>

                <div>
                  <p className="text-gray-600 text-md">
                    You can set your own opening hours, define delivery zones
                    and charges, select payment methods, and handle offers
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-cols-2 md:flex-cols-2 divide-x px-4 md:px-20 flex-wrap">
  <div className="w-1/2 flex justify-center items-center relative">
    <div className="bg-gray-500 relative flex flex-wrap justify-center items-center">
      <img src={img1} alt="" className="relative w-[243px]" style={{ right: "-96px" }} />
      <div className="relative flex flex-col items-center">
        <img src={img2} alt="" className="relative w-[335px]" style={{ top: "-10rem", marginLeft: "auto", marginRight: "16rem" }} />
        <img src={img3} alt="" className="relative w-[349px]" style={{ bottom: "18rem" ,marginLeft: "auto"}} />
        <img src={img4} alt="" className="relative w-[321px] border-b-1 border-black" style={{ top: "-27rem", left: "220px", border: "1px solid black" }} />
      </div>
    </div>
  </div>
  <div className="w-1/2">sdf</div>
</div> */}

      {/* <div className="flex h-screen">
      <div className="w-1/2 bg-blue-500 p-4">
        <h1 className="text-white">Left Side</h1>
        <p className="text-white">Content for the left side of the page.</p>
      </div>
      <div className="w-1/2 bg-green-500 p-4">
        <h1 className="text-white">Right Side</h1>
        <p className="text-white">Content for the right side of the page.</p>
      </div>
    </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-24">
        {/* <div className="bg-gray-500 relative mx-auto">
        <div className=" justify-center items-center">
            <img src={img1} alt="" className="relative w-[243px] right-[-96px]" />
            <img src={img2} alt="" className="relative w-[335px]" style={{ top: '-10rem', right: '-16rem' }} />
            <img src={img3} alt="" className="relative w-[349px]" style={{ top: '-18rem' }} />
            <img src={img4} alt="" className="relative w-[321px] border-black left-[220px]" style={{ top: '-27rem', border: '1px solid black' }} />
        </div>
        </div> */}
      </div>

      <div className="px-6 md:px-24 pb-12">
        <div className="">
          <div className="flex flex-col items-center justify-center text-center md:p-16 ">
            <p className="text-red-600 font-medium md:mb-4">STATER TEMPLATES</p>
            <h1 className="md:text-5xl text-4xl font-black text-gray-800 leading-snug md:w-3/4 p-4">
              Kickstart your online stores with amazing templates
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
          <div className="Restaurants">
            <Card
              imageSrc={restaurantAndBusiness}
              title="Restaurants & Food Businesses"
              description="Build an online store showcasing dishes with eye-catching images & easily update prices with our templates."
              linkText="Get started now"
              linkHref="#"
            />
          </div>
          <div className="GroceryStore">
            <Card
              imageSrc={groceryImg}
              title="Grocery Store"
              description="Get your grocery store online with a user-friendly design that enhances your customers' shopping experience."
              linkText="Get started now"
              linkHref="#"
            />
          </div>
          <div className="retail">
            <Card
              imageSrc={retailStoreImg}
              title="Retail Store"
              description="Create a stunning showcase for your latest collections with our stylish templates and user-friendly interface."
              linkText="Get started now"
              linkHref="#"
            />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-24 py-24">
        <div className="flex flex-col md:flex-row justify-between mx-auto items-center mb-12">
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <p className="text-red-600 font-medium mb-4 text-sm">
              PRICING & PLANS
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 leading-snug mb-4">
              Perfect Balance
              <br />
              of Features & Affordability
            </h1>
            <p className="text-gray-600 text-lg">
              Feasto simplifies creating a stunning, professional web store with
              its user-friendly templates and quick setup. Our powerful features
              ensure a seamless experience.
            </p>
          </div>
          <div className="flex-grow mx-4 md:mx-0"></div>
          <div className="flex md:flex-row items-center">
            <p
              className={`p-2 font-semibold ${
                isOn ? "text-gray-500" : "text-gray-900"
              }`}
            >
              Monthly
            </p>
            <div
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                isOn ? "bg-red-500" : "bg-gray-300"
              }`}
              onClick={toggleSwitch}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  isOn ? "translate-x-6" : ""
                }`}
              ></div>
            </div>
            <p
              className={`p-2 font-semibold ${
                isOn ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Annually
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-12">
          <div className="border-gray-200 border rounded-lg p-8 shadow-lg w-full md:w-1/3 text-center">
            <p className="text-main-color font-semibold mb-4">FREE</p>
            <p className="text-4xl font-bold mb-4">$0</p>
            <button className=" text-gray-700 border-gray-300 border shadow-sm font-bold py-4 px-4 rounded-lg mb-4 w-full hover:border-main-color hover:text-main-color">
              Start for FREE
            </button>
            <ul className="text-gray-900 text-base">
              <li className="flex items-center mb-2">
                <span className="text-red-600 mr-2">
                  {" "}
                  <Icon
                    icon="flowbite:check-outline"
                    width="1.2em"
                    height="1.2em"
                  />
                </span>
                Unlimited orders
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-600 mr-2">
                  <Icon
                    icon="flowbite:check-outline"
                    width="1.2em"
                    height="1.2em"
                  />
                </span>
                Unlimited products listing
              </li>
              <li className="flex items-center mb-2">
                <span className="text-red-600 mr-2">
                  <Icon
                    icon="flowbite:check-outline"
                    width="1.2em"
                    height="1.2em"
                  />
                </span>
                Unlimited offer creation
              </li>
              <li className="flex items-center mb-2 line-through text-gray-400">
                <span className="text-gray-400 mr-2">
                  <Icon icon="ic:round-close" width="1.2em" height="1.2em" />
                </span>
                Monthly 2 hrs marketing support
              </li>
              <li className="flex items-center mb-2 line-through  text-gray-400">
                <span className="text-gray-400 mr-2">
                  <Icon icon="ic:round-close" width="1.2em" height="1.2em" />
                </span>
                Premium customer care
              </li>
              <li className="flex items-center mb-2 line-through  text-gray-400">
                <span className="text-gray-400 mr-2">
                  <Icon icon="ic:round-close" width="1.2em" height="1.2em" />
                </span>
                Custom domain
              </li>
            </ul>
          </div>
          <div className="rounded-lg shadow-2xl w-full md:w-1/3 text-center border-main-color border-2">
            <div className="">
              <p className="text-white font-semibold p-2 bg-main-color rounded-t text-lg">
                Save 25%
              </p>
            </div>
            <div className="p-8">
              <p className="text-main-color font-semibold mb-4">
                PRO - Annual plan
              </p>
              <p className="text-4xl font-bold mb-4"></p>
              <p className="text-gray-400 line-through mb-2 font-semibold text-2xl">
                $9.99
              </p>
              <p className="text-4xl font-bold mb-4">$7.5</p>
              <p className="text-gray-600 mb-4">Monthly, Billed annually</p>
              <button className=" text-white border-main-color bg-main-color border shadow-sm font-bold py-4 px-4 rounded-lg mb-4 w-full text-base hover:bg-white hover:text-main-color">
                Get 14 days free trial
              </button>
              <ul className="text-gray-900 text-base">
                <li className="flex items-center mb-2">
                  <span className="text-red-600 mr-2">
                    <Icon
                      icon="flowbite:check-outline"
                      width="1.2em"
                      height="1.2em"
                    />
                  </span>
                  Unlimited orders
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-red-600 mr-2">
                    <Icon
                      icon="flowbite:check-outline"
                      width="1.2em"
                      height="1.2em"
                    />
                  </span>
                  Unlimited products listing
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-red-600 mr-2">
                    <Icon
                      icon="flowbite:check-outline"
                      width="1.2em"
                      height="1.2em"
                    />
                  </span>
                  Unlimited offer creation
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-red-600 mr-2">
                    <Icon
                      icon="flowbite:check-outline"
                      width="1.2em"
                      height="1.2em"
                    />
                  </span>
                  Monthly 2 hrs marketing support
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-red-600 mr-2">
                    <Icon
                      icon="flowbite:check-outline"
                      width="1.2em"
                      height="1.2em"
                    />
                  </span>
                  Premium customer care
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-red-600 mr-2">
                    <Icon
                      icon="flowbite:check-outline"
                      width="1.2em"
                      height="1.2em"
                    />
                  </span>
                  Custom domain
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-24 pb-12">
        <div className="">
          <div className="flex flex-col items-center justify-center text-center md:p-16 ">
            <p className="text-red-600 font-medium md:text-lg text-sm mb-4">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h1 className="md:text-5xl text-4xl font-black text-gray-800 leading-snug md:w-3/5">
              All you need to know about{" "}
              <span className="text-main-color">FEASTO</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-40 pb-12">
        <Accordion />
      </div>

      <div className="px-4 md:px-40 pb-12">
        <div className="border border-gray-300 rounded-lg bg-gray-50">
          <div className="flex flex-col items-center justify-center text-center md:p-12 py-6 px-2">
            <div className="md:w-3/5 mb-12">
              <h1 className="md:text-4xl text-2xl font-black text-gray-800 leading-snug mb-4">
                Still have some questions?
              </h1>
              <p className="text-gray-600 text-lg">
                Can’t find the answer that you’re looking for? Feel free to
                reach out to our team for more info.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-around px-4 py-4 md:px-12">
              <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2">
                <div className="bg-main-color w-16 h-16 rounded-md flex items-center justify-center md:mr-4 mb-4 md:mb-0">
                  <Icon
                    icon="akar-icons:open-envelope"
                    width="28"
                    height="28"
                    className="text-white "
                  />
                </div>
                <div>
                  <p className="text-main-color text-lg mb-2">Email address</p>
                  <p className="text-gray-800 font-semibold text-xl">
                    hello@feasto.io
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2 md:border-x-4">
                <div className="bg-main-color w-16 h-16 rounded-md flex items-center justify-center md:mr-4 mb-4 md:mb-0">
                  <Icon
                    icon="akar-icons:phone"
                    width="28"
                    height="28"
                    className="text-white "
                  />
                </div>
                <div>
                  <p className="text-main-color text-lg mb-2">Get in touch</p>
                  <p className="text-gray-800 font-semibold text-xl">
                    +94776044021
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2">
                <div className="bg-main-color w-16 h-16 rounded-md flex items-center justify-center md:mr-4 mb-2 md:mb-0">
                  <Icon
                    icon="akar-icons:location"
                    width="28"
                    height="28"
                    className="text-white "
                  />
                </div>
                <div>
                  <p className="text-main-color text-lg mb-2">Location</p>
                  <p className="text-gray-800 font-semibold text-xl">
                    Jaffna,SriLanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
