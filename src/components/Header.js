
import React from "react"
import { Link } from 'react-router-dom';

const Header = () => {
	const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

	return (
		<header className="header p-5">
			<navbar>
				<ul className="nav">
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/'>Projects</Link></li>
					<li><a href='/images/resume-test.pdf' target="_BLANK">Resume</a></li>
				</ul>
			</navbar>
			<p className="ml-auto">{date}</p>
		</header>
	)
}


export default Header