import { ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from '../styles/shop.style';
import { useEffect, useState } from 'react';
import { ProductInfo, getProductById } from '../../../store/db';

function renderProductInfo(
  productInfo: ProductInfo | null,
  goBack: () => void,
  navigate: (module: string) => void,
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
          <TouchableOpacity style={styles.buttomHeader}>
            <Icon name="shopping-cart" size={23} onPress={() => navigate('Cart')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.nameProduct}>{productInfo.name}</Text>
        <View style={styles.rowBody}>
          <Text style={styles.rate}>nota</Text>
          <View style={styles.rowIncraseBtn}>
            <TouchableOpacity style={[styles.btnIncrase, { backgroundColor: 'rgba(0,0,0,0.1)' }]}>
              <Icon name="minus" size={14} color="#0f1111" />
            </TouchableOpacity>
            <Text style={styles.valueIncrase}> 1 </Text>
            <TouchableOpacity style={[styles.btnIncrase, { backgroundColor: 'rgba(0,0,0,0.8)' }]}>
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
          <Text style={styles.price}>{productInfo.price}</Text>
        </View>
        <TouchableOpacity style={styles.btnCard}>
          <Text style={styles.btnCardText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function Shop() {
  const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);

  const doNavigation = useNavigation();

  useEffect(() => {
    getProductById('1')
      .then(setProductInfo)
      .catch((err: Error) => console.error(err.message));
  }, []);

  return (
    <View style={styles.conteiner}>
      {renderProductInfo(productInfo, doNavigation.goBack, doNavigation.navigate)}
    </View>
  );
}

export default Shop;
