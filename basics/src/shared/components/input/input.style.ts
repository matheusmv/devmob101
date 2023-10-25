import styled from 'styled-components/native';
import { GRAY_MEDIUM, SECONDARY } from '../../styles/colors';

type InputContainerProps = {
  margin?: string;
};

export const ContainerInput = styled.TextInput<InputContainerProps>`
  width: 100%;
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${SECONDARY};
  color: ${GRAY_MEDIUM};
  border-radius: 4px;

  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;
