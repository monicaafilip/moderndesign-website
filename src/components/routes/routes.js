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
			<Route exact path="/acasa" component={Home} />
			<Route exact path="/" component={Home}/>
			<Route exact path="/desprenoi" component={AboutUs} />
			<Route exact path="/produse" component={Directory} />
		</Switch>
	);
}
export default Routes;
