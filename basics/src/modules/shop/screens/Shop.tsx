import { ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from '../styles/shop.style';
import { useEffect, useState } from 'react';
import { ProductInfo, getProductById } from '../../../api/db';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/cart/reducer';
import { prettyPrice } from '../../../shared/fmt/currency';
import Cart from '../../../shared/components/cart/Cart';

function renderProductInfo(
  productInfo: ProductInfo | null,
  goBack: () => void,
  navigate: (module: string) => void,
  quantity: number,
  addOne: () => void,
  subOne: () => void,
  submit: () => void,
): React.JSX.Element {
  if (!productInfo) {
    return <Text>Produto indisponível</Text>;
  }

  return (
    <>
      <ImageBackground style={styles.header} source={productInfo.image} imageStyle={styles.img}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttomHeader}>
            <Icon name="arrow-left" size={23} onPress={() => goBack()} />
          </TouchableOpacity>
          <Cart style={styles.buttomHeader} size={23} onPress={() => navigate('Cart')} />
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.nameProduct}>{productInfo.name}</Text>
        <View style={styles.rowBody}>
          <Text style={styles.rate}>Quantidade</Text>
          <View style={styles.rowIncraseBtn}>
            <TouchableOpacity
              style={[styles.btnIncrase, { backgroundColor: 'rgba(0,0,0,0.1)' }]}
              onPress={subOne}
            >
              <Icon name="minus" size={14} color="#0f1111" />
            </TouchableOpacity>
            <Text style={styles.valueIncrase}>{quantity}</Text>
            <TouchableOpacity
              style={[styles.btnIncrase, { backgroundColor: 'rgba(0,0,0,0.8)' }]}
              onPress={addOne}
            >
              <Icon name="plus" size={14} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.titleSubSection}>Descrição</Text>
        <Text style={styles.description}>{productInfo.description}</Text>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.titlePrice}>Preço</Text>
          <Text style={styles.price}>{`R$ ${prettyPrice(productInfo.price, 'pt-BR')}`}</Text>
        </View>
        <TouchableOpacity style={styles.btnCard} onPress={submit}>
          <Text style={styles.btnCardText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function Shop() {
  const [quantity, setQuantity] = useState<number>(1);
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);

  const doNavigation = useNavigation();
  const {
    params: { id },
  } = useRoute<RouteProp<ParamListBase> & { params: { id: number } }>();

  const dispatch = useDispatch();

  const addOne = () => {
    setQuantity((q) => q + 1);
  };

  const subOne = () => {
    if (quantity > 0) {
      setQuantity((q) => q - 1);
    }
  };

  const addProductInShopCart = () => {
    if (quantity > 0) {
      dispatch(
        addProduct({
          product: productInfo as ProductInfo,
          quantity: quantity,
        }),
      );
    }
  };

  useEffect(() => {
    getProductById(id)
      .then(setProductInfo)
      .catch((err: Error) => console.error(err.message));
  }, [id]);

  return (
    <View style={styles.container}>
      {renderProductInfo(
        productInfo,
        doNavigation.goBack,
        doNavigation.navigate,
        quantity,
        addOne,
        subOne,
        addProductInShopCart,
      )}
    </View>
  );
}

export default Shop;
