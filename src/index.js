import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
const store = configureStore();

console.log("fkknfnf",store.getState());

store.subscribe(it=>{
  console.log(it,store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={customHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();