import React from 'react'
import "./Modal.css";
import { MdClose } from "react-icons/md";
import ShoePalLogo from "../assets/shoePalLogo.png"
import { IconContext } from "react-icons";
const Modal = ({ toggleModal }) => {
  return (
    <div className=" flex  justify-center items-center modal-background p-4">
      <div className="bg-[#FFF] w-full lg:w-2/4  rounded-md p-4">
        <div className="w-full flex justify-center mt-16">
          <IconContext.Provider
            value={{
              color: "white",
              size: "50px",
              className: "global-class-name",
            }}
          >
            <div
              onClick={toggleModal}
              className="w-16 h-16 bg-[#000] flex justify-center items-center rounded-md cursor-pointer"
            >
              <MdClose />
            </div>
          </IconContext.Provider>
        </div>
        <div className="flex justify-center">
          <img src={ShoePalLogo} className="w-64" />
        </div>
        <p className="text-black font-bold text-lg my-2">
          This a checkout demo
        </p>
        <p className="text-black font-bold">
          Please use fake data and no data you enter will be sold or used in a
          commercial setting. For the credit card number you can use any number.
          This is a demo project and is still in beta. Images are property of
          there respected owners and pricing and naming is not necessarily true
          or accurate.
        </p>
        <div className="w-full flex justify-center my-4">
          <button className="bg-[#000] text-white mx-2 px-2 py-2 rounded-md font-bold">
            View On Github
          </button>
          <button className="bg-[#000] text-white mx-2 px-2 py-2 rounded-md font-bold">
            Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal
