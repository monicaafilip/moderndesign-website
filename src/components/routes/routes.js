import React from 'react';
import { 
 Route, 
 Switch
} from 'react-router-dom';

import Acasa from '../../pages/acasa/acasa';
import DespreNoi from '../../pages/desprenoi/desprenoi';
import Produse from '../../pages/produse/produse'

const Routes = () =>
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
export default Routes;
