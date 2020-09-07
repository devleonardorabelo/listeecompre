/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import styles from './styles';
import { View } from 'react-native';

interface Props {
  style?: React.ReactNode;
  children: JSX.Element;
}

const Box: React.FC<Props> = ({ style, children }) => (
  <View style={[styles.box, style]}>{children}</View>
);

export default Box;
