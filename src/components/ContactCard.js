import React from "react";

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
                        <div className="bg-dark p-5 mt-3 fw-bold">{curElem.icon} : {curElem.Cdescription}
                        </div>    
                           )
                        })}                   
                    </div>  
                </div>             
                <div className="col-sm-8">
                    <form className="me-3">
                          <div className="row">
                              <div className="col-sm-6">
                         <input type="text" class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white"  placeholder="Name"/>
                        </div>
                        <div className="col-sm-6">
                         <input type="email" class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white"  placeholder="E-mail"/>
                        </div>
                         </div>
                         <div className="row">
                              <div className="col-sm-6">
                         <input type="tel" class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white"  placeholder="Phone"/>
                        </div>
                        <div className="col-sm-6">
                         <input type="text" class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white"  placeholder="Subject"/>
                        </div>
                         </div>

                            <textarea class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white" name="" id="" rows="6"  placeholder="Message"></textarea>
                                <button type="button" className="btn btn-secondary rounded-pill mt-3">Submit Message</button>
                    </form>

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


