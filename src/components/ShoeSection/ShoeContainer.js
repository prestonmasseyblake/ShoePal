import React from 'react'
import ShoeCard from './ShoeCard'
import ShoeSwiper from './ShoeSwiper'

const ShoeContainer = ({addCart, shoeArr}) => {
    return (
        <div className="bg-[#FFF] w-full h-full ">
            {/* <h1>Shoe Top Container</h1> */}
            
            <ShoeSwiper addCart={addCart} shoeArr={shoeArr}/>
        </div>
    )
}

export default ShoeContainer
