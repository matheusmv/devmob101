import { FlatList, SafeAreaView, View } from 'react-native';
import ProductCard from '../../../shared/components/product-card/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ProductInfo, getAllProducts } from '../../../store/db';

function Home() {
  const [listOfProducts, setListOfProducts] = useState<Array<ProductInfo>>([]);

  const doNavigation = useNavigation();

  useEffect(() => {
    getAllProducts().then(setListOfProducts);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ backgroundColor: '#888c8c', height: 1 }} />}
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
