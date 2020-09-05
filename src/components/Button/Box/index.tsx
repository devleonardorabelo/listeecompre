import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { ThemeColors } from '../../../constants/Theme';
import { Text } from 'react-native';
import CircularButton from '../Circular';

interface Props {
  icon: string;
  title: string;
  iconColor?: string;
  iconBackground?: string;
  backgroundColor?: string;
  action: () => void;
  disabled?: boolean;
}

const BoxButton: React.FC<Props> = ({
  icon,
  title,
  iconColor,
  iconBackground,
  backgroundColor,
  action,
  disabled,
}) => (
  <TouchableOpacity
    onPress={action}
    style={[
      styles.boxButton,
      !disabled
        ? { backgroundColor: backgroundColor }
        : { backgroundColor: ThemeColors.lightGray2 },
    ]}>
    <CircularButton
      icon={icon}
      iconColor={iconColor}
      iconBackground={!disabled ? iconBackground : ThemeColors.lightGray2}
      action={() => {}}
    />
    <Text
      style={[
        styles.textButton,
        !disabled ? { color: iconBackground } : { color: ThemeColors.gray },
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

BoxButton.defaultProps = {
  backgroundColor: ThemeColors.lightBlue,
  iconColor: ThemeColors.white,
  iconBackground: ThemeColors.blue,
};

export default BoxButton;
