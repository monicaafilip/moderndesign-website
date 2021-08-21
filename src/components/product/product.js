import React from 'react';
import './product.css';

import prodImg from '../../assets/temporary/products/prod (1).jpeg';

const Product = () =>
{
	return (
		<div className="portfolio-object">
			<div className="card">
				<img className="card-img-top" src={prodImg} alt="produs"/>
				<div className="card-body">
				<h5 className="card-title">Produs</h5>
				<p className="card-text">
					Descriere
				</p>
				<button className="btn btn-primary">Mai multe detalii</button>
				</div>
			</div>
		</div>
	);
}

export default Product;