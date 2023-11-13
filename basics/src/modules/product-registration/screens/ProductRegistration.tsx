import { useState } from 'react';

import { View, StyleSheet, TextInput } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import Button from '../../../shared/components/button/Button';
import Header from '../../../shared/components/header/Header';

const categories = ['Electronics', 'Clothing', 'Books', 'Toys'];

function ProductRegistration() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleRegistration = () => {
    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    console.log('Product Image:', productImage);
    console.log('Selected Category:', selectedCategory);
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TextInput
          placeholder="Nome do Produto"
          value={productName}
          onChangeText={(text) => setProductName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Preço do Produto"
          value={productPrice}
          onChangeText={(text) => setProductPrice(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="URL da Imagem"
          value={productImage}
          onChangeText={(text) => setProductImage(text)}
          style={styles.input}
        />
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Selecione a Categoria" value="" />
          {categories.map((category, index) => (
            <Picker.Item key={index} label={category} value={category} />
          ))}
        </Picker>
        <Button title="Cadastrar Produto" margin="10px" onPress={handleRegistration} />
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
