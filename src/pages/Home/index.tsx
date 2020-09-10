import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Box, Section, Navigation, BoxButton } from '../../components';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Section>
      <Box>
        <Navigation title="COMPRA DO MÊS" action={() => {}} />
        <Navigation title="COMPRA DO MÊS" action={() => {}} />
        <BoxButton
          icon="plus"
          title="Nova lista"
          action={() => {
            navigate('List');
          }}
        />
      </Box>
    </Section>
  );
};

export default Home;
