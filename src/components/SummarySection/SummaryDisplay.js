import React from 'react'
import SummaryCard from './SummaryCard'

const SummaryDisplay = ({cartArr}) => {
    return (
      <div className="border border-[#555] h-96 max-h-96  w-full rounded-lg my-4 p-4 overflow-scroll">
            {cartArr.length > 0 ? <>
            
                {cartArr.map((item) => {
                    console.log("this is the item:",item)
                    return (
                      <div key={item.id}>
                            <SummaryCard image={item.item.image} key={item.id} title={item.item.title} price={item.item.price} amount={item.amount} />
                      </div>
                    );
                })
       
                } </>
                :
                <>
                    <div className="h-full flex justify-center items-center">
                        <p>No Shoes In Cart Add Shoes To Cart Above</p>
                    </div>
                </>}
        </div>
    )
}

export default SummaryDisplay
