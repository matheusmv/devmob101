import { ViewProps } from 'react-native';
import { SeparatorView } from './separator.style';

export type SeparatorProps = ViewProps & {
  height?: number;
  backgroundColor?: string;
};

function Separator({ height, backgroundColor, ...props }: SeparatorProps) {
  return <SeparatorView height={height} backgroundColor={backgroundColor} {...props} />;
}

export default Separator;
