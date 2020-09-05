import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../constants/Theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 36,
  },
  textButton: {
    color: ThemeColors.white,
    fontSize: 18,
    fontFamily: 'Martel Sans ExtraBold',
  },
});

export default styles;
