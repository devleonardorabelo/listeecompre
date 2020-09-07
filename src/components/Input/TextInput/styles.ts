import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../constants/Theme';

const styles = StyleSheet.create({
  textInput: {
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: ThemeColors.lightBlue,
    borderRadius: 8,
    borderColor: ThemeColors.blue,
    borderBottomWidth: 1,
    fontFamily: 'Martel Sans SemiBold',
    fontSize: 18,
    color: ThemeColors.darkBlue,
  },
});

export default styles;
