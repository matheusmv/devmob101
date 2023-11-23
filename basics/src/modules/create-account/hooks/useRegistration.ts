import { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { createAccount } from '../../../api/vendas-online-backend';

export function useRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = async (onSuccess: () => void) => {
    await createAccount({ name, email, phone, cpf, password })
      .then((user) => {
        console.log(user);
        onSuccess();
      })
      .catch((err) => console.error(err));
  };

  const handleOnChangeName = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setName(event.nativeEvent.text);
  };

  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setEmail(event.nativeEvent.text);
  };

  const handleOnChangePhone = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setPhone(event.nativeEvent.text);
  };

  const handleOnChangeCpf = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setCpf(event.nativeEvent.text);
  };

  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setPassword(event.nativeEvent.text);
  };

  return {
    name,
    email,
    phone,
    cpf,
    password,
    handleOnPress,
    handleOnChangeName,
    handleOnChangeEmail,
    handleOnChangePhone,
    handleOnChangeCpf,
    handleOnChangePassword,
  };
}
