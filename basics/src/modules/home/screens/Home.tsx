import { FlatList, SafeAreaView } from 'react-native';
import ProductCard from '../../../shared/components/product-card/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ProductInfo, getAllProducts } from '../../../api/db';
import { SeparatorView } from '../../../shared/components/separator/separator.style';
import Header from '../../../shared/components/header/Header';

const separator = () => <SeparatorView />;

function Home() {
  const [listOfProducts, setListOfProducts] = useState<Array<ProductInfo>>([]);

  const doNavigation = useNavigation();

  useEffect(() => {
    getAllProducts().then(setListOfProducts);
  }, []);

  return (
    <SafeAreaView>
      <Header />
      <FlatList
        ItemSeparatorComponent={separator}
        data={listOfProducts}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
            offer={item.offer}
            inOffer={item.inOffer}
            onPress={() => doNavigation.navigate('Shop')}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Home;
