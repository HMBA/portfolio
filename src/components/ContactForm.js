import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message ,phone ,subject} = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      phone: phone.value,
      subject : subject.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form className="me-3 ms-3"onSubmit={handleSubmit}>
    <div className="row">
        <div className="col-sm-6">
   <input type="text" id="name" name="name" class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white"  placeholder="Name" required/>
  </div>
  <div className="col-sm-6">
   <input type="email" id="email" name="email" class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white"  placeholder="E-mail" required/>
  </div>
   </div>
   <div className="row">
        <div className="col-sm-6">
   <input type="tel" id="phone" name="phone" class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white"  placeholder="Phone"required/>
  </div>
  <div className="col-sm-6">
   <input type="text" id="subject" name="subject" class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white"  placeholder="Subject" required/>
  </div>
   </div>

      <textarea class="form-control text-disable mt-3 p-3 bg-dark rounded-0 text-white" name="message" id="message" rows="6"  placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-secondary rounded-pill mt-3" value="Send" >{status} Message</button>
</form>
   
  );
};

export default ContactForm;