import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import Button from '../../../shared/components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, WHITE } from '../../../shared/styles/colors';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { checkToken } from '../../../api/vendas-online-backend';
import { setUser } from '../../../store/user/reducer';

function Main() {
  const dispatch = useDispatch();

  const doNavigation = useNavigation();

  const [loading, setLoading] = useState(true);

  const checkUserToken = useCallback(async () => {
    try {
      const user = await checkToken();
      if (!user) {
        setLoading(false);
      } else {
        dispatch(setUser(user));
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
});

export default Main;
