import React from 'react'
import SummaryCard from './SummaryCard'
import CautionCard from "../../assets/caution.png";
const SummaryDisplay = ({ incAddCart, cartArr }) => {
    
  return (
    <div className="border border-[#555] h-96 max-h-96  w-full rounded-lg my-4 p-4 overflow-scroll">
      {cartArr.length > 0 ? (
        <>
          {cartArr.map((item) => {
            console.log("this is the item:", item);
            return (
              <div key={item.id}>
                <SummaryCard
                  incAddCart={incAddCart}
                  image={item.item.image}
                  id={item.item.id}
                  title={item.item.title}
                  price={item.item.price}
                  amount={item.amount}
                />
              </div>
            );
          })}{" "}
        </>
      ) : (
        <>
            <div className="h-full flex flex-col justify-center items-center">
              <div>
            <img className="h-32 w-32" src={CautionCard} />
              </div>
              <div className="mt-4">
            <p className="font-bold text-gray-600">No Shoes In Cart Add Shoes To Cart Above</p>
              </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SummaryDisplay
