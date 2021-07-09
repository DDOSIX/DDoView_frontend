import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.home} exact>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
