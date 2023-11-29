import { ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import { ParamListBase, RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from '../styles/shop.style';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/cart/reducer';
import { prettyPrice } from '../../../shared/fmt/currency';
import Cart from '../../../shared/components/cart/Cart';
import { ProductInfo, fetchProductById } from '../../../api/vendas-online-backend';
import Header from '../../../shared/components/header/Header';
import { BLACK } from '../../../shared/styles/colors';

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
    return (
      <>
        <Header />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Produto indisponível</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <ImageBackground
        style={styles.header}
        source={require('../../../assets/images/image_not_found.png')}
        imageStyle={styles.img}
      >
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttomHeader}>
            <Icon name="arrow-left" size={23} color={BLACK} onPress={() => goBack()} />
          </TouchableOpacity>
          <Cart
            style={styles.buttomHeader}
            color={BLACK}
            size={23}
            onPress={() => navigate('Cart')}
          />
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.nameProduct}>{productInfo.name}</Text>
        <View style={styles.rowBody}>
          <Text style={styles.rate}>
            4.7/5 <Icon name="star" size={16} color={'#ffa500'} />
          </Text>
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
        <Text style={styles.description}>{''}</Text>
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
    fetchProductById(id)
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
