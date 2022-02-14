import React from "react";
const SeviceCard = ({ serviceDataProps }) => {
  console.log(serviceDataProps);
  return (
    <>
      <section id="Services">

        <div className="bg-dark text-light">
          <h1 className="pb-5 text-center">SERVICES</h1>
          <div className="container">
            <div className="row">
              {serviceDataProps.map((curElem) => {
                return (
                  <div className="col-sm-4 mb-3">
                    <div className="card" className="card-style">
                      <div className="container text-secondary">
                        <p className="text-center service-icon">{curElem.icon}</p>
                        <div className="card-body">
                          <h3 className="card-title">{curElem.seviceName}</h3>
                          <p className="lh-lg">
                            {curElem.description}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SeviceCard;
