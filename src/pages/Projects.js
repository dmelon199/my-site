
import React from 'react'
import projects from '../projects';
import ProjectsList from '../components/ProjectsList';

const Projects = (props) => {
  return ( 
    <div className="projects-wrapper d-flex flex-column">
      <h1 className="font-weight-bold bg-gray px-5 py-4">Projects</h1>
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
    </div>
  )
}


export default Projects