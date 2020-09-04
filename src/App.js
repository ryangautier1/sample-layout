import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Subscriptions from './pages/Billing/Subscriptions';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';

function App() {
  // toggles the side nav bar
  const toggleNav = () => {
    document.querySelector(".side-nav").classList.toggle("nav-open");
    document.querySelector(".nav-items").classList.toggle("nav-items-open");
    // if the screen is large, move the main card over
    if (window.innerWidth > 650) {
      document.querySelector("main").classList.toggle("main-active");
    }
  }
  return (
    <div>
      <Router>
        <Nav toggleNav={toggleNav} />
        <Wrapper>
          <Switch>
            <Route exact path={["/subscriptions"]}>
              <Subscriptions />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
