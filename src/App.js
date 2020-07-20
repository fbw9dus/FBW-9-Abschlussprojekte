import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GroupOne from './components/GroupOne';
import GroupTwo from './components/GroupTwo';
import GroupThree from './components/GroupThree';
import GroupFour from './components/GroupFour';
import GroupFive from './components/GroupFive';
import GroupSix from './components/GroupSix';
import Home from './components/Home';
import './App.css';


function App() {
  return (
      <div>
          <Header />
          <Switch>
              <Route exact path="/" component= {Home} />
              <Route path="/nowaiter" component= {GroupOne} />
              <Route path="/tischtennis" component= {GroupTwo} />
              <Route path="/restoGuide" component= {GroupThree} />
              <Route path="/ddc" component= {GroupFour} />
              <Route path="/LapStore" component= {GroupFive} />
       
          </Switch>
      </div>
  );
}

export default App;
