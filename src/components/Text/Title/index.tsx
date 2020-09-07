import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  size: number;
  style?: React.ReactNode;
}

const Title: React.FC<Props> = ({ children, size, style }) => (
  <Text style={[styles.title, { fontSize: size, marginBottom: -size + 8 }, style]}>{children}</Text>
);

export default Title;
