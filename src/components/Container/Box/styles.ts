import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../constants/Theme';

const styles = StyleSheet.create({
  box: {
    marginBottom: 16,
    backgroundColor: ThemeColors.white,
    borderBottomColor: ThemeColors.lightBlue2,
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
});

export default styles;
