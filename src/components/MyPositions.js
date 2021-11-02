import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const MyPositions = (props) => {
  return ( 
    <Fade>
      <div className={`position ${props.class}`}>
        <ul className='pr-5'>
          <li className="position-info pl-3">
            <h2 style={{textAlign: "left", fontWeight: '700', marginBottom: '2px'}}>{props.position}</h2>
            <h3 style={{textAlign: "left", fontSize: '1.5rem', marginBottom: '5px'}}>{props.time}</h3>
            <h4 style={{textAlign: "left", fontStyle: "italic", color: "gray", fontSize: '1.25rem'}}>{props.location}</h4>
            <ul className="position-experience" style={{textAlign: "left"}}>{props.description.map((jobInfo) => {
              return (
                <Slide>
                  <li className='mb-1'>{jobInfo}</li>
                </Slide>
              )
            })}
            </ul>
          </li>
        </ul>
      </div>
  	</Fade>
  )
}

export default MyPositions