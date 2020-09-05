import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  semiBold?: boolean;
}

const Title: React.FC<Props> = ({ children, semiBold }) => (
  <Text style={!semiBold ? styles.regular : styles.semiBold}>{children}</Text>
);

Title.defaultProps = {
  semiBold: false,
};

export default Title;
