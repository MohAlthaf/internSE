import React from "react";
import { Icon } from "@iconify/react";
import img1 from "../assets/images/Image - 1.png";

const FeastoFeature = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-4 lg:px-20 py-10 bg-white">
      <div className="relative w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          src={img1}
          alt="Feasto"
          className="w-20px h-auto"
        />
        <div className="absolute top-0 left-0 mt-4 ml-4 bg-white p-2 rounded shadow">
          <p className="text-red-600 font-semibold">Orders received</p>
          <p className="text-black">124/day</p>
        </div>
        <div className="absolute top-0 right-0 mt-4 mr-4 bg-white p-2 rounded shadow">
          <p className="text-green-600 font-semibold">Deliveries completed</p>
          <p className="text-black">85/day</p>
        </div>
        <div className="absolute bottom-0 left-0 mb-4 ml-4 bg-white p-2 rounded shadow">
          <p className="text-yellow-600 font-semibold">Total customers</p>
          <p className="text-black">10,456</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
        <h2 className="text-red-500 uppercase mb-2">Explore Feasto</h2>
        <h1 className="text-4xl font-bold mb-6">
          How <span className="text-red-500">Feasto</span> help your business
          grow?
        </h1>
        <ul className="space-y-6">
          <li className="flex items-start">
            <Icon
              icon="material-symbols:timer-outline"
              className="text-red-500 w-8 h-8 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Launch your store in 3 mins
              </h3>
              <p>
                Easily launch your online store without coding and saving time.
                Just choose a domain, add products, and start selling. It’s that
                simple!
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <Icon
              icon="material-symbols:speed-outline"
              className="text-red-500 w-8 h-8 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Faster response time
              </h3>
              <p>
                Quickly respond to customer queries and orders through WhatsApp,
                boosting customer satisfaction and loyalty.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <Icon
              icon="material-symbols:visibility-outline"
              className="text-red-500 w-8 h-8 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Increased visibility
              </h3>
              <p>
                Expand your reach beyond physical locations with an online
                storefront that’s accessible 24/7.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <Icon
              icon="material-symbols:settings-outline"
              className="text-red-500 w-8 h-8 mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Ultimate control over your storefront
              </h3>
              <p>
                You can set your own opening hours, define delivery zones and
                charges, select payment methods and handle offers effortlessly.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeastoFeature;
