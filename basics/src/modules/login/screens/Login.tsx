import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useLogin } from '../hooks/useLogin';

import { ContainerPlugin, TitleLogin } from '../styles/login.style';

import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { useEffect } from 'react';
import { getItemStorage } from '../../../shared/auth/storage.proxy';
import { AUTORIZATION_KEY } from '../../../shared/auth/authorization.constant';
// import axios from 'axios';
// import { UserProfile } from '../../../store/user/reducer';

function Login() {
  const doNavigation = useNavigation();

  const { email, password, handleOnPress, handleOnChangeEmail, handleOnChangePassword } =
    useLogin();

  useEffect(() => {
    (async () => {
      const token = await getItemStorage(AUTORIZATION_KEY);
      if (!token) {
        return;
      }

      // await axios
      //   .get<UserProfile>('http://192.168.137.49:8080/user', {
      //     headers: { Authorization: token, 'Content-Type': 'application/json' },
      //   })
      //   .then((user) => {
      //     if (user) {
      //       doNavigation.navigate('Home');
      //     }
      //   })
      //   .catch((err: Error) => console.error(err.message));

      doNavigation.navigate('Home');
    })();
  }, [doNavigation]);

  return (
    <View>
      <ContainerPlugin>
        <TitleLogin>Login</TitleLogin>
        <Input placeholder="Email" value={email} margin="10px" onChange={handleOnChangeEmail} />
        <Input
          placeholder="Senha"
          value={password}
          margin="10px"
          onChange={handleOnChangePassword}
        />
        <Button
          title="ENTRAR"
          margin="10px"
          onPress={async () => {
            await handleOnPress(() => {
              doNavigation.reset({ routes: [{ name: 'Home' }] });
            });
          }}
        />
      </ContainerPlugin>
    </View>
  );
}

export default Login;
