import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Homepage from './modules/home/homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  __RouterContext
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import GiphyItemContainer from './modules/giphy-grid/giphy-item-container';
import Search from './modules/search/search';
import AccountChangeDetailContainer from './modules/account/account-change-detail-container';
import AccountOverviewContainer from './modules/account/account-overview-container';
import AppBarContainer from './modules/app-bar/app-bar-container';
import { useTransition, animated } from 'react-spring';
import useRouter from './core/components/useRouter';

function App() {
  // const { location } = useContext(__RouterContext);
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: 'translate(100%, 0)' },
  //   enter: { opacity: 1, transform: 'translate(0%, 0)' },
  //   leave: { opacity: 0, transform: 'translate(-50%, 0)' }
  // });
  console.log('Logged Outout: App -> useContext(__RouterContext)', useRouter());
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
