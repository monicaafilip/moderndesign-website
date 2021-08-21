import React from 'react';
import {useHistory} from 'react-router-dom';
import { 
 Link 
} from 'react-router-dom';

import './navbar.css';
import logo from '../../assets/initial-logo.png';

const Navbar = props => 
{
	const currentPath = useHistory().location.pathname.toLowerCase();
	
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">		           
	            <div className="navbar-brand">
	                <Link to="/moderndesignWebsite/">
	                	<img className="img fluid logoImg" src={logo} alt="logo"></img>
	                </Link>
	            </div>
	            <div className="navbarIcons">
	                <i className="fa fa-search fa-2x d-lg-none d-xl-none"></i>
	                <i className="fa fa-heart fa-2x d-lg-none d-xl-none"></i>
	                <i className="fa fa-user fa-2x d-lg-none d-xl-none"></i>
	                <i className="fa fa-shopping-cart fa-2x d-lg-none d-xl-none"></i>
	                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	                    <span className="navbar-toggler-icon"></span>
	                </button>
	            </div>
	            <div className="collapse navbar-collapse" id="navbarNavDropdown">
	                <ul className="navbar-nav mr-auto">
	                    <li className={currentPath.includes("acasa") ? "nav-link active" : "nav-link"}><Link className="nav-link" to="/moderndesignWebsite/acasa">Acasă <span className="sr-only">(current)</span></Link></li>
	                    <li className={currentPath.includes("desprenoi") ? "nav-link active" : "nav-link"}><Link className="nav-link" to="/moderndesignWebsite/desprenoi">Despre noi</Link></li>
	                    <li className={currentPath.includes("produse") ? "nav-link active" : "nav-link"}><Link className="nav-link" to="/moderndesignWebsite/produse">Produse</Link></li>
	                </ul>
	                <form className="form-inline my-2 my-lg-0">
	                    <input className="form-control mr-sm-2 d-none d-lg-block" type="search" placeholder="Căutare" aria-label="Cautare"></input>
	                    <button className="btn btn-outline-success my-2 my-sm-0 d-none d-lg-block" type="submit">Căutare</button>
	                </form>
	                <i className="fa fa-search fa-2x d-none d-lg-none d-xl-none"></i>
	                <i className="fa fa-heart fa-2x d-none d-lg-block d-xl-block"></i>
	                <i className="fa fa-user fa-2x d-none d-lg-block d-xl-block"></i>
	                <i className="fa fa-shopping-cart fa-2x d-none d-lg-block d-xl-block"></i>
	            </div>
		    </nav>
	    );
	
}

export default Navbar;