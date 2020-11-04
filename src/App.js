import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Layout from "./Components/Hoc/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
