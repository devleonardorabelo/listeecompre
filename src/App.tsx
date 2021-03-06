import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
