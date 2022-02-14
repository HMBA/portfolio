import React from 'react'
import Image from '../bilalnew.png'
import SocialLinks from './SocialLinks'
const Header = () => {
  return (
    <div className="Header bg-dark pt-5 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-sm-6">
            <div className="card border-0 bg-dark text-secondary">
              <img src={Image} alt="Dp" className="img-fluid w-75 m-auto" />

              <div className="ms-5"><SocialLinks /></div>



            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border-0 bg-dark">
              <div className="card-body text-light">
                <h1 className="card-title hello">Hello! I'm</h1>
                <h2 className="card-dark pt-3">M.Bilal Arif <small className="text-muted fs-6">(Senior Software Engineer)</small></h2>
                <hr />
                <p className="fst-italic lh-lg">"I am a Full-Stack multi talented Software Engineer with more
                  than 3 years of experience. My technical knowledge includes
                  proficiency in PHP/Laravel, JavaScript, Sql, developing
                  websites from scratch to final product for clients. I always
                  apply the best practices in software development and follow
                  the most flexible approach in order to deliver the best
                  results to our clients."</p>


                <a href="#" className="btn btn-outline-secondary border-2 mt-3 rounded-pill" >Get Resume &nbsp; <i class="fas fa-download fa-sm"></i></a>



              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header;
