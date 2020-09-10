import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import { Text, CircularButton } from '../../';

interface Props {
  quantity: string;
  title: string;
  price?: string;
  checked?: boolean;
  action: () => void;
}

const Product: React.FC<Props> = ({ quantity, title, price, action }) => {
  return (
    <>
      {price && (
        <Text style={{ marginTop: 4 }} semiBold>
          {title}
        </Text>
      )}
      <View style={styles.productContainer}>
        <View style={styles.productInfo}>
          <View style={styles.productBadge}>
            <Text>{quantity}</Text>
          </View>
          {!price && (
            <Text style={{ marginTop: 4 }} semiBold>
              {title}
            </Text>
          )}
          {price && (
            <View style={styles.productBadge}>
              <Text>{price}</Text>
            </View>
          )}
        </View>
        <CircularButton icon="check" action={action} />
      </View>
    </>
  );
};

export default Product;
