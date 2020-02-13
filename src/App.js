import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Playground from "./SimpleExamples/Playground0";
import { UseEffectGuide } from "./pages/UseEffectGuide";
import { UseEventListenerGuide } from "./pages/UseEventListenerGuide";
import { UseRefGuide } from "./pages/UseRefGuide";
import { Rendering } from "./pages/Rendering";
import "./App.css";

export default () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/use-effect">useEffect</Link>
      <Link to="/use-ref">useRef</Link>
      <Link to="/use-event-listener">useEventListener</Link>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/">
        <Rendering />
      </Route>
      <Route path="/use-effect">
        <UseEffectGuide />
      </Route>
      <Route path="/use-ref">
        <UseRefGuide />
      </Route>
      <Route path="/use-event-listener">
        <UseEventListenerGuide />
      </Route>
    </Switch>
  </Router>
);
