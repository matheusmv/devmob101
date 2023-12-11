import { SafeAreaView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useLogin } from '../hooks/useLogin';

import { ContainerPlugin, TitleLogin } from '../styles/login.style';

import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import Header from '../../../shared/components/header/Header';
import { WHITE } from '../../../shared/styles/colors';

function Login() {
  const doNavigation = useNavigation();

  const { credentials, handleOnChangeEmail, handleOnChangePassword, executeAuthentication } =
    useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ContainerPlugin>
        <TitleLogin>Login</TitleLogin>
        <Input
          inputMode="email"
          placeholder="Email"
          value={credentials.email}
          margin="10px"
          onChange={handleOnChangeEmail}
        />
        <Input
          secureTextEntry={true}
          placeholder="Senha"
          value={credentials.password}
          margin="10px"
          onChange={handleOnChangePassword}
        />
        <Button
          title="ENTRAR"
          margin="10px"
          onPress={async () => {
            await executeAuthentication(() => {
              doNavigation.reset({ routes: [{ name: 'HomeScreen' }] });
            });
          }}
        />
      </ContainerPlugin>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
  },
});

export default Login;
