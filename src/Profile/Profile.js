import React from 'react'
import img from "../Images/profile.jpg";
import "./Profile.css"
const Profile = () => {
    return (
        <div>
            <h1 className='heading-center'>Mobile Specialist</h1>
            <div className='profile-container'>
                <div className='profile'>
                    <div className='image-profile' style={{ background: `url(${img})`, backgroundSize: "cover" }}>
                    </div>
                    <h5 className='color-red'>System Analyst</h5>
                    <p>Rodney Stratton</p>
                    <div>
                        <i class="fa-brands fa-facebook-f profile-icon"></i>
                        <i class="fa-brands fa-twitter profile-icon"></i>
                        <i class="fa-brands fa-instagram profile-icon"></i>
                    </div>

                </div>
                <div className='profile'>
                    <div className='image-profile' style={{ background: `url(${img})`, backgroundSize: "cover" }}>
                    </div>
                    <h5 className='color-red'>System Analyst</h5>
                    <p>Rodney Stratton</p>
                    <div>
                        <i class="fa-brands fa-facebook-f profile-icon"></i>
                        <i class="fa-brands fa-twitter profile-icon"></i>
                        <i class="fa-brands fa-instagram profile-icon"></i>
                    </div>

                </div>
                <div className='profile'>
                    <div className='image-profile' style={{ background: `url(${img})`, backgroundSize: "cover" }}>
                    </div>
                    <h5 className='color-red'>System Analyst</h5>
                    <p>Rodney Stratton</p>
                    <div>
                        <i class="fa-brands fa-facebook-f profile-icon"></i>
                        <i class="fa-brands fa-twitter profile-icon"></i>
                        <i class="fa-brands fa-instagram profile-icon"></i>
                    </div>

                </div>
                <div className='profile'>
                    <div className='image-profile' style={{ background: `url(${img})`, backgroundSize: "cover" }}>
                    </div>
                    <h5 className='color-red'>System Analyst</h5>
                    <p>Rodney Stratton</p>
                    <div>
                        <i class="fa-brands fa-facebook-f profile-icon"></i>
                        <i class="fa-brands fa-twitter profile-icon"></i>
                        <i class="fa-brands fa-instagram profile-icon"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile