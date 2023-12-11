import { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { AccountDetails, createAccount } from '../../../api/vendas-online-backend';

export function useRegistration() {
  const [userDetails, setUserDetails] = useState<AccountDetails>({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  const setValueOnState = <K extends keyof AccountDetails, V extends AccountDetails[K]>(
    key: K,
    value: V,
  ): void => {
    setUserDetails((state) => ({ ...state, [key]: value }));
  };

  const handleOnChangeName = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setValueOnState('name', event.nativeEvent.text);
  };

  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setValueOnState('email', event.nativeEvent.text);
  };

  const handleOnChangePhone = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setValueOnState('phone', event.nativeEvent.text.replaceAll(/[ ()-]/g, ''));
  };

  const handleOnChangeCpf = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setValueOnState('cpf', event.nativeEvent.text.replaceAll(/[-.]/g, ''));
  };

  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setValueOnState('password', event.nativeEvent.text);
  };

  const executeAccountCreation = async (onSuccess?: () => void) => {
    await createAccount(userDetails)
      .then(() => {
        onSuccess?.();
      })
      .catch((err) => console.error(err));
  };

  return {
    userDetails,
    handleOnChangeName,
    handleOnChangeEmail,
    handleOnChangePhone,
    handleOnChangeCpf,
    handleOnChangePassword,
    executeAccountCreation,
  };
}
