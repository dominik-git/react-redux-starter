import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/index";

import TestElem from "./containers/index";

const initialState = {};
const store = configureStore(initialState);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TestElem />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
