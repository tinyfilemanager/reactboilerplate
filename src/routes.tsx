import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from 'common/constants';
import { Spinner } from 'components/Loader';

import './styles/styles.scss'; // global styles

//layout import
const MainView = lazy(() => import('layout'));
const Header = lazy(() => import('components/Header'));

//layout routing
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const PageLoadepstyle = {
  width: '48px',
  height: '40%',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};
const PageLoader = () => <Spinner color={'#5e94ff'} style={PageLoadepstyle} />;
const NotFound = () => <h1>404 Not Found!</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<PageLoader />}>
          <div className="container">
            <Switch>
              <AppRoute layout={MainView} exact path={ROUTES.APP_ROOT} component={Header} />
              <AppRoute layout={AuthView} component={NotFound} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    );
  }
}

export default App;
