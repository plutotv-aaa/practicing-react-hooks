import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UseEffectGuide } from './pages/UseEffectGuide';
import { UseReducerGuide } from './pages/UseReducerGuide';
import { StyledNav as Nav } from './application';
import { UseEventListenerGuide } from './pages/UseEventListenerGuide';
import { UseRefGuide } from './pages/UseRefGuide';
import { Rendering } from './pages/Rendering';
import { ReactThree } from './pages/ReactThree';

import './App.css';

export function App(props) {
  return (
    <Router>
      <Nav />
      <article>
        <Switch>
          <Route exact path="/">
            <Rendering />
          </Route>
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
          <Route path="/react-three">
            <ReactThree />
          </Route>
        </Switch>
      </article>
    </Router>
  );
}
