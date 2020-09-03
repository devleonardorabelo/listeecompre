import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeColors } from '../../../contexts/Theme';

import styles from './styles';

interface Props {
  title: string;
  action: () => void;
  disabled?: boolean;
}

const RoundedButton: React.FC<Props> = ({ title, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    disabled={disabled}
    style={[
      styles.button,
      !disabled ? { backgroundColor: ThemeColors.green } : { backgroundColor: ThemeColors.gray },
    ]}>
    <Text style={styles.textButton}>{title}</Text>
  </TouchableOpacity>
);

RoundedButton.defaultProps = {
  disabled: false,
};

export default RoundedButton;
