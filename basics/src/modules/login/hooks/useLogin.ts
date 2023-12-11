import { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { useDispatch } from 'react-redux';
import { adminRole, authUser } from '../../../store/user/reducer';
import { setItemStorage } from '../../../shared/auth/storage.proxy';
import { AUTORIZATION_KEY } from '../../../shared/auth/authorization.constant';
import {
  AuthenticationCredentials,
  authenticateUser,
  checkIfUserHasAdminPrivileges,
} from '../../../api/vendas-online-backend';

export function useLogin() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState<AuthenticationCredentials>({
    email: '',
    password: '',
  });

  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setCredentials((state) => ({ ...state, email: event.nativeEvent.text }));
  };

  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setCredentials((state) => ({ ...state, password: event.nativeEvent.text }));
  };

  const executeAuthentication = async (onSuccess?: () => void) => {
    await authenticateUser(credentials)
      .then(async (res) => {
        setItemStorage(AUTORIZATION_KEY, res.accessToken || '');
        dispatch(authUser(res));

        const isAdmin = await checkIfUserHasAdminPrivileges();
        dispatch(adminRole(isAdmin));

        onSuccess?.();
      })
      .catch((err) => console.error(err));
  };

  return {
    credentials,
    handleOnChangeEmail,
    handleOnChangePassword,
    executeAuthentication,
  };
}
