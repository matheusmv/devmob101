import { useCallback, useEffect, useState } from 'react';
import { API_ADDRESS } from '../../../shared/auth/authorization.constant';
import { getItemStorage, setItemStorage } from '../../../shared/auth/storage.proxy';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { DEFAULT_API_ADDRESS } from '../../../api/vendas-online-backend';

export function useApi() {
  const [apiUrl, setApiUrl] = useState('');

  const changeApiUrl = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setItemStorage(API_ADDRESS, event.nativeEvent.text);
    setApiUrl(event.nativeEvent.text);
  };

  const getApiAddress = useCallback(async () => {
    const address = await getItemStorage(API_ADDRESS);
    setApiUrl(address || DEFAULT_API_ADDRESS);
  }, []);

  useEffect(() => {
    getApiAddress();
  }, [getApiAddress]);

  return {
    apiUrl,
    changeApiUrl,
  };
}
