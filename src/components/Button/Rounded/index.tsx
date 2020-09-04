import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeColors } from '../../../contexts/Theme';

import styles from './styles';

interface Props {
  title: string;
  color: string;
  action: () => void;
  disabled?: boolean;
}

const RoundedButton: React.FC<Props> = ({ title, color, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    disabled={disabled}
    style={[
      styles.button,
      !disabled ? { backgroundColor: color } : { backgroundColor: ThemeColors.gray },
    ]}>
    <Text style={styles.textButton}>{title}</Text>
  </TouchableOpacity>
);

RoundedButton.defaultProps = {
  disabled: false,
  color: ThemeColors.green,
};

export default RoundedButton;
