import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemeColors } from '../../../constants/Theme';

import styles from './styles';

interface Props {
  title: string;
  iconBackground?: string;
  action: () => void;
  disabled?: boolean;
}

const RoundedButton: React.FC<Props> = ({ title, iconBackground, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    disabled={disabled}
    style={[
      styles.button,
      !disabled ? { backgroundColor: iconBackground } : { backgroundColor: ThemeColors.lightGray2 },
    ]}>
    <Text style={styles.textButton}>{title}</Text>
  </TouchableOpacity>
);

RoundedButton.defaultProps = {
  disabled: false,
  iconBackground: ThemeColors.green,
};

export default RoundedButton;
