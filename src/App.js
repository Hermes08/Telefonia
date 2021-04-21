import React from 'react'
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import ReportPage from './pages/report';


function App() {
  return (
   <Router>
 
     <Switch>
<Route path="/"component={Home} exact/>
<Route path="/signin" component={SigninPage} exact/>
<Route path="/report" component={ReportPage} exact/>

     </Switch>
     
   </Router>
  );
}

export default App;
