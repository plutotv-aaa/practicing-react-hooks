import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UseEffectGuide } from './pages/use-effect-guide';
import { StyledNav as Nav } from './application';
import { UseRefGuide } from './pages/use-ref-guide';
import { Rendering } from './pages/rendering';

import './App.css';

export function App(props) {
  return (
    <Router>
      <Nav />
      <article>
        <Switch>
          <Route exact path="/" component={Rendering} />
          <Route path="/use-effect" component={UseEffectGuide} />
          <Route path="/use-ref" component={UseRefGuide} />
        </Switch>
      </article>
    </Router>
  );
}
