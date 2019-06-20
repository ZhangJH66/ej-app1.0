import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './routes/ProductPage';
import MyPage from './routes/MyPage';
import HelpPage from './routes/HelpPage';
import App from './routes/App';
import AddressPage from './routes/AddressPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/product" exact component={ProductPage} />
          <Route path="/my" exact component={MyPage} />
          <Route path="/help" exact component={HelpPage} />
          <Route path="/address" exact component={AddressPage} />

        </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig;