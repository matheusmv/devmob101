import { useNavigation } from '@react-navigation/native';

import { ContainerPlugin, TitleLogin } from '../styles/create-account.style';

import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { useRegistration } from '../hooks/useRegistration';
import Header from '../../../shared/components/header/Header';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WHITE } from '../../../shared/styles/colors';

function CreateAccount() {
  const doNavigation = useNavigation();

  const {
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
  } = useRegistration();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ContainerPlugin>
        <TitleLogin>Nova Conta</TitleLogin>
        <Input placeholder="Nome" value={name} margin="10px" onChange={handleOnChangeName} />
        <Input
          inputMode="email"
          placeholder="Email"
          value={email}
          margin="10px"
          onChange={handleOnChangeEmail}
        />
        <Input
          inputMode="tel"
          placeholder="Telefone"
          value={phone}
          margin="10px"
          onChange={handleOnChangePhone}
        />
        <Input
          inputMode="numeric"
          placeholder="CPF"
          value={cpf}
          margin="10px"
          onChange={handleOnChangeCpf}
        />
        <Input
          secureTextEntry={true}
          placeholder="Senha"
          value={password}
          margin="10px"
          onChange={handleOnChangePassword}
        />
        <Button
          title="Confirmar"
          margin="10px"
          onPress={async () => {
            await handleOnPress(() => {
              doNavigation.reset({ routes: [{ name: 'Main' }] });
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

export default CreateAccount;
