import { TouchableOpacityProps } from 'react-native';
import { CardContainer } from './card.style';

type CardProps = TouchableOpacityProps & {
  cardContent: React.ReactNode;
};

function Card({ cardContent, ...props }: CardProps) {
  return <CardContainer {...props}>{cardContent}</CardContainer>;
}

export default Card;
