import React from 'react';
import  {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';
import ProductListContainer from './components/ProductListContainer';

const TopBar = (props) => (
  <div className="navbar navbar-default">
    <div className="navbar-header">
      <NavLink exact to="/" className="navbar-brand">All Products</NavLink>
    </div>
  </div>
)

const App = () => (
  <Router>
    <div>
      <TopBar />
      <Route exact path="/" component={ProductListContainer} />
    </div>
  </Router>
)

export default App;
