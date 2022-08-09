import React, {useState, useEffect} from 'react'
import ShippingCard from './ShippingCard'

const SummaryShipping = ({pretotal, setPreTotal}) => {
    const [local, setLocal] = useState(true);
    const toggleFunc = () => {
        if (local) {
            setPreTotal(pretotal + 12.99);
        }
        else {
            setPreTotal(pretotal - 12.99);
        }

        setLocal(!local);

    }
    return (
      <div>
        <p className="text-xl font-bold mb-4">Available Shipping Methods</p>
        <ShippingCard
          toggleIcon={true}
          title="Fedex Delivery"
          delivery="Delivery: 2-3 work days"
          price="Free"
          toggle={local ? true : false}
          toggleFunc={toggleFunc}
        />
        <p className="text-l text-gray-400 my-4 font-bold">
          Available international shipping
        </p>
        <ShippingCard
          toggleIcon={false}
          title="DHL Delivery"
          delivery="Delivery: 5-7 work days"
          price="$12.99"
          toggle={local ? false : true}
          toggleFunc={toggleFunc}
        />
      </div>
    );
}

export default SummaryShipping
