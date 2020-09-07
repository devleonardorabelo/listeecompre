/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import styles from './styles';

import { TextInput as TInput } from 'react-native';

interface Props {
  action: (e: any) => void;
  style?: React.ReactNode;
}

const TextInput: React.FC<Props> = ({ action, style }) => (
  <TInput onChangeText={action} style={[styles.textInput, style]} />
);

export default TextInput;
