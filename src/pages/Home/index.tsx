import React from 'react';
import { View } from 'react-native';
import { ThemeColors, ThemeFontSizes } from '../../contexts/Theme';

import RoundedButton from '../../components/Button/Rounded';
import CircularButton from '../../components/Button/Circular';
import BoxButton from '../../components/Button/Box';
import { Text, Title } from '../../components/Text';

const Home: React.FC = () => {
  return (
    <View>
      <RoundedButton title="Confirmar" action={() => console.log('iuuu')} />
      <RoundedButton title="Cancelar" disabled={true} action={() => console.log('iuuu')} />
      <CircularButton icon="plus" action={() => {}} />
      <CircularButton icon="check" action={() => {}} />
      <CircularButton
        iconBackground={ThemeColors.green}
        iconColor={ThemeColors.white}
        icon="chevron-right"
        action={() => {}}
        disabled={true}
      />
      <CircularButton icon="chevron-right" action={() => {}} />
      <BoxButton icon="plus" action={() => {}} title="Adicionar Categoria" />
      <Title size={ThemeFontSizes.H1}>TÍTULO 1</Title>
      <Title size={ThemeFontSizes.H2}>Título 2</Title>
      <Title size={ThemeFontSizes.H3}>Título 3</Title>
      <Text>Texto</Text>
      <Text semiBold>Texto</Text>
    </View>
  );
};

export default Home;
