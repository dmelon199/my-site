import React from 'react'

const MyEducation = () => {
	return ( 
		<div className="my-education-wrapper d-flex flex-column p-5 bg-gray">
			<h1>My Higher Education</h1>
			<div className="my-education-content d-flex container-xl py-5">    
				<div className="col-sm-3 logo">
					<img style={{width:"90%"}} src="/images/champ.png" alt="Champlain College Logo" title="Champlain College"/>
				</div>
				<div className="info col-sm-8" style={{lineHeight: '25px'}}>
					<h2 className="font-weight-bold">Champlain College</h2>
					<p><i>Burlington, Vermont  2008-2012</i></p>
					<p>I received my Bachelor of Science in Graphic Design & Digital Media in 2012. My favorite highlight of attending Champlain College was studying abroad in Dublin, Ireland during the 2010 Fall semester of my Junior year. Towards the end of my time at Champlain, I gained an interest in web design & development. I applied for a job at Dealer Dot Com post graduation and have been learning the ways of the web ever since.</p>
				</div>
			</div>
		</div>
	)
}


export default MyEducation