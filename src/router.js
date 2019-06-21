import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
<<<<<<< HEAD
import ProductPage from './routes/ProductPage';
import MyPage from './routes/MyPage';
import HelpPage from './routes/HelpPage';
import App from './routes/App';
import AddressPage from './routes/AddressPage';

=======
import OrderPage from './routes/OrderPage'
import HelpPage from './routes/HelpPage'
import MyPage from './routes/MyPage'
import App from './routes/App'
import ProductPage from './routes/ProductPage'
>>>>>>> 05d4712043163c7ca93e53900dd61bbdf07c3b9b

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/help" exact component={HelpPage} />
          <Route path="/my" exact component={MyPage} />
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
