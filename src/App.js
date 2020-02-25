import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UseEffectGuide } from "./pages/UseEffectGuide";
import { UseReducerGuide } from "./pages/UseReducerGuide";
import { Nav } from "./application";
import { UseEventListenerGuide } from "./pages/UseEventListenerGuide";
import { UseRefGuide } from "./pages/UseRefGuide";
import { Rendering } from "./pages/Rendering";
import "./App.css";

export default () => (
  <Router>
    <Nav />
    <article>
      <Switch>
        <Route path="/use-effect">
          <UseEffectGuide />
        </Route>
        <Route path="/use-reducer">
          <UseReducerGuide />
        </Route>
        <Route path="/use-ref">
          <UseRefGuide />
        </Route>
        <Route path="/use-event-listener">
          <UseEventListenerGuide />
        </Route>
        <Route path="/">
          <Rendering />
        </Route>
      </Switch>
    </article>
  </Router>
);
