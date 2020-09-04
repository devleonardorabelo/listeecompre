import React from 'react';
import { View } from 'react-native';
import RoundedButton from '../../components/Button/Rounded';
import CircularButton from '../../components/Button/Circular';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeColors } from '../../contexts/Theme';

const Home: React.FC = () => {
  return (
    <View>
      <RoundedButton title="Confirmar" action={() => console.log('iuuu')} />
      <RoundedButton title="Cancelar" disabled={true} action={() => console.log('iuuu')} />
      <CircularButton
        icon={<Icon name="plus" size={24} color={ThemeColors.white} />}
        action={() => {}}
      />
      <CircularButton
        backgroundColor={ThemeColors.lightGray2}
        icon={<Icon name="chevron-right" size={24} color={ThemeColors.white} />}
        action={() => {}}
      />
    </View>
  );
};

export default Home;
