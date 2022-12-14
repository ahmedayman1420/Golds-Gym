// ========---======== < Basic-Elements > ========---======== //
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ========---======== < Bootstrap-Css > ========---======== //
import "bootstrap/dist/css/bootstrap.min.css";

// ========---======== < Pagination-Css > ========---======== //
import "rc-pagination/assets/index.css";

// ========---======== < React-Router-Dom > ========---======== //
import { BrowserRouter } from "react-router-dom";

// ========---======== < React-Router-Dom > ========---======== //
import { store } from "./Redux/Store/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
