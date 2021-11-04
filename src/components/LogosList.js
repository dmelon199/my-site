import React from 'react';

const LogosList = props => {
  return(
    <div className={`project-column col-sm-4 p-0 flex-column ${props.class}`}>
      <div className="logo-image" style={{ backgroundImage: `url(${props.imgUrl})`, backgroundPosition: 'center' }}/>
    	<h3 className="logo-heading" style={{ color: "gray" }}>{props.name}</h3>
    </div>
  )
}

export default LogosList