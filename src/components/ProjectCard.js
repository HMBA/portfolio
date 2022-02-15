
import React from "react";

const ProjectCard = ({projectDataProps})=>{
     return(
    <>
    <section id="Projects">
  <div className="bg-dark text-light p-5">
    <div className="container">
      <h1 className="p-5 bg-dark text-light text-center">MY PROJECTS</h1>
      

   
<div className="row">
 
{projectDataProps.map((curElem)=>{

return(
    <>
<div className="col-sm-4 mb-3" key={curElem.id}>
  
        <div className="p-4 project-card">
            <img src={curElem.thumbnail} className="img-fluid mb-4"  data-bs-toggle="modal" data-bs-target={`#id_${curElem.id}`}/>  
            <h5 className="text-center">
              <a target="_blank" class="link-light text-decoration-none" href={curElem.link}>{curElem.description}</a>
              </h5>          

        </div>

        <div className="modal fade" id={`id_${curElem.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby={curElem.id} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>          
              <img src={curElem.fullimage} className="img-fluid"/>
            </div>
          </div>
        </div>

     </div>
     </>
)})   
}
</div>
</div>
</div>
</section>
</>
    )
}


export default ProjectCard;







