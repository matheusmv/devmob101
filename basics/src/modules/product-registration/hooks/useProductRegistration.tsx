// import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { getItemStorage } from '../../../shared/auth/storage.proxy';
import { AUTORIZATION_KEY } from '../../../shared/auth/authorization.constant';

export type ProductCategory = {
  id: number;
  name: string;
};

const listOfCategories: ProductCategory[] = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Clothing' },
  { id: 3, name: 'Books' },
  { id: 4, name: 'Toys' },
];

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

  const fetchAllCategories = useCallback(async (): Promise<ProductCategory[]> => {
    return new Promise((resolve) => {
      resolve(listOfCategories);
    });
  }, []);

  const submitProductRegistration = async (onSuccess: () => void) => {
    const token = await getItemStorage(AUTORIZATION_KEY);

    if (!token) {
      return;
    }

    // await axios
    //   .post(
    //     'http:192.168.137.49:8080/product',
    //     {
    //       name: productName,
    //       price: productPrice,
    //       image: productImage,
    //       category: selectedCategory?.id,
    //     },
    //     {
    //       headers: {
    //         Authorization: token,
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   )
    //   .then(() => onSuccess())
    //   .catch((err) => console.error(err));

    console.info({
      name: productName,
      price: productPrice,
      image: productImage,
      catetory: selectedCategory?.id,
    });

    onSuccess();
  };

  useEffect(() => {
    (async () => {
      await fetchAllCategories()
        .then((res) => setCategories(res))
        .catch((err) => console.error(err));
    })();
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
