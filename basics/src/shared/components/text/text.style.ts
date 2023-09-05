import style from 'styled-components/native';

type ContainerTextProps = {
  color?: string;
  fontSize?: string;
};

export const ContainerText = style.Text<ContainerTextProps>`
  font-size: ${(props) => props?.fontSize};

  ${(props) => (props.color ? `color: ${props.color};` : '')}
`;
