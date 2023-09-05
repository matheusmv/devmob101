import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer } from './button.style';
import Text from '../text/Text';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  margin?: string;
};

function Button({ margin, title, ...props }: ButtonProps) {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text color="#fbf1c7">{title}</Text>
    </ButtonContainer>
  );
}

export default Button;
