import { View, StyleSheet, TextInput } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import Button from '../../../shared/components/button/Button';
import Header from '../../../shared/components/header/Header';
import { useProductRegistration } from '../hooks/useProductRegistration';
import { useNavigation } from '@react-navigation/native';

function ProductRegistration() {
  const {
    productName,
    productPrice,
    productImage,
    selectedCategory,
    categories,
    handleOnChangeProductName,
    handleOnChangeProductPrice,
    handleOnChangeProductImage,
    handleOnChangeProductCategory,
    submitProductRegistration,
  } = useProductRegistration();

  const doNavigation = useNavigation();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={productName}
          onChange={handleOnChangeProductName}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço do Produto"
          value={productPrice}
          onChange={handleOnChangeProductPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={productImage}
          onChange={handleOnChangeProductImage}
        />
        <Picker
          style={styles.input}
          selectedValue={selectedCategory}
          onValueChange={(value) => handleOnChangeProductCategory(value)}
        >
          <Picker.Item label="Selecione a Categoria" value="" />
          {categories.map((category) => (
            <Picker.Item key={category.id} label={category.name} value={category} />
          ))}
        </Picker>
        <Button
          title="Cadastrar Produto"
          margin="10px"
          onPress={async () => {
            await submitProductRegistration(() => doNavigation.navigate('Home'));
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
});

export default ProductRegistration;
