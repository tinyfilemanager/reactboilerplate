import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './common/constants';
import { Spinner } from './components/Loader';

import './styles/styles.scss'; // global styles

//layout import
const MainLayout = lazy(() => import('./layouts'));
const Header = lazy(() => import('./components/Header'));


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
			<MainLayout>
				<Switch>
				  <Route exact path={ROUTES.APP_ROOT} component={Header} />
				  <Route component={NotFound} />
				</Switch>
			</MainLayout>
        </Suspense>
      </Router>
    );
  }
}

export default App;