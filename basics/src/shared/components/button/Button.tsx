import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer } from './button.style';
import Text from '../text/Text';
import { WHITE } from '../../styles/colors';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  margin?: string;
};

function Button({ margin, title, ...props }: ButtonProps) {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text color={`${WHITE}`}>{title}</Text>
    </ButtonContainer>
  );
}

export default Button;
