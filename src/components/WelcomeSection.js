
import React from "react"
import Zoom from 'react-reveal/Zoom';

const WelcomeSection = () => {
	return (
		<div className="welcome-hero-wrapper d-flex flex-column flex-md-row px-5 pb-3">
			<div className="welcome-hero welcome-left-hero d-flex col-xs-12 col-md-6 pb-4 pb-md-0 pl-md-0 pr-3">
				<div className="content">
					<Zoom>
						<p className='name'>maybe it's DAVE MELINE</p>
					</Zoom> 
				</div>
			</div>
			<div className="welcome-hero welcome-right-hero d-flex col-md-6 col-xs-12 px-5">
				<div className="content">
					<div>
						<h1>I design and build things on the world wide web.</h1>
					</div>
					<ul style={{paddingLeft: "0", marginBottom: "0px"}}>
						<li style={{padding: "10px 0px"}}>
							<a href="https://www.linkedin.com/in/david-meline/" target="_blank">
								<img src="/icons/linked-in.svg" className="filter-color" alt="Linked In Profile Link" title="Linked In"/>
							</a>
						</li>
						<li className="ml-3" style={{padding: "10px 0px"}}>
							<a href="https://github.com/dmelon199/reactProjects" target="_blank">
								<img src="/icons/github.svg" className="filter-color" alt="GitHub Profile Link To Projects" title="GitHub"/>
							</a>
						</li>
						<li className="ml-3">
							<a href="mailto: dmeline199@gmail.com" target="_blank">
								<img src="/icons/email.svg" className="filter-color" alt="Link To Email Address" title="Email"/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}


export default WelcomeSection