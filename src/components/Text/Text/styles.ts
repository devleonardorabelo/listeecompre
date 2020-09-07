import { StyleSheet } from 'react-native';
import { ThemeColors, ThemeFontSizes } from '../../../constants/Theme';

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Martel Sans Regular',
    fontSize: ThemeFontSizes.P,
    letterSpacing: 0.04,
    color: ThemeColors.gray,
    marginBottom: -8,
  },
  semiBold: {
    fontFamily: 'Martel Sans SemiBold',
    fontSize: ThemeFontSizes.P,
    letterSpacing: 0.04,
    color: ThemeColors.gray,
    marginBottom: -8,
  },
});

export default styles;
