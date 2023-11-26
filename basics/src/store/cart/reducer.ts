import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductInfo } from '../../api/vendas-online-backend';

export type ShopCart = {
  products: Array<{ product: ProductInfo; quantity: number }>;
  totalPrice: number;
};

const cartState: ShopCart = {
  products: [],
  totalPrice: 0,
};

const getTotalPrice = (products: ShopCart['products']): number => {
  return products.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
};

const slice = createSlice({
  name: 'cart',
  initialState: cartState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ product: ProductInfo; quantity: number }>) => {
      const productExists = state.products.find((p) => p.product.id === action.payload.product.id);
      if (productExists) {
        productExists.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.totalPrice = getTotalPrice(state.products);
    },
    removeProduct: (state, action: PayloadAction<ProductInfo>) => {
      state.products = state.products.filter((p) => p.product.id !== action.payload.id);
      state.totalPrice = getTotalPrice(state.products);
    },
    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = slice.actions;

export default slice.reducer;
