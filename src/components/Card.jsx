import React from "react";

const Card = ({ imageSrc, title, description, linkText, linkHref }) => {
  return (
    <div className="">
      <img
        src={imageSrc}
        alt={title}
        className="w-full rounded-lg h-[330px] object-cover mb-4"
      />
      <h3 className="font-bold text-lg text-gray-700 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-md mb-4">
        {description}
      </p>
      <a href={linkHref} className="font-semibold text-main-color text-sm">
        {linkText}
      </a>
    </div>
  );
};

export default Card;
