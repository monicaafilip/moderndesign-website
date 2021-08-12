import React, {Component} from 'react';
import { 
 Route, 
 Switch, 
 Redirect
} from 'react-router-dom';

import Acasa from '../pages/acasa/acasa.js';
import DespreNoi from '../pages/desprenoi/desprenoi.js';
import Produse from '../pages/produse/produse.js';

class Routes extends Component
{
	render()
	{
		return (
			<Switch>
		        <Route exact path="/moderndesignWebsite/acasa" component={Acasa} />
		        <Route exact path="/moderndesignWebsite" component={Acasa}/>
		        <Route exact path="/moderndesignWebsite/desprenoi" component={DespreNoi} />
		        <Route exact path="/moderndesignWebsite/produse" component={Produse} />
		    </Switch>
		);
	}
}
export default Routes;
