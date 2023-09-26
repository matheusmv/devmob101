import { ImageBackground, TouchableOpacity, View, Text, ImageProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from '../styles/shop.style';

type SelectedProduct = {
  id: string;
  image: ImageProps['source'];
  name: string;
  description: string;
  price: string;
  offer: string;
  inOffer: boolean;
};

const productInfo: SelectedProduct = {
  id: '10',
  image: require('../../../assets/images/berserk-vol-10.jpg'),
  name: 'Berserk Vol. 10',
  description:
    'Após descobrir que seus antigos companheiros do Bando do Falcão Branco sofreram uma emboscada e os remanescentes estão sendo caçados, Guts volta para auxiliá-los e descobre um importante plano em andamento...',
  price: 'R$ 34,90',
  offer: '',
  inOffer: false,
};

function Shop() {
  const doNavigation = useNavigation();

  return (
    <View style={styles.conteiner}>
      <ImageBackground style={styles.header} source={productInfo.image} imageStyle={styles.img}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttomHeader}>
            <Icon name="arrow-left" size={23} onPress={() => doNavigation.goBack()} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttomHeader}>
            <Icon name="shopping-cart" size={23} onPress={() => doNavigation.navigate('Cart')} />
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
    </View>
  );
}

export default Shop;
