import React from 'react'
import "./ShoeCard.css";
import shoeImage from "../../assets/BLAZER-MID-PHOTO.png"
const ShoeCard = ({ addShoe, Shoe, color, name, price, image }) => {
    const addShoeFunc = () => {
        addShoe(Shoe);
    }
    return (
      <div className="shoe-card">
        <div
          className={`shoe-card-image-container rounded-lg bg-[#${color}] flex justify-center align-middle`}
        >
          <img
            src={image}
            alt={image}
            className="shoe-card-image"
          />
        </div>
        <div className="shoe-card-info flex py-2 items-center justify-between w-full">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm font-bold">${price}</p>
        </div>
        <div className="shoe-card-cta w-full cursor-pointer">
          <button
            onClick={addShoeFunc}
            className="bg-[#000] rounded-md w-full text-white px-4 py-2"
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
}

export default ShoeCard
