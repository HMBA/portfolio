import React from "react";
import ContactForm from "./ContactForm";

const ContactCard = ({contactDataProps})=>{
    console.log(contactDataProps);
    return(
     <div>
 <section id="Contact">
 <div className="bg-dark text-light">
          <h1 className="pb-5 text-center">Get In Touch</h1>
            <div className="container">
              <div className="card-style">
               <div className="row">  
                <div className="col-sm-4">
                    <div className="contact-box m-3"> 
                    {contactDataProps.map((curElem) => {
                return (
                        <div  className="bg-dark p-5 mt-3 fw-bold">
                            <a href={curElem.link} class="link-light text-decoration-none">{curElem.icon} : {curElem.Cdescription}</a>
                        </div>    
                           )
                        })}                   
                    </div>  
                </div>             
                <div className="col-sm-8">
                    <ContactForm/>
<div id="status"></div>
                </div>
                
            </div>
            </div>
            </div>
            </div>
 </section>

     </div>

     
    )
}
export default ContactCard;


