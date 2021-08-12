import React, {Component} from 'react';
import './carousel.css';

import firstImg from '../../assets/temporary/products/prod (1).jpeg';
import secondImg from '../../assets/temporary/products/prod (2).jpeg';

class Carousel extends Component
{
	render()
	{
		return (
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div id="mainCarousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src={firstImg} alt="First slide"></img>
                                <div className="carousel-caption d-md-block fancy-border">
                                    <h1 className="display-4 textCarousel h1VWSize">Modern Design</h1>
                                    <p className="lead normalVWSize textCarousel">Mobilă second-hand import Italia</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src={secondImg} alt="Second slide"></img>
                                <div className="carousel-caption d-md-block">
                                    <h1 className="display-4 h1VWSize">Modern Design</h1>
                                    <button className="btn btn-success my-2 my-sm-0  productsBtn normalVWSize">Produse</button>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
		);
	}
}

export default Carousel;