import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import './index.css';
import * as serviceWorker from './serviceWorker';

import { store } from "./helpers";
import { App } from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
serviceWorker.unregister();
