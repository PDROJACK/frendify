import React from 'react';
import Landing from './Landing';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Profile from './Profile';
// import { render } from '@testing-library/react';

const App = () => {

  return (
  <Router>
    <Switch>
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Landing} />
      <Route path="/chat" component={Chat} />
      <Route path="/" render={()=>{ return (<div>404</div>) }} />
    </Switch>
  </Router>
  );
};

export default App;
