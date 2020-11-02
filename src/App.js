import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./sass/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Layout from "./Components/Hoc/Layout";

function App() {
  let routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
