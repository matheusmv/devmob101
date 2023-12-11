import axios from 'axios';
import { UserDetails, UserProfile } from '../../store/user/reducer';
import { getItemStorage, removeItemStorage } from '../../shared/auth/storage.proxy';
import { AUTORIZATION_KEY } from '../../shared/auth/authorization.constant';
import { ProductCategory } from '../../modules/product-registration/hooks/useProductRegistration';

const api = axios.create({
  baseURL: 'http://192.168.100.70:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export type AuthenticationCredentials = {
  email: string;
  password: string;
};

export async function authenticateUser({
  email,
  password,
}: AuthenticationCredentials): Promise<UserDetails> {
  return api.post('/auth', { email, password }).then((res) => res.data);
}

export async function checkIfUserHasAdminPrivileges(): Promise<boolean> {
  const token = await getItemStorage(AUTORIZATION_KEY);
  if (!token) {
    return false;
  }

  return api
    .get('/user/all', { headers: { Authorization: token } })
    .then(() => true)
    .catch(() => false);
}

export type AccountDetails = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
};

export async function createAccount(details: AccountDetails) {
  return api.post<UserProfile>('/user', details).then((res) => res.data);
}

export async function checkToken(): Promise<UserProfile | null> {
  const token = await getItemStorage(AUTORIZATION_KEY);
  if (!token) {
    return null;
  }

  return api.get<UserProfile>('/user', { headers: { Authorization: token } }).then((res) => {
    if (!res?.data) {
      removeItemStorage(AUTORIZATION_KEY);
      return null;
    }

    return res.data;
  });
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  const token = await getItemStorage(AUTORIZATION_KEY);
  if (!token) {
    return [];
  }

  return api
    .get<ProductCategory[]>('/category', { headers: { Authorization: token } })
    .then((res) => res.data);
}

type ProductRegistrationDetails = {
  name: string;
  price: number;
  image: string;
  categoryId: number;
};

export async function addProduct(product: ProductRegistrationDetails): Promise<void> {
  const token = await getItemStorage(AUTORIZATION_KEY);
  if (!token) {
    return;
  }

  return api.post('/product', product, { headers: { Authorization: token } });
}

export type ProductInfo = {
  category: { id: number; name: string };
  id: number;
  image: string;
  name: string;
  price: number;
};

export async function fetchAllProducts(): Promise<ProductInfo[]> {
  const token = await getItemStorage(AUTORIZATION_KEY);
  if (!token) {
    return [];
  }

  return api
    .get<ProductInfo[]>('/product', { headers: { Authorization: token } })
    .then((res) => res.data);
}

export async function fetchProductById(id: number): Promise<ProductInfo | null> {
  const token = await getItemStorage(AUTORIZATION_KEY);
  if (!token) {
    return null;
  }

  return api
    .get<ProductInfo>(`/product/${id}`, { headers: { Authorization: token } })
    .then((res) => res.data);
}
