
import React from 'react'
import projects from '../projects';
import logos from '../logos';
import LogosList from '../components/LogosList';
import ProjectsList from '../components/ProjectsList';


const Projects = (props) => {
  return ( 
    <div className="projects-wrapper d-flex flex-column">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Web Projects</h1>
        <div className="projects-content d-flex flex-wrap p-3">
          {Object.keys(projects).map(function(item) {
            return (
              <ProjectsList
                class={projects[item].class}
                imgUrl={projects[item].imgUrl}
                link={projects[item].link}
                name={projects[item].name}
              />
            )
          })}
        </div>
      <h1 className="font-weight-bold bg-gray my-5 px-5 py-4">Logo Work</h1>
        <div className="projects-content d-flex flex-wrap p-3">
          {Object.keys(logos).map(function(item) {
            return (
              <LogosList
                class={logos[item].class}
                imgUrl={logos[item].imgUrl}
                name={logos[item].name}
              />
            )
          })}
        </div>
    </div>
  )
}


export default Projects