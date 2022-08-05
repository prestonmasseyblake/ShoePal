import React from 'react'
import CardSection from "./CardSection"
const PaymentContainer = ({pretotal}) => {
    return (
        <div className="w-full h-full bg-[#F5F5F5] p-4">
            <h1 className="text-xl font-bold">Payment Container</h1>
            <p>Complete your purchase item by providing your payment details order.</p>
            <CardSection pretotal={pretotal}/>
        </div>
    )
}

export default PaymentContainer
