import styled from 'styled-components/native';

type InputContainerProps = {
  margin?: string;
};

export const ContainerInput = styled.TextInput<InputContainerProps>`
  width: 100%;
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: #fbf1c7;
  color: #1d2021;
  border-radius: 4px;

  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;
