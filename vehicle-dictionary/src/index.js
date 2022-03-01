import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Manufacturers from "./components/Manufacturers";

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Route path="/App" Component={App} />
    <Route path="/Manufacturers" Component={Manufacturers} /> */}
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
