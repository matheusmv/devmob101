import { useState } from 'react';
// import axios from 'axios';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { useDispatch } from 'react-redux';
import { authUser } from '../../../store/user/reducer';

export function useLogin() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = async (onSuccess: () => void) => {
    // await axios
    //   .post('http:192.168.137.49:8080/auth', {
    //     email,
    //     password,
    //   })
    //   .then((res) => {
    //     dispatch(authUser(res.data));
    //     onSuccess();
    //   })
    //   .catch((err) => console.error(err));

    dispatch(
      authUser({
        user: {
          id: 1,
          cpf: '99977755566',
          email: 'john@email.com',
          name: 'john',
          phone: '88542324242',
        },
      }),
    );
    onSuccess();
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
