import React from "react";

interface KeySellingPointProps {
  id: number;
  title: string;
  content: string;
  image: string;
  alt: string;
}

const KeySellingPoint = ({
  id,
  title,
  content,
  image,
  alt,
}: KeySellingPointProps): JSX.Element => {
  const wrapperClasses = `flex flex-col ${
    id % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
  } items-center justify-between mt-8 gap-4`;

  return (
    <div className={wrapperClasses}>
      <div className="w-full sm:w-1/2">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={image} alt={alt} className="w-full sm:w-2/5" />
    </div>
  );
};

export default KeySellingPoint;
