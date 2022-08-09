import React from 'react'
import SummaryDisplay from './SummaryDisplay'
import SummaryShipping from './SummaryShipping'

const SummaryContainer = ({
  incDecrCart,
  removeCart,
  incAddCart,
  pretotal,
  setPreTotal,
  cartArr,
}) => {
  return (
    <div className=" bg-[#FFFFFF] px-4 py-4 h-full">
      <h1 className="text-xl font-bold">Summary</h1>
      <SummaryDisplay
        incDecrCart={incDecrCart}
        removeCart={removeCart}
        incAddCart={incAddCart}
        cartArr={cartArr}
      />
      <SummaryShipping pretotal={pretotal} setPreTotal={setPreTotal} />
    </div>
  );
};

export default SummaryContainer
