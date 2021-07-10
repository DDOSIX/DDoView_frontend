import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from './GlobalStyle';
import Layout from './components/Layout';
import Home from './pages/Home';
import WritingContentPage from './pages/WritingContent';
import Content from './pages/Content';
import ReviewDetail from './pages/ReviewDetail';
import WritingReview from './pages/WritingReview';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={routes.home} exact>
            <Layout>
              <Home 
                accent={Theme.accent}
                bgColor={Theme.bgColor}
              />
            </Layout>
          </Route>
          <Route path={routes.content}>
            <Layout>
              <Content />
            </Layout>
          </Route>
          <Route path={routes.reviewDetail}>
            <Layout>
              <ReviewDetail />
            </Layout>
          </Route>
          <Route path={routes.writingContent}>
            <Layout>
              <WritingContentPage />
            </Layout>
          </Route>
          <Route path={routes.writingReview}>
            <Layout>
              <WritingReview />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
