import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

import { ThemeFontSizes, ThemeColors } from './constants/Theme';
import { CircularButton } from './components/Button';
import { Title } from './components/Text';

const RoutesStack = createStackNavigator();

const Routes: React.FC = () => (
  <RoutesStack.Navigator>
    <RoutesStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Title size={ThemeFontSizes.H3}>MINHAS LISTAS</Title>,
        headerRight: () => <CircularButton action={() => {}} icon="menu" />,
        headerLeft: () => <CircularButton action={() => {}} icon="menu" />,
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
        },
        headerRightContainerStyle: {
          paddingRight: 8,
        },
        headerLeftContainerStyle: {
          paddingLeft: 8,
        },
        cardStyle: {
          backgroundColor: ThemeColors.lightBlue3,
        },
      }}
    />
  </RoutesStack.Navigator>
);

export default Routes;
