import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Homepage from './homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import GiphyItemContainer from './modules/giphy-item-container';
import Search from './search';
import AccountChangeDetailContainer from './modules/account-change-detail-container';
import AccountOverviewContainer from './modules/account-overview-container';
import AppBarContainer from './modules/app-bar-container';

function App() {
  return (
    <>
      <Router>
        {/* HTML element en attribute style-normalizations (ipv normalize.css)*/}
        <CssBaseline />
        <header>
          <AppBarContainer search={false} />
        </header>
        <main>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/item/:id' component={GiphyItemContainer} />
            <Route path='/search/:value' component={Search} />
            <Route
              path='/account-details'
              exact
              component={AccountChangeDetailContainer}
            />
            <Route
              path='/overview'
              exact
              component={AccountOverviewContainer}
            />
            <Route path='/*' exact component={Homepage} />
          </Switch>
        </main>
        <footer />
      </Router>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
