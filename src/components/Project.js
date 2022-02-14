import React ,{useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectData'


 const Project = () => {
   const [projectData,setprojectData]= useState(ProjectData);
    return (
        <>
    <ProjectCard projectDataProps={projectData}/>
        </>
    )
}

export default Project
  