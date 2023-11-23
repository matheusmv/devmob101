import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../../store';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../../../shared/components/header/Header';
import Button from '../../../shared/components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { removeItemStorage } from '../../../shared/auth/storage.proxy';
import { AUTORIZATION_KEY } from '../../../shared/auth/authorization.constant';
import { clear } from '../../../store/user/reducer';

const formatCPF = (cpf: string) => {
  const cpfRegex = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/;

  if (!cpfRegex.test(cpf)) {
    return cpf;
  }

  return cpf.replace(cpfRegex, '$1.$2.$3-$4');
};

const formatPhone = (phone: string) => {
  const phoneRegex = /^([\d]{2})([\d]{5})([\d]{4})$/;

  if (!phoneRegex.test(phone || '')) {
    return phone;
  }

  return phone.replace(phoneRegex, '($1) $2-$3');
};

function Profile() {
  const dispatch = useDispatch();
  const doNavigation = useNavigation();

  const { user } = useSelector((state: RootReducer) => state.userReducer);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Image source={require('../../../assets/images/image_not_found.png')} style={styles.image} />
      <View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.info}>Email: {user?.email}</Text>
        <Text style={styles.info}>CPF: {formatCPF(user?.cpf || '')}</Text>
        <Text style={styles.info}>Telefone: {formatPhone(user?.phone || '')}</Text>
      </View>
      <Button
        title="SAIR"
        style={styles.logoutBtn}
        onPress={async () => {
          await removeItemStorage(AUTORIZATION_KEY);
          dispatch(clear());
          doNavigation.reset({ routes: [{ name: 'Main' }] });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  logoutBtn: {},
});

export default Profile;
