import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setItemStorage(key: string, value: string) {
  AsyncStorage.setItem(key, value).catch((err) => console.error(err));
}

export async function getItemStorage(key: string) {
  return AsyncStorage.getItem(key).catch((err) => console.error(err));
}

export async function removeItemStorage(key: string) {
  AsyncStorage.removeItem(key).catch((err) => console.error(err));
}
