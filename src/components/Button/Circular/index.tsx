import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeColors } from '../../../contexts/Theme';

import styles from './styles';

interface Props {
  icon: JSX.Element;
  iconColor?: string;
  backgroundColor?: string;
  action: () => void;
  disabled?: boolean;
}

const CircularButton: React.FC<Props> = ({ icon, backgroundColor, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    disabled={disabled}
    style={[styles.circularButton, { backgroundColor: backgroundColor }]}>
    {icon}
  </TouchableOpacity>
);

CircularButton.defaultProps = {
  disabled: false,
  iconColor: ThemeColors.white,
  backgroundColor: ThemeColors.blue,
};

export default CircularButton;
