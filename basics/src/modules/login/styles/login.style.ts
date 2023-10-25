import styled from 'styled-components/native';
import { BLACK, WHITE } from '../../../shared/styles/colors';

export const ContainerPlugin = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${WHITE};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const TitleLogin = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${BLACK};
`;
