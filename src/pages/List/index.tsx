import React from 'react';

import { Box, Section, Text, Title, Product } from '../../components';
import { ThemeFontSizes } from '../../constants/Theme';

const List: React.FC = () => {
  return (
    <Section>
      <Box>
        <Text semiBold>Saldo disponível</Text>
        <Title size={ThemeFontSizes.H1}>R$ 547,74</Title>
        <Text semiBold>Utilizado: R$547,74</Text>
      </Box>
      <Box>
        <Title size={ThemeFontSizes.H2}>Alimentos</Title>
        <Product quantity="1" title="Achocolatado em pó" action={() => {}} />
        <Product price="R$12,20" quantity="1" title="Achocolatado em pó" action={() => {}} />
        <Product quantity="1" title="Achocolatado em pó" action={() => {}} />
        <Product quantity="1" title="Achocolatado em pó" action={() => {}} />
      </Box>
    </Section>
  );
};

export default List;
