import { TextProps as TextPropsNative } from 'react-native';
import { ContainerText } from './text.style';

type TextProps = TextPropsNative & {
  color?: string;
  fontSize?: string;
};

function Text({ color, ...props }: TextProps) {
  return <ContainerText fontSize="18px" color={color} {...props} />;
}

export default Text;
