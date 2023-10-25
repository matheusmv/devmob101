import styled from 'styled-components/native';

export const CategoryCardContainer = styled.TouchableOpacity`
  width: 150px;
  height: 200px;
  background-color: #ccc;
  padding: 20px 20px 10px 20px;
  margin: 15px;
`;

export const CategoryCardImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

export const CategoryCardContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CategoryCardName = styled.Text`
  color: #0f1111;
  font-size: 18px;
  font-weight: bold;
`;
