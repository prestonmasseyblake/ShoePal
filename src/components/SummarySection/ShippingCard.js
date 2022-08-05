import React from 'react'
import FedexLogo from "../../assets/Fedex-Express-Logo.png"
const ShippingCard = ({ title, toggleFunc, delivery, logo, price, toggle }) => {
    const checkToggleClick = () => {
        if (!toggle) {
            toggleFunc()
        }
    }
    
    return (
      <div
        onClick={checkToggleClick}
        className={`bg-[#F8FAFB] flex items-center px-8 py-6 rounded-md shadow-md ${
          toggle ? "border border-black" : ""
        } cursor-pointer`}
      >
        <div className="logo-div">
          <img className="h-4" src={FedexLogo} alt={FedexLogo} />
        </div>
        <div className="info-div flex-1 ml-4">
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-gray-500">{delivery}</p>
          </div>
        </div>
        <div className="cta-div flex items-center">
          <div>
            <p className="font-bold">{price}</p>
          </div>
          <div className="ml-2 rounded-full w-4 h-4 border-2 border-black flex justify-center items-center">
            {toggle ? (
              <div className="w-2 h-2 bg-[#000] rounded-full"></div>
            ) : null}
          </div>
        </div>
      </div>
    );
}

export default ShippingCard
