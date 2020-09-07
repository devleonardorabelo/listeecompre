/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import styles from './styles';
import { View } from 'react-native';

interface Props {
  style?: React.ReactNode;
  children: JSX.Element;
}

const Section: React.FC<Props> = ({ style, children }) => (
  <View style={[styles.section, style]}>{children}</View>
);

export default Section;
