import React from 'react';
import { Text as NormalText } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  semiBold?: boolean;
  style?: React.ReactNode;
}

const Text: React.FC<Props> = ({ children, semiBold, style }) => (
  <NormalText style={[!semiBold ? styles.regular : styles.semiBold, style]}>{children}</NormalText>
);

Text.defaultProps = {
  semiBold: false,
};

export default Text;
