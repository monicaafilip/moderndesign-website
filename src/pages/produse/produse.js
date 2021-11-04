import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './produse.css';
import '../../App.css';

import Navbar from '../../components/navbar/navbar';
import Product from '../../components/product/product';
import Footer from '../../components/footer/footer';

import { selectDirectoryProducts } from '../../redux/directory/directory.selectors';

const  Produse = ({ products }) => {
	console.log(products);
	if (products)
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
	else 
	return (
		<div className="App">
			<div className="container-fluid mainHomePage">
			<Navbar/>
			
			<section className="portfolio">
				<div className="container">
					<div className="portfolio-wrapper"></div>
					PRODUCTS NOT SET
					</div>
				</section>
			<Footer/>
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	products: selectDirectoryProducts
});

export default connect(mapStateToProps)(Produse);
