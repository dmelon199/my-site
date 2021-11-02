import React from 'react';

const SkillsList = props => {
  return(
    <div className={`skill-column ${props.class}`}>
    	<img style={{width: "75%"}} src={`${props.imgUrl}`}/>
    	<h3 style={{marginTop: "10px", color: "gray", fontSize: '2vw'}}>{props.name}</h3>
    </div>
  )
}

export default SkillsList