import { View } from 'react-native';

import { useLogin } from '../hooks/useLogin';

import { ContainerPlugin, TitleLogin } from '../styles/login.style';

import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';

function Login() {
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
        <Button title="ENTRAR" margin="10px" onPress={handleOnPress} />
      </ContainerPlugin>
    </View>
  );
}

export default Login;
