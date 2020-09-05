import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  size: number;
}

const Title: React.FC<Props> = ({ children, size }) => (
  <Text style={[styles.title, { fontSize: size }]}>{children}</Text>
);

export default Title;
