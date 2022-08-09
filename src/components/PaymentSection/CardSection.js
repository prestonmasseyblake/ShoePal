import React, {useState} from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdPerson } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import Loader from "../Loader";
const CardSection = ({ toggleThankyou, pretotal }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [cardNum, setCardNum] = useState("");
  const [cardNumError, setCardNumError] = useState(false);
  const [cardDate, setCardDate] = useState("");
  const [cardPin, setCardPin] = useState("");
  const [holdername, setHoldername] = useState("");
  const [nameError, setNameError] = useState(false);
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const tax = () => {
    let taxVal = 0.0887 * pretotal;
    const result = taxVal.toFixed(2);
    return result;
  };
  const total = () => {
    let taxVal = 0.0887 * pretotal.toFixed(2);
    let returnVal = taxVal + pretotal;
    return returnVal.toFixed(2);
  };
  const submitForm = () => {
    console.log("few", email);
    if (
      email !== "" &&
      cardNum !== "" &&
      holdername !== "" &&
      address !== "" &&
      cardDate !== "" &&
      cardPin !== ""
    ) {
      console.log("submiting form");
      setEmailError(false);
      setCardNumError(false);
      setNameError(false);
      setAddressError(false);
      setShowLoader(true);
      toggleThankyou();
    } else {
      console.log("this is email", email);
      if (email === "") {
        setEmailError(true);
      }
      if (cardNum === "" || cardDate === "" || cardPin === "") {
        setCardNumError(true);
      }
      if (holdername === "") {
        setNameError(true);
      }
      if (address === "") {
        setAddressError(true);
      }
    }
  };
  return (
    <div>
      <div className="card-section-email-container">
        <p className="mb-2 mt-4 font-bold">Email Address</p>
        <div
          className={` w-full md:w-96 h-12 bg-[#FFF] rounded-md shadow-sm border ${
            emailError ? "border-red-500" : "border-gray-400"
          } flex item-center justify-between`}
        >
          <div className="h-full p-4 flex justify-center items-center">
            <AiOutlineMail />
          </div>
          <div className="flex-1 ">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="h-full w-full focus:outline-0"
              placeholder="Email Address"
            />
          </div>
        </div>
        {emailError ? (
          <p class="text-red-500 text-xs italic mt-2">
            Please enter a valid email.
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="card-section-payment">
        <div className="card-section-payment">
          <p className="mb-2 mt-4 font-bold">Card Detail</p>
          <div
            className={`md:w-96 mt-2 mb-4 h-12 bg-[#FFF] rounded-md shadow-sm border ${
              cardNumError ? "border-red-500" : "border-gray-400"
            } flex item-center `}
          >
            <div className="h-full p-4 flex justify-center items-center">
              <BsCreditCard />
            </div>
            <div className="flex-1">
              <input
                onChange={(e) => {
                  setCardNum(e.target.value);
                }}
                className="h-full w-full focus:outline-0"
                placeholder="Card Number"
                maxlength="16"
              />
            </div>

            <div className=" w-16">
              <input
                onChange={(e) => {
                  setCardDate(e.target.value);
                }}
                className="h-full w-16 focus:outline-0 w-18"
                placeholder="MM/YY"
                maxlength="4"
              />
            </div>

            <div className="h-full px-4 flex justify-center items-center border-l-2 w-18">
              <input
                onChange={(e) => {
                  setCardPin(e.target.value);
                }}
                className="focus:outline-0 h-full w-8"
                placeholder="CVC"
                maxlength="3"
              />
            </div>
          </div>
          {cardNumError ? (
            <p class="text-red-500 text-xs italic mt-2">
              Please enter a valid card.
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="card-section-email-container">
        <p className="mb-2 mt-4 font-bold">Card Holder</p>
        <div
          className={` w-full md:w-96 h-12 bg-[#FFF] rounded-md shadow-sm border  ${
            nameError ? "border-red-500" : "border-gray-400"
          }  flex item-center justify-between`}
        >
          <div className="h-full p-4 flex justify-center items-center">
            <MdPerson />
          </div>
          <div className="flex-1 ">
            <input
              onChange={(e) => {
                setHoldername(e.target.value);
              }}
              className="h-full w-full focus:outline-0"
              placeholder="Card holder name"
            />
          </div>

          {/* <div className="h-full p-4 flex justify-center items-center">
              <AiFillCheckCircle value={{ backgroundColor: "green" }} />
            </div> */}
        </div>
      </div>
      {nameError ? (
        <p class="text-red-500 text-xs italic mt-2">
          Please enter a valid name.
        </p>
      ) : (
        <></>
      )}
      <div className="card-section-email-container">
        <p className="mb-2 mt-4 font-bold">Billing Address</p>

        <div
          className={` w-full md:w-96 h-12 bg-[#FFF] rounded-md shadow-sm border  ${
            addressError ? "border-red-500" : "border-gray-400"
          } flex item-center justify-between`}
        >
          <div className="h-full p-4 flex justify-center items-center">
            <MdOutlineLocationOn />
          </div>
          <div className="flex-1 ">
            <input
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="h-full w-full focus:outline-0"
              placeholder="Street Address"
            />
          </div>

          {/* <div className="h-full p-4 flex justify-center items-center">
              <AiFillCheckCircle value={{ backgroundColor: "green" }} />
            </div> */}
        </div>
        {addressError ? (
          <p class="text-red-500 text-xs italic mt-2">
            Please enter a valid address.
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="my-4 flex items-center md:w-96">
        <span className="w-full h-px bg-[#000]" />
      </div>
      <div className="price-total-container md:w-96 mt-8">
        <div className="flex justify-between mb-4">
          <p>Subtotal</p>
          <p>${pretotal.toFixed(2)}</p>
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
          <button
            onClick={submitForm}
            className="w-full md:w-96 bg-[#000] h-16 mt-8 rounded-md text-white font-bold flex justify-center items-center"
          >
            {showLoader ? <Loader /> : <>PAY ${total()}</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection
