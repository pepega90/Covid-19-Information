import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Covid from './container/Covid/Covid';
import News from './container/News/News';
import Layout from './hoc/Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/news" exact component={News} />
          <Route path="/" exact component={Covid} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
