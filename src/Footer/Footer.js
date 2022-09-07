import React from 'react'
import image1 from "../Images/image 7.png"
import image2 from "../Images/image 9.png"
import image3 from "../Images/image 10.png"
import image4 from "../Images/image 11.png"
import image5 from "../Images/image 13.png"
import image6 from "../Images/image 14.png"
import('./Footer.css')
const Footer = () => {
    return (
        <div>

        
        <div className='footer-container'>
            <div className='footer-div1'>
                <h4>PT Dwidasa Samsara Indonesia</h4>
                <p>Ruko Jalur Sutera 29A No. 53</p>
                <p>alam Sutera Serpong, Tangrang 15323</p>
            </div>
            <div className='contact'>
                <h2>Contact</h2>
                <p>Phone: +62.21.5314.1135</p>
                <p>Fax: +62.21.5314.1135</p>
                <p>Email: community@dwidasa.com</p>

            </div>
            <div className='footer-logo'>
                <div className='image-footer' style={{ background: `url(${image1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat",  backgroundPosition: "center" }}> </div>
                <div className='image-footer' style={{ background: `url(${image2})`, backgroundSize: "contain" , backgroundRepeat: "no-repeat" ,  backgroundPosition: "center"}}> </div>
                <div className='image-footer' style={{ background: `url(${image3})`, backgroundSize: "contain" , backgroundRepeat: "no-repeat",  backgroundPosition: "center" }}> </div>
                <div className='image-footer' style={{ background: `url(${image4})`, backgroundSize: "contain" , backgroundRepeat: "no-repeat",  backgroundPosition: "center" }}> </div>
                <div className='image-footer' style={{ background: `url(${image5})`, backgroundSize: "contain" , backgroundRepeat: "no-repeat",  backgroundPosition: "center" }}> </div>
                <div className='image-footer' style={{ background: `url(${image6})`, backgroundSize: "contain" , backgroundRepeat: "no-repeat" ,  backgroundPosition: "center"}}> </div>
            </div>
        </div>

         <div className='copyright-container'>
            <p>Copyright © 2015</p>
         </div>

        </div>



    )
}

export default Footer