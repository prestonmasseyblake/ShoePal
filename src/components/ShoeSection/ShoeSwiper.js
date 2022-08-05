import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ShoeCard from "./ShoeCard";
import f from "../../assets/BLAZER-MID-PHOTO.png"
const shoeArrr = [
  {
    name: "Blazer Low",
    color: "#FFE06B",
    price: "129.99",
    image: "../../assets/BLAZER-MID-PHOTO.png",
  },
  {
    name: "AIR FLYNIT",
    color: "#555555",
    price: "169.99",
    image: "../../assets/AIR-MAX-FLYNIT.png",
  },
  {
    name: "FLYNIT",
    color: "#E4D2F0",
    price: "169.99",
    image: "../../assets/AIR-MAX-FLYNIT.png",
  },
  {
    name: "Ni FLYNIT",
    color: "#FFE06B",
    price: "169.99",
    image: "../../assets/AIR-MAX-FLYNIT.png",
  },
  {
    name: "Ni FLYNIT",
    color: "#FFE06B",
    price: "169.99",
    image: "../../assets/AIR-MAX-FLYNIT.png",
  },
];

const ShoeSwiper = ({ addCart, shoeArr }) => {
    
    return (
      <div>
        <Swiper
          className=""
          autoHeight={true}
          spaceBetween={0}
          id="customSwiper"
          breakpoints={{
            // when window width is >= 640px
            200: {
              width: 200,
              slidesPerView: 2,
            },
            420: {
              width: 420,
              slidesPerView: 2,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1080: {
              width: 1080,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {shoeArr.map((i) => {
            return (
              <SwiperSlide key={i.id}>
                <ShoeCard
                  Shoe={i}
                  addShoe={addCart}
                  name={i.title}
                  price={i.price}
                  image={i.image}
                  color={i.color}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
}

export default ShoeSwiper
