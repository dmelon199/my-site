import React from 'react';

const SkillsList = props => {
  return(
    <div className={`skill-column p-0 flex-column ${props.class}`}>
    	<img style={{width: "70%"}} src={`${props.imgUrl}`}/>
    	<h3 style={{marginTop: "10px", color: "gray", fontSize: '2vh'}}>{props.name}</h3>
    </div>
  )
}

export default SkillsList