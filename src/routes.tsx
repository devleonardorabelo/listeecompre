import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import List from './pages/List';

import { ThemeFontSizes, ThemeColors } from './constants/Theme';
import { CircularButton } from './components/Button';
import { Title } from './components/Text';

const RoutesStack = createStackNavigator();

const Routes: React.FC = () => (
  <RoutesStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        elevation: 0,
      },
      headerRightContainerStyle: {
        paddingRight: 16,
      },
      headerLeftContainerStyle: {
        paddingLeft: 16,
      },
      cardStyle: {
        backgroundColor: ThemeColors.lightBlue3,
      },
    }}>
    <RoutesStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Title size={ThemeFontSizes.H3}>MINHAS LISTAS</Title>,
        headerRight: () => <CircularButton action={() => {}} icon="menu" />,
      }}
    />
    <RoutesStack.Screen
      name="List"
      component={List}
      options={{
        headerTitle: () => (
          <Title size={ThemeFontSizes.H3} noMargin>
            COMPRA DO MÊS
          </Title>
        ),
        headerRight: () => <CircularButton action={() => {}} icon="menu" />,
      }}
    />
  </RoutesStack.Navigator>
);

export default Routes;
