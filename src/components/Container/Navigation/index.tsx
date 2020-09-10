/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

import { Title } from '../../Text';
import { ThemeFontSizes } from '../../../constants/Theme';
import { CircularButton } from '../../Button';

interface Props {
  title: string;
  action: () => void;
  style?: React.ReactNode;
}

const Navigation: React.FC<Props> = ({ title, action, style }) => (
  <TouchableOpacity style={[styles.navigation, style]} onPress={action}>
    <Title size={ThemeFontSizes.H3}>{title}</Title>
    <CircularButton icon="chevron-right" action={action} />
  </TouchableOpacity>
);

export default Navigation;
