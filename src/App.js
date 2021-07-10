import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { GlobalStyle } from './GlobalStyle';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            <Layout>

            </Layout>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
