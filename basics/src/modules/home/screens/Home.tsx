import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { SeparatorView } from '../../../shared/components/separator/separator.style';

import Header from '../../../shared/components/header/Header';
import ProductCard from '../../../shared/components/product-card/ProductCard';
import { prettyPrice } from '../../../shared/fmt/currency';
import { ProductInfo, fetchAllProducts } from '../../../api/vendas-online-backend';

const separator = () => <SeparatorView />;

function Home() {
  const [listOfProducts, setListOfProducts] = useState<Array<ProductInfo>>([]);

  const doNavigation = useNavigation();

  useEffect(() => {
    fetchAllProducts()
      .then(setListOfProducts)
      .catch((err) => console.error(err));
  }, [listOfProducts]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        ItemSeparatorComponent={separator}
        data={listOfProducts}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            title={item.name}
            description={''}
            price={`R$ ${prettyPrice(item.price, 'pt-BR')}`}
            offer={''}
            inOffer={false}
            onPress={() => doNavigation.navigate('Shop', { id: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default Home;
