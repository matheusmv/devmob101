import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { ProductInfo, getAllProducts } from '../../../api/db';
import { SeparatorView } from '../../../shared/components/separator/separator.style';

import Header from '../../../shared/components/header/Header';
import ProductCard from '../../../shared/components/product-card/ProductCard';
import { prettyPrice } from '../../../shared/fmt/currency';

const separator = () => <SeparatorView />;

function Home() {
  const [listOfProducts, setListOfProducts] = useState<Array<ProductInfo>>([]);

  const doNavigation = useNavigation();

  useEffect(() => {
    getAllProducts().then(setListOfProducts);
  }, []);

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
            description={item.description}
            price={`R$ ${prettyPrice(item.price, 'pt-BR')}`}
            offer={item.offer ? `R$ ${prettyPrice(item.offer, 'pt-BR')}` : ''}
            inOffer={item.inOffer}
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
