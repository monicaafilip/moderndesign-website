import React from 'react';
import './product.css';

const Product = ({ title, imageUrl, description }) =>
{
	console.log(title);
	console.log(description);
	return (
		<div className="portfolio-object">
			<div className="card">
				<img className="card-img-top" src={imageUrl} alt="produs"/>
				<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">
				{description}
				</p>
				<button className="btn btn-primary">Mai multe detalii</button>
				</div>
			</div>
		</div>
	);
}

export default Product;