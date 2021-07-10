import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from './GlobalStyle';
import Layout from './components/Layout';
import Home from './pages/Home';
import WritingContentPage from './pages/WritingContent';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            {/* <Layout>
              <Home 
                accent={Theme.accent}
                bgColor={Theme.bgColor}
              />
            </Layout> */}
            <WritingContentPage />
          </Route>
          
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
