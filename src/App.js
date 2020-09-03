import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Billing from './pages/Billing';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Wrapper>
          <Switch>
            <Route exact path={["/"]}>
              <Billing />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
