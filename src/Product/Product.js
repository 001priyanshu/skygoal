import React from 'react'
import img from "../Images/product-description 1.png"
require('./Product.css');
const Product = () => {
  return (
    <div>
        <h1 className='heading-center'>Product and service</h1>
        <div className='product-container'>
            <div className='product'>
                  <img src={img} />
                  <h1 className='color-red'>Our Service</h1>
                 <p>DSI's shared services solutions focus on the front-end software development, designed specifically for the banking and financial sectors</p>
                  <button className='button-border-red'>Read More</button>
            </div>
            <div className='product'>
                  <img src={img} />
                  <h1 className='color-red'>Our Product</h1>
                  <p>Our product is made on the base of our team's careful research and analyses, raging from internet based application</p>
                  <button className='button-border-red'>Read More</button>
            </div>
            <div className='product'>
                  <img src={img} />
                  <h1 className='color-red'>Our Technology</h1>
                 <p>First JAVA,runs on more than 850 million personal computers worldwide, and on bullions of devices worldwide,including mobile and TV devices</p>
                  <button className='button-border-red'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Product