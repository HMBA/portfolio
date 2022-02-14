import React from 'react'
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className="bg-dark p-5 text-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                     <a href="tel:+923234774372">   <p className="btn btn-outline-secondary rounded-pill"><i class="fas fa-phone-alt fs-2 p-3"></i><span className="m-3 fs-5">+92 3234774372</span></p></a>
                    </div>
                    <div className="col-sm-4">
                    <a href="mailto:bilal.arif2917@gmail.com?">  <p className="btn btn-outline-secondary rounded-pill"><i class="fas fa-envelope fs-2 p-3"></i><span className="m-3 fs-5">bilal.arif2917@gmail.com</span></p></a>
                    </div>
                    <div className="col-sm-4">
                        <SocialLinks />
                    </div>
                </div>
                <div>
                </div>
            </div>
            {/* <button className="btn btn-secondary ms-3 mb-3 rounded-circle fixed fs-3 scroll-button"><i class="fas fa-arrow-circle-up"></i></button> */}
        </footer>
    )
}

export default Footer;
