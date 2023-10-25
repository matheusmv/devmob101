import { useSelector } from 'react-redux';
import { RootReducer } from '../../../store';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from '../../../shared/components/header/Header';

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
  const { user } = useSelector((state: RootReducer) => state.userReducer);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image source={require('../../../assets/images/berserk-vol-1.jpg')} style={styles.image} />
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.info}>Email: {user?.email}</Text>
        <Text style={styles.info}>CPF: {formatCPF(user?.cpf || '')}</Text>
        <Text style={styles.info}>Telefone: {formatPhone(user?.phone || '')}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Profile;
