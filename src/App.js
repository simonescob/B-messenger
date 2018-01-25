import React, { Component } from 'react';
import './CSS/App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

//Import area

import Login from './Components/Login';
import Messenger from './Components/Messenger';




class Pupu extends Component{

  render(){
    return(
      <div>
        <h1>error 404</h1>
      </div>
    );
  }
}


class App extends Component {
  
  Hola(){
  
    return(<Link to='/hola' />);
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ="/" component={Login} />
          <Route path='/messenger' component={Messenger} />
          <Route component={Pupu} />
        </Switch>
      </Router>
    );
  }
}

export default App;
