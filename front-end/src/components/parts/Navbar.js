import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav m-auto">
					        <li><Link to="/">Home</Link></li>
                            <li><Link to="category">Placement Information</Link></li>
                            <li><a href="http://www.banasthali.org/banasthali/wcms/en/home/about-us/index.html;jsessionid=3D5C2C820E70D095E877AB60693F2F7D">About Banasthali</a></li>
                            <li><a href="https://www.bing.com/maps?q=banasthali+vidyapith+location&cvid=741c5517c39e4681bd14f2ee35d87270&FORM=ANAB01&PC=DCTS">Location</a></li>
							<li><Link to="adminlogin">Admin Login</Link></li>


						</ul>
						<ul className="navbar-nav ml-auto social-list">
							<li><a href="https://www.facebook.com/banasthali.org"><i className="fa fa-facebook"></i></a></li>
						</ul>
					</div>
				</div>
			</nav>
        );
};

export default Navbar;
