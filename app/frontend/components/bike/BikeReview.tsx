import React from "react";
import { Review } from "@/utils/interfaces";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BikeReview = ({ comment, rating, user }: Review) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={user.photoUrl || `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`}
            alt={`Photo de ${user.firstName} ${user.lastName}`}
            className="h-20 w-20 rounded-full"
          />
          <p className="m-0 font-bold">{user.firstName}</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={i < rating ? "text-yellow-500" : ""}
            />
          ))}
        </div>
      </div>
      <div className="w-full">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default BikeReview;
