import React from 'react'
const SummaryCard = ({ id, title, price, amount, image, incAddCart }) => {
  const addCartfunc = () => {
    console.log("this is id",id);
   
    incAddCart(id);
  }
  return (
    <div
      
      className="summary-card flex items-center justify-between mb-4"
    >
      <div className="summar-card-image-container flex justify-center items-center rounded-md">
        <img className="w-32 h-32" src={image} alt={image} />
      </div>
      <div className="summar-card-info flex-1 p-4 flex flex-col items-start">
        <div>
          <p className="text-lg">{title}</p>
        </div>
        <div>
          <p className="font-bold">${price}</p>
        </div>
      </div>
      <div className="summar-card-data flex flex-col justify-center items-center">
        <div className="flex">
          <div className="w-8 h-8 bg-[#000] cursor-pointer flex items-center justify-center rounded-lg">
            <p className="text-white cursor-pointer">-</p>
          </div>
          <div className="w-8 h-8 flex justify-center items-center">
            <p className="font-bold">{amount}</p>
          </div>
          <div
            onClick={addCartfunc}
            className="w-8 h-8 bg-[#000] cursor-pointer flex items-center justify-center rounded-lg"
          >
            <p className="text-white">+</p>
          </div>
        </div>
        <div className="mt-2">
          <button className="bg-[#000] text-white px-4 py-1 rounded-md">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard
