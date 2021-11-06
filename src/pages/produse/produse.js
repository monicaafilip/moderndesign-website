import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './produse.css';
import '../../App.css';

import Navbar from '../../components/navbar/navbar';
import Product from '../../components/product/product';
import Footer from '../../components/footer/footer';

import { selectProducts } from '../../redux/directory/directory.selectors';

const Produse = ({ products }) => {
	return (
		<div className="App">
			<div className="container-fluid mainHomePage">
			<Navbar/>
			
			<section className="portfolio">
				<div className="container">
					<div className="portfolio-wrapper">
					{ 
						products.map( ({id, ...otherProps}) => (
							<Product key={id} {...otherProps}/>
						))
					}
					</div>
				</div>
				</section>

			<Footer/>
			</div>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	products: selectProducts
});

export default connect(mapStateToProps)(Produse);