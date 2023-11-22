import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from '../styles/cart.style';
import { SeparatorView } from '../../../shared/components/separator/separator.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../../store';
import { ProductInfo } from '../../../api/db';
import Button from '../../../shared/components/button/Button';
import { ShopCart, addProduct, removeProduct } from '../../../store/cart/reducer';
import { prettyPrice } from '../../../shared/fmt/currency';

function renderCartItems(
  items: ShopCart['products'],
  addOne: (p: ProductInfo) => void,
  remOne: (p: ProductInfo) => void,
  remove: (p: ProductInfo) => void,
): React.JSX.Element {
  if (items.length <= 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Seu carrinho esta vazio!</Text>
      </View>
    );
  }

  return (
    <FlatList
      ItemSeparatorComponent={() => <SeparatorView style={styles.divider} />}
      data={items}
      renderItem={({ item }) => (
        <View style={styles.productCardContainer}>
          <Image style={styles.imageProduct} source={item.product.image} />
          <View style={styles.productDetails}>
            <View style={styles.productTitleContainer}>
              <Text style={styles.productTitle}>{item.product.name}</Text>
              <Text style={styles.productPrice}>{`R$ ${prettyPrice(
                item.product.price,
                'pt-BR',
              )}`}</Text>
            </View>
            <View style={styles.actions}>
              <View style={styles.counter}>
                <TouchableOpacity
                  style={styles.decrementButton}
                  onPress={() => remOne(item.product)}
                >
                  <Icon name="minus" size={10} color="#0f1111" />
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addOne(item.product)}>
                  <Icon name="plus" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.trashButton} onPress={() => remove(item.product)}>
                <Icon name="trash" size={14} color={'#b60404'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  );
}

function Cart() {
  const { products, totalPrice } = useSelector((state: RootReducer) => state.cartReducer);

  const doNavigation = useNavigation();

  const dispatch = useDispatch();

  const addOne = (product: ProductInfo) => {
    dispatch(addProduct({ product, quantity: 1 }));
  };

  const remOne = (product: ProductInfo) => {
    dispatch(addProduct({ product, quantity: -1 }));
  };

  const remove = (product: ProductInfo) => {
    dispatch(removeProduct(product));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Carrinho</Text>
            <TouchableOpacity style={styles.backButton} onPress={() => doNavigation.goBack()}>
              <Icon name="arrow-left" size={23} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>{renderCartItems(products, addOne, remOne, remove)}</View>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerHeader}>
            <Text style={styles.footerTitle}>Valor total</Text>
            <Text style={styles.totalCart}>{`R$ ${prettyPrice(totalPrice, 'pt-BR')}`}</Text>
          </View>
          <Button
            title="FINALIZAR PEDIDO"
            onPress={async () => {
              console.log(totalPrice);
            }}
          />
        </View>
      </View>
    </>
  );
}

export default Cart;
