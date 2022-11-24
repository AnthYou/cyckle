import React from "react";

interface KeySellingPointProps {
  id: number;
  title: string;
  content: string;
  image: string;
  alt: string
}

const KeySellingPoint = ({
  id,
  title,
  content,
  image,
  alt,
}: KeySellingPointProps): JSX.Element => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={image} alt={alt} />
    </div>
  );
};

export default KeySellingPoint;
