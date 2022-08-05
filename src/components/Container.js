import React, {useState, useEffect} from 'react'
import PaymentContainer from './PaymentSection/PaymentContainer'
import ShoeContainer from './ShoeSection/ShoeContainer'
import SummaryContainer from './SummarySection/SummaryContainer'
import { Shoe } from "../utils/Shoe";
import "./Container.css"

const Container = () => {
    const [pretotal, setPreTotal] = useState(0.00);
  let shoesArray = [];
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    console.log("added item: ",item)
    setCart([...cart, {
      item: item,
      amount: 1
    }]);
    
    setPreTotal(pretotal + item.price);
  
  }

  const shoe1 = Shoe(
    333333,
    "Eternal",
    127.99,
    "https://static.nike.com/a/images/t_default/0f8d057f-4f0c-49ad-8ae4-cf7f9278e1a2/air-zoom-tempo-next-mens-road-running-shoes-HMLvjm.png"
  ,1
  );
  const shoe2 = Shoe(
    333333,
    "Canvas",
    127.99,
    "https://static.nike.com/a/images/t_default/c8b28806-244a-49b8-83d2-f3554da0b679/air-zoom-tempo-next-flyknit-mens-road-running-shoes-HMLvjm.png",
    2
  );
  const shoe3 = Shoe(
    33333,
    "Spark",
    127.99,
    "https://static.nike.com/a/images/t_default/57dd56da-b069-4c63-bece-4810c1067215/air-zoom-pegasus-39-mens-road-running-shoes-QfTZ5F.png"
  ,3
  );
  const shoe4 = Shoe(
    333333,
    "Blazer",
    127.99,
    "https://static.nike.com/a/images/t_default/9c710c95-3dc2-488f-9915-d2f330fde726/react-phantom-run-flyknit-2-mens-road-running-shoes-7s5XTG.png"
  ,4
  );
  const shoe5 = Shoe(
    333333,
    "React",
    127.99,
    "https://static.nike.com/a/images/t_default/8eb0b999-0b3f-416f-b531-f2d1dc066475/react-miler-3-mens-road-running-shoes-WCgcxj.png"
  ,5
  );
  const shoe6 = Shoe(
    333333,
    "Vemero",
    88.99,
    "https://static.nike.com/a/images/t_default/f75602a6-17d9-4a23-b881-84dd4d6dd660/air-zoom-vomero-16-road-running-shoes-wvdS5m.png"
  ,6
  );
  shoesArray.push(shoe1);
  shoesArray.push(shoe2);
  shoesArray.push(shoe3);
  shoesArray.push(shoe4);
  shoesArray.push(shoe5);
  shoesArray.push(shoe6);
    useEffect(() => { 
    }, [])
  return (<>
      <div className="about-container rounded-md flex justify-center items-center cursor-pointer">
      <p className="text-white font-bold text-xl">?</p>
      </div>
      <div className="bg-[#F1F1F0] w-full max-w-5xl h-64 mx-auto rounded-lg drop-shadow-xl ">
        <div className="border-b-2 ">
        <ShoeContainer addCart={addCart} shoeArr={shoesArray} />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-2/4 ">
          <SummaryContainer setPreTotal={setPreTotal}
            pretotal={pretotal}
            cartArr={cart} />
          </div>
          <div className="md:w-2/4">
          <PaymentContainer pretotal={pretotal} />
          </div>
        </div>
      </div>
      </>
    );
}

export default Container
