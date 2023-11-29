import styled from 'styled-components/native';
import { BLACK, SECONDARY } from '../../styles/colors';

type InputContainerProps = {
  margin?: string;
};

export const ContainerInput = styled.TextInput<InputContainerProps>`
  width: 100%;
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${SECONDARY};
  color: ${BLACK};
  border-radius: 4px;
  font-size: 16px;

  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;
