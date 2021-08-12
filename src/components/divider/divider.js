import React, {Component} from 'react';
import './divider.css'

class Divider extends Component 
{
	render()
	{
		return (
			<div className="wrapper">
            	<div className="divider div-transparent div-arrow-down"></div>
        	</div>
		);
	}
}

export default Divider;