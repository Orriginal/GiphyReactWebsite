import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import SearchAppBar from "./searchAppBar";
import Homepage from "./homepage";
import Item from "./item";
import Search from "./search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultContext from "./app-context";

function App() {
  return (
    <>
      <Router>
        {/* HTML element en attribute style-normalizations (ipv normalize.css)*/}
        <CssBaseline />
        <DefaultContext>
          <header>
            <SearchAppBar search={false} />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/item/:id" component={Item} />
              <Route path="/search/:value" component={Search} />
              <Route path="/*" exact component={Homepage} />
            </Switch>
          </main>
          <footer />
        </DefaultContext>
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);