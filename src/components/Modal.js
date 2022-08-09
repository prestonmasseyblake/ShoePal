import React from 'react'
import "./Modal.css";
import { MdClose } from "react-icons/md";
import ShoePalLogo from "../assets/shoePalLogo.png"
import SPLogo from "../assets/splogo.png"
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
const Modal = ({ toggleModal }) => {
  return (
    <div className=" flex  justify-center items-center modal-background p-4">
      <div className="bg-[#FFF] w-full lg:w-2/4  rounded-md p-4">
        <div className="w-full flex justify-between ">
        <div className="flex justify-center">
          <img src={SPLogo} className="w-24" />
        </div>
          <IconContext.Provider
            value={{
              color: "white",
              size: "40px",
              className: "global-class-name",
            }}
          >
            <div
              onClick={toggleModal}
              className="w-12 h-12 bg-[#000] flex justify-center items-center rounded-md cursor-pointer"
            >
              <MdClose />
            </div>
          </IconContext.Provider>
        </div>
        <p className="text-gray-600 font-bold text-lg my-4">
          This a checkout demo
        </p>
        <p className="text-black font-bold">
          Please use fake data and no data you enter will be sold or used in a
          commercial setting. For the credit card number you can use any number.
          This is a demo project and is still in beta. Images are property of
          there respected owners and pricing and naming is not necessarily true
          or accurate.
        </p>
        <div className="w-full flex justify-start my-4">
          <button className="bg-[#FFF] text-black shadow-md mx-2 px-2 py-2 flex items-center justify-center rounded-md font-bold">
                        <FaGithub/>
                      View On Github
          </button>
                  <button className="bg-[#FFF] flex shadow-md justify-center items-center text-black mx-2 px-2 py-2 rounded-md font-bold">
                      <MdWeb/>
            Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal
