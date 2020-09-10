import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  size: number;
  style?: React.ReactNode;
  noMargin?: boolean;
}

const Title: React.FC<Props> = ({ children, size, style, noMargin }) => (
  <Text
    style={[
      styles.title,
      {
        fontSize: size,
        lineHeight: size * 0.62,
        paddingTop: size * 0.86,
      },
      style,
      noMargin && { lineHeight: size * 0.1 },
    ]}>
    {children}
  </Text>
);

export default Title;
