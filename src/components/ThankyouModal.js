import React from 'react'
import "./ThankyouModal.css"
import { MdClose } from "react-icons/md";
import ShoePalLogo from "../assets/shoePalLogo.png";
import SPLogo from "../assets/splogo.png";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { AiFillShopping } from "react-icons/ai";

import { MdWeb } from "react-icons/md";
const ThankyouModal = () => {

    const shopAgain = () => {
        window.location.reload();
    }

    return (
      <div className=" flex  justify-center items-center modal-background p-4">
        <div className="bg-[#FFF] w-full lg:w-2/4  rounded-md p-4">
          <div className="w-full flex justify-center ">
            <div className="flex justify-center">
              <img src={SPLogo} className="w-24" />
            </div>
          </div>

          <p className="text-black font-bold text-center">
            Thank you your order has been processed. Thank you for using
            Shoepal.
          </p>
          <div className="w-full flex flex-col lg:flex-row justify-center my-4">
            <button
              onClick={shopAgain}
              className="bg-[#FFF] my-2 text-black shadow-md mx-2 px-2 py-2 flex items-center justify-center rounded-md font-bold"
            >
              <AiFillShopping />
              Shop Again
            </button>
            <a
              href="https://github.com/prestonmasseyblake/ShoePal"
              target="_blank"
              className="bg-[#FFF] my-2 text-black shadow-md mx-2 px-2 py-2 flex items-center justify-center rounded-md font-bold"
              rel="noreferrer"
            >
              <FaGithub />
              View On Github
            </a>
            <a
              href="https://www.prestonmblake.com/fullstack"
              target="_blank"
              className="bg-[#FFF] my-2 flex shadow-md justify-center items-center text-black mx-2 px-2 py-2 rounded-md font-bold"
              rel="noreferrer"
            >
              <MdWeb />
              Website
            </a>
          </div>
        </div>
      </div>
    );
}

export default ThankyouModal
