import React from 'react';
import {ToastContainer} from "react-toastify"
import {Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from "./routes"
import history from "./services/history"

import GlobalStyles from "./styles/global"

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
