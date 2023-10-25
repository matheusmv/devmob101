import { FlatList, ImageProps, SafeAreaView, StyleSheet } from 'react-native';
import CategoryCard from '../../../shared/components/category-card/CategoryCard';

type CategoryInfo = {
  id: string;
  image: ImageProps['source'];
  name: string;
};

const listOfCategories: CategoryInfo[] = [
  { id: '1', image: require('../../../assets/images/berserk-vol-1.jpg'), name: 'Ação' },
  { id: '2', image: require('../../../assets/images/berserk-vol-1.jpg'), name: 'Aventura' },
  { id: '3', image: require('../../../assets/images/berserk-vol-1.jpg'), name: 'Comédia' },
  { id: '4', image: require('../../../assets/images/berserk-vol-1.jpg'), name: 'Shounen' },
];

function Category() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={listOfCategories}
        renderItem={({ item }) => <CategoryCard image={item.image} name={item.name} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Category;
