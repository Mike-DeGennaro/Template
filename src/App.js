import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Home from './Components/pages/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Menu from './Components/pages/Menu';
import Order from './Components/pages/Order';
import { AnimatePresence, motion} from 'framer-motion';



function App() {

  return (
    <>
<Router>
<Navbar />
<AnimatePresence exitBeforeEnter>
<Switch >
  <Route path='/' exact component={Home} />
  <Route path='/menu' component={Menu} />
  <Route path='/order' component={Order} />
</Switch>
</AnimatePresence>
</Router>
    </>
  );
}

export default App;
