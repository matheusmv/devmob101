import { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = () => {
    console.log(`email: ${email}, password: ${password}`);
  };

  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setEmail(event.nativeEvent.text);
  };

  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
}
