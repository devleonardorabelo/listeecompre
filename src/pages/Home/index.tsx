import React from 'react';
import { View } from 'react-native';
import RoundedButton from '../../components/Button/Rounded';

const Home: React.FC = () => {
  return (
    <View>
      <RoundedButton title="Confirmar" action={() => console.log('iuuu')} />
      <RoundedButton title="Cancelar" disabled={true} action={() => console.log('iuuu')} />
    </View>
  );
};

export default Home;
