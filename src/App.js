import React, {Fragment} from 'react';

//react-router-dom
import {Route, Switch} from 'react-router-dom';

//Components
import Landing from './components/layout/Landing/Landing';
import Navigation from './components/layout/Navigation/Navigation';
import About from './components/About/About';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Fragment>
      <Navigation />

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/chat' component={Chat} />
      </Switch>
    </Fragment>
  );
}

export default App;
