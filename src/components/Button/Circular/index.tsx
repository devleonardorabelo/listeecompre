import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeColors } from '../../../contexts/Theme';

import styles from './styles';

interface Props {
  icon: JSX.Element;
  color?: string;
  action: () => void;
  disabled?: boolean;
}

const CircularButton: React.FC<Props> = ({ icon, color, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    disabled={disabled}
    style={[styles.circularButton, { backgroundColor: color }]}>
    {icon}
  </TouchableOpacity>
);

CircularButton.defaultProps = {
  disabled: false,
  color: ThemeColors.blue,
};

export default CircularButton;
