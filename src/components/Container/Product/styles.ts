import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../constants/Theme';

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    marginBottom: 8,
    alignItems: 'center',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productBadge: {
    backgroundColor: ThemeColors.lightBlue2,
    paddingBottom: 4,
    paddingTop: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    minWidth: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 16,
  },
});

export default styles;
