import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../../store';
import { ShopCart } from '../../../store/cart/reducer';
import Text from '../text/Text';
import { PRIMARY } from '../../styles/colors';

type CartProps = {
  style: TouchableOpacityProps['style'];
  size: number;
  color?: string;
  onPress?: () => void;
};

const getNumberOfProducts = (products: ShopCart['products']): number => {
  return products.reduce((total, item) => total + item.quantity, 0);
};

function Cart({ style, size, color, onPress }: CartProps) {
  const { products } = useSelector((state: RootReducer) => state.cartReducer);

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles.container}>
        <Icon name="shopping-cart" size={size} color={color} />
        {getNumberOfProducts(products) > 0 ? <Text style={styles.text}>{}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  text: {
    position: 'absolute',
    marginTop: 18,
    marginLeft: 18,
    height: 10,
    width: 10,
    fontSize: 13,
    textAlign: 'center',
    borderRadius: 100,
    color: 'rgba(0, 0, 0, 0.8)',
    backgroundColor: PRIMARY,
  },
});

export default Cart;
