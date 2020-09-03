import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

const RoutesStack = createStackNavigator();

const Routes: React.FC = () => (
  <RoutesStack.Navigator>
    <RoutesStack.Screen
      name="Home"
      component={Home}
      options={{
        headerStyle: {
          backgroundColor: '#123456',
        },
      }}
    />
  </RoutesStack.Navigator>
);

export default Routes;
