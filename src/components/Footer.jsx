import React from "react";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className="">
      <footer className="bg-white text-gray-800 border-t">
        <div className="container mx-auto px-6 md:px-24 py-12">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0 mx-auto md:pr-8">
              <p className="text-lg">
                Feasto simplifies creating a stunning, professional web store
                with its user-friendly templates and quick setup.
              </p>
              <div className="flex space-x-4 my-8">
                <div className="flex rounded-full border w-10 h-10 justify-center items-center text-gray-800 hover:text-gray-600">
                  <Icon icon="ri:linkedin-fill" width="28" height="28" />
                </div>
                <div className="flex rounded-full border w-10 h-10 justify-center items-center text-white hover:text-gray-600 bg-main-color">
                  <Icon icon="ri:facebook-fill" width="28" height="28" />
                </div>
                <div className="flex rounded-full border w-10 h-10 justify-center items-center text-gray-900 hover:text-gray-600">
                  <Icon icon="hugeicons:instagram" width="28" height="28" />
                </div>
                <div className="flex rounded-full border w-10 h-10 justify-center items-center text-gray-900 hover:text-gray-600">
                  <Icon icon="ic:baseline-whatsapp" width="28" height="28" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-wrap ">
              <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
                <h5 className="text-xl font-semibold mb-8">Company</h5>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      About us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Contact us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Terms & service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
                <h5 className="text-lg font-bold mb-8">Templates</h5>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Restaurants & Food Stalls
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Retail stores
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Grocery stores
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
                <h5 className="text-lg font-bold mb-8">Resources</h5>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Blogs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Knowledge base
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Help center
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/4 mb-6 md:mb-0">
                <h5 className="text-lg font-bold mb-8">Features</h5>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      WhatsApp order management
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Digital storefront
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Insightful analytics
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:text-gray-600">
                      Effortless offer management
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="  mt-8 px-4 md:px-24 flex md:flex-row flex-col justify-between items-center  text-gray-600 bg-main-color text-base">
          <p className="text-white py-4">
            Designed & Developed with <span className="text-white"> ♥ </span>
            by{" "}
            <span>
              <a href="https://cogntix.com" className="underline">
                Cogntix
              </a>
            </span>
          </p>
          <p className="text-white py-4 ">© 2022 Feasto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
