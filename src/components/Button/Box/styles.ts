import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../contexts/Theme';

const styles = StyleSheet.create({
  boxButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderRadius: 8,
  },
  textButton: {
    color: ThemeColors.white,
    fontSize: 18,
    fontFamily: 'Martel Sans ExtraBold',
  },
});

export default styles;
