import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Image,
  ImageProps,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from '../styles/cart.style';

type Product = {
  id: string;
  name: string;
  description: string;
  image: ImageProps['source'];
  price: string;
};

const cartItems: Product[] = [
  {
    id: '1',
    name: 'Berserk Vol. 1',
    description:
      'O misterioso Guts, o "Espadachim Negro", carrega em sua mão mecânica uma enorme espada, e em seu pescoço uma estranha marca que atrai forças demoníacas. Em sua busca por vingança contra um antigo inimigo, nem tudo sai a seu favor, e ele recebe ajuda de uma fantástica criatura.',
    image: require('../../../assets/images/berserk-vol-1.jpg'),
    price: 'R$ 24,90',
  },
  {
    id: '10',
    name: 'Berserk Vol. 10',
    description:
      'Após descobrir que seus antigos companheiros do Bando do Falcão Branco sofreram uma emboscada e os remanescentes estão sendo caçados, Guts volta para auxiliá-los e descobre um importante plano em andamento...',
    image: require('../../../assets/images/berserk-vol-10.jpg'),
    price: 'R$ 34,90',
  },
];

function renderCartItems(items: Product[]): React.JSX.Element {
  if (items.length <= 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Seu carrinho esta vazio!</Text>
      </View>
    );
  }

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      data={items}
      renderItem={({ item }) => (
        <View style={styles.productCardContainer}>
          <Image style={styles.imageProduct} source={item.image} />
          <View style={styles.productDetails}>
            <View style={styles.productTitleContainer}>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <View style={styles.actions}>
              <View style={styles.counter}>
                <TouchableOpacity style={styles.decrementButton}>
                  <Icon name="minus" size={10} color="#0f1111" />
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Icon name="plus" size={10} color="#fff" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.trashButton}>
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
  const doNavigation = useNavigation();

  const getTotal = (items: Product[]): number => {
    return items
      .map((item) => {
        const [type, value] = item.price.split(' ');
        return type === 'R$' ? value.replace(',', '.') : value;
      })
      .map((priceStr) => Number(priceStr))
      .reduce((total, amount) => total + amount, 0.0);
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
          <View style={styles.body}>{renderCartItems(cartItems)}</View>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.footerHeader}>
            <Text style={styles.footerTitle}>Valor total</Text>
            <Text style={styles.totalCart}>{`R$ ${getTotal(cartItems).toFixed(2)}`}</Text>
          </View>
          <TouchableOpacity style={styles.btnConfirmation}>
            <Text style={styles.bntConfirmationText}>FINALIZAR PEDIDO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Cart;
