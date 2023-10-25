import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

type SeparatorViewProps = ViewProps & {
  height?: number;
  backgroundColor?: string;
};

export const SeparatorView = styled.View<SeparatorViewProps>`
  ${(props) => (props.height ? `height: ${props.backgroundColor};` : 'height: 1px;')}
  ${(props) =>
    props.backgroundColor
      ? `backgroundColor: ${props.backgroundColor};`
      : 'backgroundColor: #888c8c;'}
`;
