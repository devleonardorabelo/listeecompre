import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeColors } from '../../../contexts/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface Props {
  icon: string;
  iconColor?: string;
  iconBackground?: string;
  action: () => void;
  disabled?: boolean;
}

const CircularButton: React.FC<Props> = ({ icon, iconBackground, iconColor, action, disabled }) => (
  <TouchableOpacity
    onPress={action}
    disabled={disabled}
    style={[
      styles.circularButton,
      !disabled ? { backgroundColor: iconBackground } : { backgroundColor: ThemeColors.lightGray2 },
    ]}>
    <Icon name={icon} size={24} color={!disabled ? iconColor : ThemeColors.white} />
  </TouchableOpacity>
);

CircularButton.defaultProps = {
  disabled: false,
  iconColor: ThemeColors.blue,
  iconBackground: ThemeColors.lightBlue,
};

export default CircularButton;
