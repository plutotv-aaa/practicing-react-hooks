import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UseEffectGuide } from './pages/UseEffectGuide';
import { UseReducerGuide } from './pages/UseReducerGuide';
import { StyledNav as Nav } from './application';
import { UseEventListenerGuide } from './pages/UseEventListenerGuide';
import { UseRefGuide } from './pages/UseRefGuide';
import { Rendering } from './pages/Rendering';
import { ReactThree } from './pages/ReactThree';
import { CSSGrid } from './pages/CSSGrid';

import './App.css';

export function App(props) {
  return (
    <Router>
      <Nav />
      <article>
        <Switch>
          <Route exact path="/" component={Rendering} />
          <Route path="/use-effect" component={UseEffectGuide} />
          <Route path="/use-reducer" component={UseReducerGuide} />
          <Route path="/use-ref" component={UseRefGuide} />
          <Route path="/use-event-listener" component={UseEventListenerGuide} />
          <Route path="/react-three" component={ReactThree} />
          <Route path="/css-grid" component={CSSGrid} />
        </Switch>
      </article>
    </Router>
  );
}
