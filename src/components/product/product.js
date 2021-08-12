import React, {Component} from 'react';
import './product.css';

import prodImg from '../../assets/temporary/products/prod (1).jpeg';

class Product extends Component
{
	render()
	{
		return (
			<div class="portfolio-object">
		        <div class="portfolio-box">
		        	<img class="icon" src={prodImg}/>
		        </div>
		        <h4>Mobila</h4>
		        <div class="portfolio-text">
		          Descriere in mare
		        </div>
		    </div>
		);
	}
}

export default Product;