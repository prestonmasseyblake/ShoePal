import React from 'react'

const CardSection = ({ pretotal }) => {
    const tax = () => {
        let taxVal = .0887 * pretotal;
        return taxVal;
    }
    const total = () => {
        let taxVal = 0.0887 * pretotal;
        return taxVal + pretotal;
    }
    return (
      <div>
        <div className="card-section-email-container">
          <p className="mb-2 mt-4">Email Address</p>
          <div className=" w-full md:w-96 h-12 bg-[#FFF] rounded-md shadow-sm border border-gray-400 flex item-center justify-between">
            <div className="h-full p-4 flex justify-center items-center">
              <p>@</p>
            </div>
            <div className="flex-1 ">
              <input
                className="h-full w-full focus:outline-0"
                placeholder="Email Address"
              />
            </div>
            <div className="h-full p-4 flex justify-center items-center">X</div>
          </div>
        </div>
        <div className="card-section-payment">
          <button className="mt-8 md:w-96 w-full h-12 bg-[#000] rounded-md text-white font-bold">
            {" "}
            AI Card Autofill
          </button>
          <div className="my-4 flex items-center md:w-96">
            <span className="w-full h-px bg-[#000]" />
            <p className="mx-4 font-bold">or</p>
            <span className="w-full h-px bg-[#000]" />
          </div>
          <div className="card-section-payment">
            <p className="text-lg font-bold">Card Detail</p>
            <div className="md:w-96 mt-2 mb-4 h-12 bg-[#FFF] rounded-md shadow-sm border border-gray-400 flex item-center justify-between">
              <div className="h-full p-4 flex justify-center items-center">
                <p>C</p>
              </div>
              <div className="flex-1">
                <input
                  className="h-full w-full focus:outline-0"
                  placeholder="Card Number"
                />
              </div>
              <div className="flex-2 ">
                <input
                  className="h-full w-8 focus:outline-0"
                  placeholder="MM/YY"
                />
              </div>
              <div className="h-full p-4 flex justify-center items-center">
                <input className="focus:outline-0" placeholder="CVC" />
              </div>
            </div>
          </div>
        </div>
        <div className="price-total-container md:w-96 mt-8">
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>${pretotal}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Tax (8.87%)</p>
            <p>${tax()}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>${total()}</p>
          </div>
          <div>
            <button className="w-full md:w-96 bg-[#000] h-16 mt-8 rounded-md text-white font-bold">
                        PAY ${total()}
            </button>
          </div>
        </div>
      </div>
    );
}

export default CardSection
