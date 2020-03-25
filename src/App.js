import React from 'react';
import './App.css';

import Covid from './container/Covid/Covid';
import Layout from './hoc/Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Covid />
      </Layout>
    </div>
  );
};

export default App;
