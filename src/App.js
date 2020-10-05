import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';



import ProductNew from './containers/Product/product-pagination';
import Tshirt from './containers/Product/Tshirt';
import Bag from './containers/Product/Bags';


function App() {
	
	return (
        <Router>
            <div>
				<Switch>
					<Route path="/bags"  component={ Bag } />
					<Route path="/shirt"  component={ Tshirt } /> 
					<Route path="/page" component={ProductNew } />
					<Route path="/" component={ProductNew} />
				</Switch>
            </div>
        </Router>
    );
}

export default App;
