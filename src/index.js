import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Loadable from "@7rulnik/react-loadable";
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import TestContainer from "Containers/testPage";
import Loading from "Components/test";
import configureStore from "./store/index";

const LoadableComponent = Loadable({
  loader: () => import("Components/test"),
  loading: Loading,
});

const initialState = {};
const store = configureStore(initialState);

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/about" component={LoadableComponent} />
        <Route path="/test" component={TestContainer} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
