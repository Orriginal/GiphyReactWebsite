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
import GiphyReducer, { giphyInitialState } from './store/reducer';
import { StateProvider } from './core/components/state-provider';

function App() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(-50%, 0)' }
  });

  return (
    <>
      {/* HTML element en attribute style-normalizations (ipv normalize.css)*/}
      <CssBaseline />
      <header>
        <AppBarContainer search={false} />
      </header>
      <main>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <StateProvider
                initialState={giphyInitialState}
                reducer={GiphyReducer}
              >
                <Route path='/' exact component={Homepage} />
                <Route path='/search/:value' component={Search} />
              </StateProvider>
              <Route path='/item/:id' component={GiphyItemContainer} />
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
          </animated.div>
        ))}
      </main>
      <footer />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
