import React from 'react';


import MainApp from './app/index';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
     <StatusBar hidden={true} />
      <MainApp />
    </>
  );
};

export default App;
