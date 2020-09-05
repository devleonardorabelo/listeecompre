import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

import { CircularButton } from './components/Button';
import { ThemeFontSizes } from './constants/Theme';
import { Title } from './components/Text';
import { View } from 'react-native';

const RoutesStack = createStackNavigator();

const Routes: React.FC = () => (
  <RoutesStack.Navigator>
    <RoutesStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => (
          <View style={{ marginBottom: -8 }}>
            <Title size={ThemeFontSizes.H3}>MINHAS LISTAS</Title>
          </View>
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
        },
        headerRight: () => <CircularButton action={() => {}} icon="menu" />,
      }}
    />
  </RoutesStack.Navigator>
);

export default Routes;
