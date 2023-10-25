import { ImageProps, StyleSheet, TouchableOpacityProps } from 'react-native';
import {
  CategoryCardContainer,
  CategoryCardContent,
  CategoryCardImage,
  CategoryCardName,
} from './category-card.style';

type CategoryCardProps = TouchableOpacityProps & {
  image: ImageProps['source'];
  name: string;
};

function CategoryCard({ image, name, ...props }: CategoryCardProps) {
  return (
    <CategoryCardContainer {...props}>
      <CategoryCardContent style={styles.imageCard}>
        <CategoryCardImage source={image} />
      </CategoryCardContent>
      <CategoryCardContent>
        <CategoryCardName>{name}</CategoryCardName>
      </CategoryCardContent>
    </CategoryCardContainer>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    flexGrow: 5,
  },
});

export default CategoryCard;
