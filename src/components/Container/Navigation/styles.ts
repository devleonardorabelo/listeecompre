import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../constants/Theme';

const styles = StyleSheet.create({
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: ThemeColors.lightGray3,
    borderBottomWidth: 1,
  },
});

export default styles;
