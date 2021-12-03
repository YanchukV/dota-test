import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch , HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import Styles from './index.module.sass';
import { store } from '../store';
import Header from './components/Header';
import routes from './navigation/routes';

const App = () => {

  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className={Styles.root}>
          <Header/>
            <Switch>
              <Route exact path={routes.home.path} component={routes.home.component} />
              <Route exact path={routes.hero.path} component={routes.hero.component} />
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
