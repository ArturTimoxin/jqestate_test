import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "./store";
import Layout from './components/Layout';
import './index.scss';

import Home from './pages/home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);