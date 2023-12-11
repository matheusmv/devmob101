import { useNavigation } from '@react-navigation/native';

import { ContainerPlugin, TitleLogin } from '../styles/create-account.style';

import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import { useRegistration } from '../hooks/useRegistration';
import Header from '../../../shared/components/header/Header';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WHITE } from '../../../shared/styles/colors';

function parseAndPrettifyPhone(phone: string): string {
  const phoneRegex = /(\d{2})(\d{0,5})(\d{0,})/;

  let phoneGroup = phone.match(phoneRegex);

  if (!phoneGroup) {
    return phone;
  }

  let [_, ddd, p1, p2] = phoneGroup;

  ddd = p1 ? `(${ddd})` : ddd;
  ddd += p1 !== '' ? ` ${p1}` : p1;
  ddd += p2 !== '' ? '-' + p2 : p2;

  return ddd;
}

function parseAndPrettifyCPF(cpf: string): string {
  const cpfRegex = /(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,})/;

  let cpfGroup = cpf.match(cpfRegex);

  if (!cpfGroup) {
    return cpf;
  }

  let [_, s1, s2, s3, s4] = cpfGroup;

  s1 += s2 ? '.' + s2 : s2;
  s1 += s3 ? '.' + s3 : s3;
  s1 += s4 ? '-' + s4 : s4;

  return s1;
}

function CreateAccount() {
  const doNavigation = useNavigation();

  const {
    userDetails,
    handleOnChangeName,
    handleOnChangeEmail,
    handleOnChangePhone,
    handleOnChangeCpf,
    handleOnChangePassword,
    executeAccountCreation,
  } = useRegistration();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ContainerPlugin>
        <TitleLogin>Nova Conta</TitleLogin>
        <Input
          placeholder="Nome"
          value={userDetails.name}
          margin="10px"
          onChange={handleOnChangeName}
        />
        <Input
          inputMode="email"
          placeholder="Email"
          value={userDetails.email}
          margin="10px"
          onChange={handleOnChangeEmail}
        />
        <Input
          inputMode="tel"
          placeholder="Telefone"
          value={parseAndPrettifyPhone(userDetails.phone)}
          margin="10px"
          onChange={handleOnChangePhone}
        />
        <Input
          inputMode="numeric"
          placeholder="CPF"
          value={parseAndPrettifyCPF(userDetails.cpf)}
          margin="10px"
          onChange={handleOnChangeCpf}
        />
        <Input
          secureTextEntry={true}
          placeholder="Senha"
          value={userDetails.password}
          margin="10px"
          onChange={handleOnChangePassword}
        />
        <Button
          title="Confirmar"
          margin="10px"
          onPress={async () => {
            await executeAccountCreation(() => {
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
