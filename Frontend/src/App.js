import React from 'react';
import Home from './Home';
import Database from './Database';
import Navbar from './Navbar';
import Form from './Form';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
class App extends React.Component{

    constructor(props) {
        super(props)
    }

  render(){
    return(
    <div className="App">
        <Router>
            <div>
                <Switch>
                <Route path="/"exact component={Home}/>
                <Route path="/database"exact component={Database}/>
                <Route path="/form"exact component={Form}/>
                </Switch>
            </div> 
          <Navbar/>
        </Router>
   
    </div>
    );
}
}

export default App;
