import React from 'react';
import { 
 Route, 
 Switch
} from 'react-router-dom';

import Home from '../../pages/home/home';
import AboutUs from '../../pages/aboutus/aboutus';
import Directory from '../../pages/directory/directory';

const Routes = () =>
{
	return (
		<Switch>
			<Route exact path="/moderndesignWebsite/acasa" component={Home} />
			<Route exact path="/moderndesignWebsite" component={Home}/>
			<Route exact path="/moderndesignWebsite/desprenoi" component={AboutUs} />
			<Route exact path="/moderndesignWebsite/produse" component={Directory} />
		</Switch>
	);
}
export default Routes;
