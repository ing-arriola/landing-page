import React from "react";
import "./sass/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Layout from "./Components/Hoc/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
