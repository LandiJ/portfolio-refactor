import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/home" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
