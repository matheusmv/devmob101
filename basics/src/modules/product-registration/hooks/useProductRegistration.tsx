import { useCallback, useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { addProduct, getProductCategories } from '../../../api/vendas-online-backend';

export type ProductCategory = {
  id: number;
  name: string;
  amountProducts: number;
};

export function useProductRegistration() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>();
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  const handleOnChangeProductName = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setProductName(event.nativeEvent.text);
  };

  const handleOnChangeProductPrice = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setProductPrice(event.nativeEvent.text);
  };

  const handleOnChangeProductImage = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setProductImage(event.nativeEvent.text);
  };

  const handleOnChangeProductCategory = (sCategory: ProductCategory) => {
    setSelectedCategory(sCategory);
  };

  const fetchAllCategories = useCallback(async () => {
    await getProductCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const submitProductRegistration = async (onSuccess: () => void) => {
    await addProduct({
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
      categoryId: selectedCategory?.id!,
    })
      .then(() => onSuccess())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  return {
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
  };
}
