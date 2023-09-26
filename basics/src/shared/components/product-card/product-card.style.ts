import styled from 'styled-components/native';

export const ProductCardImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 40%;
  height: 100%;
`;

export const ProductCardContent = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const ProductCardTitle = styled.Text`
  color: #0f1111;
  font-size: 20px;
  font-weight: 600;
  flex-shrink: 1;
  margin-bottom: 5px;
`;

export const ProductCardDescription = styled.Text`
  flex: 1;
  font-size: 10px;
  color: #888c8c;
  text-align: justify;
  margin-bottom: 5px;
`;

export const ProductCardPrice = styled.Text`
  color: #0f1111;
  font-size: 16px;
  font-weight: 600;
`;

export const ProductCardOffer = styled.Text`
  color: #fe8019;
  font-size: 13px;
  font-weight: 500;
  text-decoration-line: line-through;
`;

export const Favorite = styled.TouchableOpacity`
  width: 10%;
  height: 15%;
  position: absolute;
  top: 2%;
  right: 2%;
`;
