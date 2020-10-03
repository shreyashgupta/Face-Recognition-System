import React from 'react';
import './Navbar.css';
import {Link,Router} from 'react-router-dom';

class Navbar extends React.Component
{
	constructor(props){
		super (props);
	}
	render(){
		return (
			<div className="root">
				<div className="main"><div/>
					<h1>House Name: E-26</h1>
				</div>
				<div className="btns">
						<Link to="/"><button className="nbutton">Logout</button></Link>
						<Link to="/database"><button className="nbutton">Database</button></Link>
				</div>
			</div>
			)
	}
}
export default Navbar;