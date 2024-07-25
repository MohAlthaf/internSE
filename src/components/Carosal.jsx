import React, { useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import ".././index.css";
const logos = [
  {
    src: logo,
    alt: "feasto",
  },
  {
    src: logo,
    alt: "feasto",
  },
];

const Carousel = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      ul.nextSibling.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="relative font-inter antialiased flex flex-col justify-center h-32">
      <div className="w-full max-w-8xl mx-auto px-4 md:px-6 py-12 sm:py-24">
        <div className="text-center">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-8 animate-infinite-scroll"
            >
              {logos.map((logo, index) => (
                <li key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-64 no-max-width"
                  />{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
