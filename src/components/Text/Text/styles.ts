import { StyleSheet } from 'react-native';
import { ThemeColors, ThemeFontSizes } from '../../../constants/Theme';

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Martel Sans Regular',
    letterSpacing: 0.04,
    color: ThemeColors.gray,
    fontSize: ThemeFontSizes.P,
    lineHeight: ThemeFontSizes.P * 0.32,
    paddingTop: ThemeFontSizes.P * 0.75,
  },
  semiBold: {
    fontFamily: 'Martel Sans SemiBold',
    letterSpacing: 0.04,
    color: ThemeColors.gray,
    fontSize: ThemeFontSizes.P,
    lineHeight: ThemeFontSizes.P * 0.32,
    paddingTop: ThemeFontSizes.P * 0.75,
  },
});

export default styles;
