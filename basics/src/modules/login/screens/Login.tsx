import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useLogin } from '../hooks/useLogin';

import { ContainerPlugin, TitleLogin } from '../styles/login.style';

import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';

function Login() {
  const doNavigation = useNavigation();

  const { email, password, handleOnPress, handleOnChangeEmail, handleOnChangePassword } =
    useLogin();

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
