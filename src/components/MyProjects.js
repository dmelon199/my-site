import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Route, Link, Switch, Redirect } from 'react-router-dom';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 500, min: 300 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MyProjects = () => {
    return (
      <div className='slideshow wrapper px-5 py-5'>
        <h1>Few Examples of My Projects</h1>
        <Carousel responsive={responsive}>
          <div className='slide'>
            <Link to='/lithia'>
              <img style={{width: "100%"}} src="/photoshop-files/sites/lithia.png"/>
              <h3 className='pt-3 text-center'>Lithia Motors</h3>
            </Link>
          </div>
          <div className='slide'>
            <Link to='/salt-lake-city'>
              <img style={{width: "100%"}} src="/photoshop-files/sites/salt-lake.png"/>
              <h3 className='pt-3 text-center'>Salt Lake City Motorcars</h3>
            </Link>
          </div>
          <div className='slide'>
            <Link to ='/avondale-select'>
              <img style={{width: "100%"}} src="/photoshop-files/sites/avondale.png"/>
              <h3 className='pt-3 text-center'>Avondale Select</h3>
            </Link>
          </div>
          <div className='slide'>
            <Link to ='/ogara-coach'>
              <img style={{width: "100%"}} src="/photoshop-files/sites/ogara.png"/>
              <h3 className='pt-3 text-center'>O'Gara Coach</h3>
            </Link>
          </div>
          <div className='slide'>
            <Link to ='/fredbeans'>
              <img style={{width: "100%"}} src="/photoshop-files/sites/fredbeans.png"/>
              <h3 className='pt-3 text-center'>Fred Beans Auto Group</h3>
            </Link>
          </div>
          <div className='slide'>
            <Link to ='/carter-meyers'>
              <img style={{width: "100%"}} src="/photoshop-files/sites/carter.png"/>
              <h3 className='pt-3 text-center'>Carter Meyers Automotive</h3>
            </Link>
          </div>
          <div className='slide'>
            <Link to ='/luther'>
              <img style={{width: "100%"}} src="/photoshop-files/sites/luther.png"/>
              <h3 className='pt-3 text-center'>Luther Automotive</h3>
            </Link>
          </div>
          <div className='slide'>
            <img style={{width: "100%"}} src="/photoshop-files/sites/lithia.png"/>
            <h3 className='pt-3 text-center'>Genesis</h3>
          </div>
        </Carousel>
      </div>
    );
  }

export default MyProjects

