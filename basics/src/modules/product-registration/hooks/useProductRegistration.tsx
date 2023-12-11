import { useCallback, useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { addProduct, getProductCategories } from '../../../api/vendas-online-backend';

export type ProductCategory = {
  id: number;
  name: string;
  amountProducts: number;
};

type NewProduct = {
  name: string;
  price: string;
  image: string;
  category: ProductCategory;
};

export function useProductRegistration() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  const [productDetails, setProductDetails] = useState<NewProduct>({
    name: '',
    price: '',
    image: '',
    category: {
      id: -1,
      name: '',
      amountProducts: -1,
    },
  });

  const setValueOnState = <K extends keyof NewProduct, V extends NewProduct[K]>(
    key: K,
    value: V,
  ): void => {
    setProductDetails((state) => ({ ...state, [key]: value }));
  };

  const handleOnChangeProductName = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setValueOnState('name', event.nativeEvent.text);
  };

  const handleOnChangeProductPrice = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setValueOnState('price', event.nativeEvent.text);
  };

  const handleOnChangeProductImage = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setValueOnState('image', event.nativeEvent.text);
  };

  const handleOnChangeProductCategory = (sCategory: ProductCategory) => {
    setValueOnState('category', sCategory);
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

  const submitProductRegistration = async (onSuccess?: () => void) => {
    await addProduct({
      name: productDetails.name,
      price: parseFloat(productDetails.price),
      image: productDetails.image,
      categoryId: productDetails.category.id,
    })
      .then(() => onSuccess?.())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  return {
    productDetails,
    categories,
    handleOnChangeProductName,
    handleOnChangeProductPrice,
    handleOnChangeProductImage,
    handleOnChangeProductCategory,
    submitProductRegistration,
  };
}
