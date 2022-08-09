import React from 'react'
import CardSection from "./CardSection"
const PaymentContainer = ({ toggleThankyou, pretotal }) => {
  return (
    <div className="w-full h-full bg-[#F8FAFB] p-4">
      <h1 className="text-xl font-bold">Payment Details</h1>
      <p className="text-gray-600 text-sm mt-2 italic">
        Complete your purchase item by providing your payment details order.
      </p>
      <CardSection toggleThankyou={toggleThankyou} pretotal={pretotal} />
    </div>
  );
};

export default PaymentContainer
