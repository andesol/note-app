import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LoginProvider } from "./context/LoginContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <LoginProvider>
      <App />
    </LoginProvider>
  </Router>,
  document.getElementById("root")
);
