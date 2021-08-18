import React from 'react';
import {StatusBar} from 'react-native';

import MainApp from './app/index';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <MainApp />
    </>
  );
};

export default App;
