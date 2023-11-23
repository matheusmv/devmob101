import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { CardContainer } from '../card/card.style';
import {
  Favorite,
  ProductCardContent,
  ProductCardDescription,
  ProductCardImage,
  ProductCardOffer,
  ProductCardPrice,
  ProductCardTitle,
} from './product-card.style';

import Icon from 'react-native-vector-icons/FontAwesome5';

type ProductCardProps = TouchableOpacityProps & {
  image: string;
  title: string;
  description: string;
  price: string;
  offer: string;
  inOffer: boolean;
};

const getImage = (img: string): ImageSourcePropType => {
  return require('../../../assets/images/image_not_found.png');
};

function ProductCard({
  image,
  title,
  description,
  price,
  offer,
  inOffer,
  ...props
}: ProductCardProps) {
  return (
    <CardContainer {...props}>
      <ProductCardImage source={getImage(image)} />
      <ProductCardContent>
        <ProductCardTitle>{title}</ProductCardTitle>
        <ProductCardDescription>{description}</ProductCardDescription>
        <ProductCardPrice>{price}</ProductCardPrice>
        {inOffer ? <ProductCardOffer>{offer}</ProductCardOffer> : <></>}
        <Favorite>
          <Icon name="star" size={16} color="#888c8c" />
        </Favorite>
      </ProductCardContent>
    </CardContainer>
  );
}

export default ProductCard;
