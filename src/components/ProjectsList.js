import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = props => {
  return(
    <div className={`project-column col-sm-4 p-0 flex-column ${props.class}`}>
      <Link to={`${props.link}`} onClick={(e) => {
        if (props.link.includes('www.')) {
          e.preventDefault();
          window.open(props.link, '_blank');
          }
        }}>
        <div className="project-image" style={{ backgroundImage: `url(${props.imgUrl})`, backgroundPosition: 'center top' }}/>
    	  <h3 style={{background:'#f5f6f7', color:'#333', fontSize: '1.5vw'}}>{props.name}</h3>
      </Link>
    </div>
  )
}

export default ProjectsList