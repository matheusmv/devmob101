import { TextInputProps as TextInputPropsNative } from 'react-native';
import { ContainerInput } from './input.style';
import { BLACK } from '../../styles/colors';

type InputProps = TextInputPropsNative & {
  margin?: string;
};

function Input({ margin, ...props }: InputProps) {
  return <ContainerInput margin={margin} {...props} placeholderTextColor={BLACK} />;
}

export default Input;
