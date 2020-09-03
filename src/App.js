import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Billing from './pages/Billing';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path={["/"]}>
            <Billing/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
