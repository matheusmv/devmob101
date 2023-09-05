import { TextInputProps as TextInputPropsNative } from 'react-native';
import { ContainerInput } from './input.style';

type InputProps = TextInputPropsNative & {
  margin?: string;
};

function Input({ margin, ...props }: InputProps) {
  return <ContainerInput margin={margin} {...props} />;
}

export default Input;
