import { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { useDispatch } from 'react-redux';
import { adminRole, authUser } from '../../../store/user/reducer';
import { setItemStorage } from '../../../shared/auth/storage.proxy';
import { AUTORIZATION_KEY } from '../../../shared/auth/authorization.constant';
import {
  authenticateUser,
  checkIfUserHasAdminPrivileges,
} from '../../../api/vendas-online-backend';

export function useLogin() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnPress = async (onSuccess: () => void) => {
    await authenticateUser(email, password)
      .then(async (res) => {
        setItemStorage(AUTORIZATION_KEY, res.accessToken || '');
        dispatch(authUser(res));

        const isAdmin = await checkIfUserHasAdminPrivileges();
        dispatch(adminRole(isAdmin));

        onSuccess();
      })
      .catch((err) => console.error(err));
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
