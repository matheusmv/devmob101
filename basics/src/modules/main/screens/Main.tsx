import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import Button from '../../../shared/components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, WHITE } from '../../../shared/styles/colors';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { checkIfUserHasAdminPrivileges, checkToken } from '../../../api/vendas-online-backend';
import { adminRole, setUser } from '../../../store/user/reducer';
import Input from '../../../shared/components/input/Input';
import { useApi } from '../hooks/useApi';
import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Main() {
  const dispatch = useDispatch();
  const doNavigation = useNavigation();

  const [loading, setLoading] = useState(true);

  const { apiUrl, changeApiUrl } = useApi();

  const checkUserToken = useCallback(async () => {
    try {
      const user = await checkToken();
      if (!user) {
        setLoading(false);
      } else {
        dispatch(setUser(user));

        const isAdmin = await checkIfUserHasAdminPrivileges();
        dispatch(adminRole(isAdmin));

        doNavigation.navigate('HomeScreen');
      }
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, doNavigation]);

  useEffect(() => {
    checkUserToken();
  }, [checkUserToken]);

  if (loading) {
    return (
      <View style={styles.loadScreen}>
        <ActivityIndicator size="large" color={PRIMARY} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Login"
        margin="10px"
        onPress={() => {
          doNavigation.navigate('Login');
        }}
      />
      <Button
        title="Criar Conta"
        margin="10px"
        onPress={() => {
          doNavigation.navigate('CreateAccount');
        }}
      />
      <View style={styles.apiConfig}>
        <Input
          style={styles.apiAddressInput}
          inputMode="text"
          value={apiUrl}
          onChange={changeApiUrl}
        />
        <TouchableOpacity style={styles.appReloadButton}>
          <Icon name="sync-alt" size={23} color={WHITE} onPress={() => RNRestart.Restart()} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  loadScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  apiConfig: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  apiAddressInput: {
    width: 320,
  },
  appReloadButton: {
    backgroundColor: PRIMARY,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});

export default Main;
